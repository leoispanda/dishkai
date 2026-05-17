import { PDC_AGENTS, QUICK_AGENT_IDS, getAgentById } from "./pdc-agents.js";
import { PDC_TEAMS } from "./pdc-teams.js";
import { DEFAULT_CF_MODEL, MissingAiBindingError, callLLM, parseJsonFromLLM } from "./pdc-provider.js";

const VALID_MODES = new Set(["quick_mode", "team_debate", "select_agents", "full_council"]);
const VALID_ROUNDS = new Set(["round_1a", "user_intervention"]);

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
  const meetingMode = normalizeMeetingMode(input.meeting_mode, input.selected_agents);
  const selectedAgentIds = normalizeSelectedAgents(input.selected_agents, meetingMode);
  const previousSummary = clean(input.previous_summary, 2500);
  const userIntervention = clean(input.user_intervention, 1500);

  if (!topic) {
    return { status: 400, body: { error: "TOPIC_REQUIRED", message: "请输入决策议题。" } };
  }

  if (meetingMode === "team_debate") {
    const teamOutputs = await Promise.all(PDC_TEAMS.map((team) => runTeam({ team, topic, context, mode, previousSummary, userIntervention, env })));
    const summary = summarizeTeams(topic, teamOutputs);
    return {
      status: 200,
      body: {
        round: mode,
        meeting_mode: "team_debate",
        team_outputs: teamOutputs,
        summary,
        next_step: "如果你不同意某一组的判断，补充你的限制、时间成本或真实用户反馈，让委员会继续收敛。",
      },
    };
  }

  const agents = selectedAgentIds.map(getAgentById).filter(Boolean);
  const agentOutputs = await Promise.all(agents.map((agent) => runAgent({ agent, topic, context, mode, previousSummary, userIntervention, env })));
  const summary = summarizeAgents(topic, agentOutputs);
  return {
    status: 200,
    body: {
      round: mode,
      meeting_mode: meetingMode,
      agent_outputs: agentOutputs,
      summary,
      next_step: "请选择一个最尖锐的分歧点继续追问，或补充现实限制让 PDC 重新判断。",
    },
  };
}

function normalizeMeetingMode(value, selectedAgents) {
  if (value === "select_agents" && (!Array.isArray(selectedAgents) || selectedAgents.length === 0)) return "quick_mode";
  return VALID_MODES.has(value) ? value : "team_debate";
}

function normalizeSelectedAgents(selectedAgents, meetingMode) {
  if (meetingMode === "full_council") return PDC_AGENTS.map((agent) => agent.id);
  if (meetingMode === "select_agents") {
    const validIds = new Set(PDC_AGENTS.map((agent) => agent.id));
    const ids = (selectedAgents || []).filter((id) => validIds.has(id));
    return ids.length ? ids : QUICK_AGENT_IDS;
  }
  return QUICK_AGENT_IDS;
}

async function runAgent({ agent, topic, context, mode, previousSummary, userIntervention, env }) {
  const systemPrompt = `你是个人 PDC 决策委员会的一位 AI 合伙人。所有输出必须是中文。只输出 JSON，不要 markdown。
你不是 DishKAI 菜品 agent；DishKAI 只是测试这个通用个人决策系统的 host project。
字段必须是：
{
  "agent_id": "${agent.id}",
  "name": "${agent.name}",
  "role": "${agent.role}",
  "statement": "最多120个中文字符",
  "recommendation": "最多80个中文字符",
  "risk": "最多80个中文字符"
}
不要空泛赞同。不要长篇大论。不要输出英文。`;

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
    return cleanAgentOutput(parseJsonFromLLM(raw), agent);
  } catch (error) {
    if (error instanceof MissingAiBindingError) throw error;
    return fallbackAgent(agent, error);
  }
}

async function runTeam({ team, topic, context, mode, previousSummary, userIntervention, env }) {
  const systemPrompt = `你是个人 PDC 决策委员会的小组发言人。所有输出必须是中文。只输出 JSON，不要 markdown。
字段必须是：
{
  "team_id": "${team.id}",
  "team_name": "${team.name}",
  "members": ["成员"],
  "position": "最多150个中文字符",
  "internal_tension": "最多150个中文字符",
  "recommendation": "最多100个中文字符",
  "risk": "最多100个中文字符",
  "challenge_to_other_team": "最多100个中文字符"
}
必须体现小组内部微冲突，不要写成完全一致。不要输出英文。`;

  const userPrompt = `当前轮次：${mode}
决策议题：${topic}
背景信息：${context || "无"}
上一轮摘要：${previousSummary || "无"}
用户补充 / 追问 / 纠正：${userIntervention || "无"}

小组：${team.name}
成员：${team.members.join("、")}
关注：${team.focus}
核心问题：${team.coreQuestion}
组内张力提示：${team.tensionHint}

请给出小组立场、组内张力、建议、风险，以及向其他小组提出的挑战。`;

  try {
    const raw = await callLLM({ systemPrompt, userPrompt, env, model: DEFAULT_CF_MODEL });
    return cleanTeamOutput(parseJsonFromLLM(raw), team);
  } catch (error) {
    if (error instanceof MissingAiBindingError) throw error;
    return fallbackTeam(team, error);
  }
}

function cleanAgentOutput(value, agent) {
  const output = value || {};
  return {
    agent_id: agent.id,
    name: agent.name,
    role: agent.role,
    statement: clean(output.statement, 180) || "我需要更清晰的约束，才能给出有效判断。",
    recommendation: clean(output.recommendation, 120) || "补充目标、时限和真实用户对象。",
    risk: clean(output.risk, 120) || "信息不足会导致判断漂浮。",
  };
}

function cleanTeamOutput(value, team) {
  const output = value || {};
  return {
    team_id: team.id,
    team_name: team.name,
    members: team.members,
    position: clean(output.position, 220) || "小组认为方向可以讨论，但需要更明确的验证标准。",
    internal_tension: clean(output.internal_tension, 220) || team.tensionHint,
    recommendation: clean(output.recommendation, 150) || "把议题拆成一个可在明天验证的小动作。",
    risk: clean(output.risk, 150) || "如果验证对象不真实，讨论会变成内部自洽。",
    challenge_to_other_team: clean(output.challenge_to_other_team, 150) || "请说明你们的判断如何被真实用户验证。",
  };
}

function fallbackAgent(agent, error) {
  return {
    agent_id: agent.id,
    name: agent.name,
    role: agent.role,
    statement: clean(error?.message, 180) || "该成员调用失败。",
    recommendation: "输出格式异常，需人工查看。",
    risk: "JSON 解析失败或模型调用失败。",
  };
}

function fallbackTeam(team, error) {
  return {
    team_id: team.id,
    team_name: team.name,
    members: team.members,
    position: clean(error?.message, 220) || "该小组调用失败。",
    internal_tension: team.tensionHint,
    recommendation: "输出格式异常，需人工查看。",
    risk: "JSON 解析失败或模型调用失败。",
    challenge_to_other_team: "请人工检查该组输出。",
  };
}

function summarizeAgents(topic, outputs) {
  return [
    `议题：${topic}`,
    ...outputs.map((item) => `${item.name}：${item.recommendation}`),
  ].join("\n").slice(0, 2200);
}

function summarizeTeams(topic, outputs) {
  return [
    `议题：${topic}`,
    ...outputs.map((item) => `${item.team_name}：${item.position} 建议：${item.recommendation}`),
  ].join("\n").slice(0, 2200);
}

function clean(value, maxLength) {
  return String(value || "").trim().replace(/\s+/g, " ").slice(0, maxLength);
}
