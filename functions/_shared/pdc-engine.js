import { PDC_AGENTS, QUICK_AGENT_IDS, getAgentById } from "./pdc-agents.js";
import { PDC_TEAMS } from "./pdc-teams.js";
import { DEFAULT_CF_MODEL, MissingAiBindingError, callLLM, parseJsonFromLLM } from "./pdc-provider.js";

const VALID_MODES = new Set(["quick_mode", "individual_debate", "preset_team_debate", "custom_team_debate", "hybrid_debate"]);
const VALID_ROUNDS = new Set(["round_1a", "user_intervention"]);
const ALL_AGENT_IDS = PDC_AGENTS.map((agent) => agent.id);

export async function runPdcRound(input, env) {
  if (!env?.AI) {
    return {
      status: 503,
      body: {
        error: "AI_BINDING_MISSING",
        message: "未检测到 Cloudflare Workers AI binding。请在 Cloudflare Pages 中配置 AI binding，名称为 AI。",
      },
    };
  }

  const topic = clean(input.topic, 800);
  const context = clean(input.context, 4000);
  const mode = VALID_ROUNDS.has(input.mode) ? input.mode : "round_1a";
  const meetingMode = normalizeMeetingMode(input.meeting_mode);
  const selectedAgentIds = normalizeSelectedAgents(input.selected_agents, meetingMode);
  const customGroups = normalizeCustomGroups(input.custom_groups);
  const includeUngrouped = Boolean(input.include_ungrouped_as_individuals);
  const previousSummary = clean(input.previous_summary, 2500);
  const userIntervention = clean(input.user_intervention, 1500);

  if (!topic) {
    return { status: 400, body: { error: "TOPIC_REQUIRED", message: "请输入决策议题。" } };
  }

  const participantPlans = buildParticipantPlans({ meetingMode, selectedAgentIds, customGroups, includeUngrouped });
  if (!participantPlans.length) {
    return { status: 400, body: { error: "NO_PARTICIPANTS", message: "请至少选择一位参会人或创建一个小组。" } };
  }

  const participants = await Promise.all(participantPlans.map((plan) => {
    if (plan.type === "team") return runTeam({ plan, topic, context, mode, previousSummary, userIntervention, env });
    return runAgent({ agent: plan.agent, topic, context, mode, previousSummary, userIntervention, env });
  }));

  const summary = buildStructuredSummary(topic, participants);
  return {
    status: 200,
    body: {
      round: mode,
      meeting_mode: meetingMode,
      participants,
      agent_outputs: participants.filter((item) => item.participant_type === "agent").map(toLegacyAgentOutput),
      team_outputs: participants.filter((item) => item.participant_type === "team").map(toLegacyTeamOutput),
      summary,
      next_step: "挑一个最尖锐的分歧继续追问，或补充真实限制、时间成本、用户反馈，让 PDC 继续收敛。",
    },
  };
}

function normalizeMeetingMode(value) {
  if (value === "team_debate") return "preset_team_debate";
  if (value === "select_agents" || value === "full_council") return "individual_debate";
  return VALID_MODES.has(value) ? value : "preset_team_debate";
}

function normalizeSelectedAgents(selectedAgents, meetingMode) {
  const validIds = new Set(ALL_AGENT_IDS);
  const ids = (selectedAgents || []).map(normalizeAgentId).filter((id) => validIds.has(id));
  if (meetingMode === "quick_mode") return QUICK_AGENT_IDS;
  if (meetingMode === "individual_debate") return ids.length ? ids : ALL_AGENT_IDS;
  if (meetingMode === "hybrid_debate") return ids.length ? ids : ALL_AGENT_IDS;
  return ids;
}

function normalizeCustomGroups(groups) {
  return (Array.isArray(groups) ? groups : [])
    .map((group, index) => {
      const memberIds = [...new Set((group.member_ids || []).map(normalizeAgentId).filter((id) => getAgentById(id)))];
      return {
        id: clean(group.group_id, 80) || `custom_group_${index + 1}`,
        name: clean(group.group_name, 120) || `自定义小组 ${index + 1}`,
        purpose: clean(group.group_purpose, 320) || "从自定义角度论证这个决策。",
        memberIds,
      };
    })
    .filter((group) => group.memberIds.length);
}

function buildParticipantPlans({ meetingMode, selectedAgentIds, customGroups, includeUngrouped }) {
  if (meetingMode === "quick_mode") {
    return QUICK_AGENT_IDS.map((id) => ({ type: "agent", agent: getAgentById(id) })).filter((plan) => plan.agent);
  }

  if (meetingMode === "individual_debate") {
    return selectedAgentIds.map((id) => ({ type: "agent", agent: getAgentById(id) })).filter((plan) => plan.agent);
  }

  if (meetingMode === "preset_team_debate") {
    return PDC_TEAMS.map((team) => ({
      type: "team",
      id: team.id,
      name: team.name,
      purpose: team.purpose,
      memberIds: team.memberIds,
      focus: team.focus,
      coreQuestion: team.coreQuestion,
      tensionHint: team.tensionHint,
    }));
  }

  if (meetingMode === "custom_team_debate") {
    return customGroups.map((group) => ({ type: "team", ...group }));
  }

  const usedIds = new Set(customGroups.flatMap((group) => group.memberIds));
  const plans = customGroups.map((group) => ({ type: "team", ...group }));
  if (includeUngrouped) {
    selectedAgentIds
      .filter((id) => !usedIds.has(id))
      .forEach((id) => {
        const agent = getAgentById(id);
        if (agent) plans.push({ type: "agent", agent });
      });
  }
  return plans;
}

async function runAgent({ agent, topic, context, mode, previousSummary, userIntervention, env }) {
  const systemPrompt = `你是个人 PDC 决策委员会的一位 AI 合伙人。所有输出必须是中文。只输出 JSON，不要 markdown。
你不是 DishKAI 菜品 agent；DishKAI 只是测试这个通用个人决策系统的 host project。
字段必须是：
{
  "decision_bias": "你的决策偏向标签",
  "position": "明确站队或有条件判断，最多120个中文字符",
  "response_to_user": "直接回应用户最新补充，最多120个中文字符",
  "strongest_counterargument": "你认为对自己立场最强的反驳，最多100个中文字符",
  "recommendation": "具体行动建议，最多80个中文字符",
  "risk": "关键风险，最多80个中文字符",
  "challenge": "点名挑战另一位 agent 或一种观点，最多100个中文字符"
}
禁止空话：需要权衡多个因素、需要进一步分析、建议收集更多信息、取决于具体情况、各有利弊、需要找到最合适方案。
不要重复用户背景。不要输出英文。`;

  const userPrompt = `当前轮次：${mode}
决策议题：${topic}
背景信息：${context || "无"}
上一轮摘要：${previousSummary || "无"}
用户补充 / 追问 / 纠正：${userIntervention || "无"}

你的身份：
姓名：${agent.name}
角色：${agent.role}
关注：${agent.focus}
性格：${agent.personality}
盲点：${agent.blindSpot}
签名句：${agent.signature}
特别规则：${agent.specialRule || "无"}

请从你的角度挑战这个决策。Orion Zhuge 必须明确这是象征性 / 隐喻性视角，不是事实预测。`;

  try {
    const raw = await callLLM({ systemPrompt, userPrompt, env, model: DEFAULT_CF_MODEL });
    return cleanAgentParticipant(parseJsonFromLLM(raw), agent);
  } catch (error) {
    if (error instanceof MissingAiBindingError) throw error;
    return fallbackAgentParticipant(agent, error);
  }
}

async function runTeam({ plan, topic, context, mode, previousSummary, userIntervention, env }) {
  const members = plan.memberIds.map(getAgentById).filter(Boolean);
  const memberText = members.map((agent) => `- ${agent.name}：${agent.role}，职责：${agent.focus}`).join("\n");
  const systemPrompt = `你是个人 PDC 决策委员会的小组发言人。所有输出必须是中文。只输出 JSON，不要 markdown。
字段必须是：
{
  "decision_bias": "小组决策偏向标签",
  "position": "明确站队或有条件判断，最多150个中文字符",
  "response_to_user": "直接回应用户最新补充，最多120个中文字符",
  "internal_tension": "体现组内微冲突，最多150个中文字符",
  "strongest_counterargument": "对本组立场最强的反驳，最多120个中文字符",
  "recommendation": "具体行动建议，最多100个中文字符",
  "risk": "关键风险，最多100个中文字符",
  "challenge": "向其他小组或个人提出真实挑战，最多100个中文字符"
}
必须体现组员职责和组内张力。禁止空话。不要重复用户背景。不要输出英文。`;

  const userPrompt = `当前轮次：${mode}
决策议题：${topic}
背景信息：${context || "无"}
上一轮摘要：${previousSummary || "无"}
用户补充 / 追问 / 纠正：${userIntervention || "无"}

小组名称：${plan.name}
小组任务 / 立场：${plan.purpose || plan.focus || "从小组角度挑战这个决策。"}
核心问题：${plan.coreQuestion || "这个方向是否值得继续？"}
组内张力提示：${plan.tensionHint || "不同成员必须体现微冲突，而不是完全一致。"}
组员：
${memberText}`;

  try {
    const raw = await callLLM({ systemPrompt, userPrompt, env, model: DEFAULT_CF_MODEL });
    return cleanTeamParticipant(parseJsonFromLLM(raw), plan, members);
  } catch (error) {
    if (error instanceof MissingAiBindingError) throw error;
    return fallbackTeamParticipant(plan, members, error);
  }
}

function cleanAgentParticipant(value, agent) {
  const output = value || {};
  return {
    participant_type: "agent",
    id: agent.id,
    name: agent.name,
    role_or_purpose: agent.role,
    members: [],
    decision_bias: clean(output.decision_bias, 80) || agent.role,
    position: clean(output.position, 180) || clean(output.statement, 180) || "我倾向先用真实议题小范围验证。",
    response_to_user: clean(output.response_to_user, 180) || "你的补充会改变优先级，但不能替代真实验证。",
    internal_tension: "",
    strongest_counterargument: clean(output.strongest_counterargument, 150) || "反方会说现在投入会分散主项目注意力。",
    recommendation: clean(output.recommendation, 120) || "把议题拆成一个明天能验证的小动作。",
    risk: clean(output.risk, 120) || "讨论变漂亮，但没有真实决策压力。",
    challenge: clean(output.challenge, 150) || "我挑战过度抽象的观点：请给出明天可验证的行为。",
  };
}

function cleanTeamParticipant(value, plan, members) {
  const output = value || {};
  return {
    participant_type: "team",
    id: plan.id,
    name: plan.name,
    role_or_purpose: plan.purpose || plan.focus || "",
    members: members.map((agent) => ({
      agent_id: agent.id,
      name: agent.name,
      role: agent.role,
      responsibility: agent.focus,
    })),
    decision_bias: clean(output.decision_bias, 80) || plan.name,
    position: clean(output.position, 220) || "本组认为方向可以继续，但必须变成可验证动作。",
    response_to_user: clean(output.response_to_user, 180) || "你的补充是有效限制，应直接改变下一步验证方式。",
    internal_tension: clean(output.internal_tension, 220) || plan.tensionHint || "组内对速度、体验和边界存在不同优先级。",
    strongest_counterargument: clean(output.strongest_counterargument, 180) || "反方会说这只是内部系统兴奋，还没有证明外部价值。",
    recommendation: clean(output.recommendation, 150) || "用一个真实高压议题跑完一轮，并记录是否产生行动。",
    risk: clean(output.risk, 150) || "如果没有真实使用者，会议会变成自我确认。",
    challenge: clean(output.challenge, 150) || clean(output.challenge_to_other_team, 150) || "请其他组说明自己的判断如何被真实行为验证。",
  };
}

function fallbackAgentParticipant(agent, error) {
  return {
    participant_type: "agent",
    id: agent.id,
    name: agent.name,
    role_or_purpose: agent.role,
    members: [],
    decision_bias: "调用异常",
    position: clean(error?.message, 180) || "该成员调用失败。",
    response_to_user: "未能生成有效回应。",
    internal_tension: "",
    strongest_counterargument: "输出格式异常，需人工查看。",
    recommendation: "输出格式异常，需人工查看。",
    risk: "JSON 解析失败或模型调用失败。",
    challenge: "请人工检查该成员输出。",
  };
}

function fallbackTeamParticipant(plan, members, error) {
  return {
    participant_type: "team",
    id: plan.id,
    name: plan.name,
    role_or_purpose: plan.purpose || "",
    members: members.map((agent) => ({ agent_id: agent.id, name: agent.name, role: agent.role, responsibility: agent.focus })),
    decision_bias: "调用异常",
    position: clean(error?.message, 220) || "该小组调用失败。",
    response_to_user: "未能生成有效回应。",
    internal_tension: plan.tensionHint || "组内张力未能生成。",
    strongest_counterargument: "输出格式异常，需人工查看。",
    recommendation: "输出格式异常，需人工查看。",
    risk: "JSON 解析失败或模型调用失败。",
    challenge: "请人工检查该组输出。",
  };
}

function buildStructuredSummary(topic, participants) {
  return {
    focus: `围绕「${topic}」的本轮 PDC 判断。`,
    strongest_direction: clean(participants.map((item) => `${item.name}：${item.recommendation}`).join("；"), 900),
    missing_information: "需要更具体的时间成本、真实用户反馈、机会成本和下一步验证条件。",
    suggested_next_question: "如果只能用 48 小时验证一个假设，应该验证哪一个？",
  };
}

function toLegacyAgentOutput(item) {
  return {
    agent_id: item.id,
    name: item.name,
    role: item.role_or_purpose,
    statement: item.position,
    recommendation: item.recommendation,
    risk: item.risk,
  };
}

function toLegacyTeamOutput(item) {
  return {
    team_id: item.id,
    team_name: item.name,
    members: item.members.map((member) => member.name),
    position: item.position,
    internal_tension: item.internal_tension,
    recommendation: item.recommendation,
    risk: item.risk,
    challenge_to_other_team: item.challenge,
  };
}

function normalizeAgentId(id) {
  return String(id || "").trim().replace(/_/g, "-");
}

function clean(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}
