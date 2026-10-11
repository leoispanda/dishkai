const APP_VERSION = "DishKAI v0.2.44-private-beta";
const VISIT_COUNT_KEY = "dishkai-local-visit-count";
const USAGE_COUNT_KEY = "dishkai-local-usage-count";
const LEGAL_ACCEPTED_KEY = "dishkai-legal-disclaimer-accepted-v1";
const MENU_IMAGE_MAX_EDGE = 1800;
const MENU_IMAGE_JPEG_QUALITY = 0.82;
const MENU_IMAGE_MAX_BYTES = 8 * 1024 * 1024;
const MENU_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
const MENU_REQUEST_TIMEOUT_MS = 125_000;
const PDC_HISTORY_RETENTION_MS = 7 * 24 * 60 * 60 * 1000;
const HOME_TITLE = "DishKAI | Know the dish before you order";
const TRANSPARENCY_PATH = "/ai-transparency";

const translations = {
  en: {
    sessionChecking: "Checking your private session…",
    sessionUnavailable: "The session could not be checked. Check your connection and try again.",
    sessionRetry: "Check session again",
    logoutFailed: "Sign-out was not completed. Check your connection and try again.",
    sessionExpired: "Please sign in again to continue.",
    uploadProcessingNotice: "Menu text and photos may be sent to Google Gemini, with OpenAI as a backup; text may also use Cloudflare Workers AI. Avoid personal information.",
    dataNoticeLink: "AI and data details",
    contributeUnknownDishes: "Optional: share unknown dish-name suggestions to improve DishKAI (kept for up to 90 days). No photo or full menu is saved for this contribution.",
    compositionEstimateNote: "Estimated composition. Actual ingredients and proportions vary by restaurant.",
    allergensNotConfirmed: "Not confirmed; ask the restaurant.",
    menuReadBy: "Menu read by {provider}. Dish details use the sources labelled below.",
    localMenuReading: "local parsing",
    otherAiReading: "AI",
    aiDataTitle: "Your menu and data",
    aiDataProcessing: "Processing: submitting a menu sends the text or photo to DishKAI on Cloudflare. Configured services may process it using Google Gemini, OpenAI as a backup, or Cloudflare Workers AI for text. A backup may receive the same input after an error.",
    aiDataRetention: "Storage: this menu-processing code does not save uploaded photos or full menus. AI providers and hosting services may process or retain data under their account settings and terms; DishKAI does not promise that they retain nothing or never use data for training.",
    aiDataContribution: "Optional contributions: the unchecked box shares only unknown dish-name suggestions and limited language/source metadata for knowledge-base improvement, retained for up to 90 days. Analysis works without this option. Do not include personal information in dish names.",
    aiDataLegacy: "Previously collected unknown-dish records need a separate operator review and deletion or retention decision; this update does not claim they have already been cleared.",
    aiDataLocal: "This browser stores your language, safety acknowledgment, and local usage counts. Private login uses a session cookie. Private PDC history and settings expire after 7 days of inactivity; expired records are removed when private tools next open. Use Clear local PDC history or clear site data to remove them sooner.",
    aiDataPdc: "Private PDC sends your topic, context, and follow-up input to Cloudflare Workers AI. Its personas are simulated AI roles, not real professionals; it provides reflection rather than professional advice.",
    aiDataRights: "For an incorrect result, privacy question, or access/deletion request, contact hello@dishkai.com. You may also contact your competent data-protection authority. The safety acknowledgment is not consent to optional contributions.",
    aiDataTermsTitle: "Provider data terms",
    pdcDisclosure: "These are simulated AI roles, not real advisers. Topics, context, and follow-ups are sent to Cloudflare Workers AI. History and settings are saved in this browser, expire after 7 days of inactivity, and are cleared when you next open private tools. Avoid personal or sensitive information.",
    pdcAiRole: "AI role response",
    pdcAiTeam: "AI team response",
    localFallbackLabel: "Local fallback — AI response unavailable",
    sourceNotRecorded: "Source not recorded",
    pdcHistoryExpired: "Local PDC history has expired. Start a new discussion.",
    ruleBasedSummaryLabel: "Rule-based summary",
    legalGateTitle: "DishKAI",
    legalGateSubtitle: "A quick menu guide. Confirm the basics, then scan.",
    legalLanguageLabel: "Language",
    heroTitle: "Know the dish before you order.",
    heroSubtitle: "Paste text or upload a photo. Get a clear dish list in seconds.",
    privateAccessEyebrow: "Private experiment", privateAccessTitle: "Your AI application workspace.", unauthorizedNotice: "Menu analysis and PDC require a private session.", privateAccessLabel: "Private access code", privateAccessPlaceholder: "Enter private access code", unlockPrivate: "Unlock private tools", privateUnlocked: "Private session verified.", privateLocked: "Sign in to continue.", privateDenied: "Your private session has expired. Please sign in again.", clearRecentScans: "Clear local PDC history", clearScansDone: "Local PDC history and settings cleared.", privateLogout: "Sign out",
    textMode: "Text", imageMode: "Photo", menuTextLabel: "Menu text", menuTextPlaceholder: "Boeuf Bourguignon\nCoq au Vin\nRatatouille", menuImageLabel: "Menu photo", imageHelper: "Photo scan may fall back to text.", uploadWarning: "Avoid faces, payment details, addresses, and private information.",
    outputLanguage: "Language", generate: "Analyze menu", loading: "Analyzing menu...", compressionStatus: "Compressed {from} to {to}. Analyzing menu...", noItems: "No menu items were found. Please paste clearer menu text.", imageUnavailable: "Image analysis is not available yet. Please paste menu text instead.",
    imageRequired: "Choose a menu photo before analyzing.",
    imageTooLarge: "This photo is still larger than 8 MB after compression. Choose a smaller photo or crop the menu.",
    imageUnsupported: "Please use a JPEG, PNG, or WebP photo. If a GIF or HEIC photo is rejected, convert it to JPEG first.",
    imageNoItems: "No dishes could be read from this photo. Try a clearer photo, crop to one menu section, or paste menu text.",
    menuNetworkError: "The connection was interrupted. Check your internet connection and try again.",
    menuTimeout: "Menu analysis took too long. Try a smaller menu section or paste menu text.",
    menuServerResponse: "The server returned an unexpected response. Please try again shortly.",
    aiRateLimited: "Menu recognition is busy. Please wait a moment before trying again.",
    aiQuotaExceeded: "Menu recognition is unavailable because the AI service quota has been reached. Please try again later.",
    aiAuthError: "Menu recognition is unavailable because the AI service connection needs attention. Please try again later.",
    aiModelUnavailable: "The menu recognition model is unavailable. Please try again later.",
    aiInvalidRequest: "The AI service could not process this menu. Try a smaller photo or paste menu text.",
    aiServiceUnavailable: "The AI service is temporarily unavailable. Please try again shortly.",
    aiOutputTruncated: "This menu was too long to read in one scan. Crop to one section or paste a shorter menu.",
    aiInvalidResponse: "The AI service returned an incomplete result. Please try again or paste menu text.",
    aiResponseRefused: "The AI service could not read this menu. Try another menu photo or paste menu text.",
    menuListEyebrow: "Menu list", menuListTitle: "Detected dishes", emptyCard: "Select a dish.",
    footerText: "Know the dish with AI before you order.",
    footerAbout: "DishKAI helps people quickly understand menu names, dish context, and ordering risks before choosing what to eat.",
    footerAiDisclosure: "AI menu reading and illustrative images · Check dishes and allergens with the restaurant",
    footerAiTransparency: "AI Transparency",
    footerContact: "Contact",
    footerDisclaimerLabel: "View disclaimer",
    footerVisitTotalLabel: "Total views",
    footerUsageTotalLabel: "Uses",
    legalEyebrow: "Important disclaimer",
    legalTitle: "Use as a menu guide only.",
    legalPrivate: "DishKAI is a private AI application experiment for menu understanding. It is not a professional, medical, nutritional, allergy, legal, or restaurant advisory service.",
    legalAccuracy: "Dish names, ingredients, allergens, dietary flags, translations, images, AI estimates, and ordering advice may be incomplete, outdated, mistranslated, or wrong.",
    legalAllergy: "Do not rely on DishKAI for allergies, pregnancy, medical conditions, religious restrictions, food safety, alcohol, raw food, or other high-risk decisions. Ask the restaurant directly.",
    legalPrivacy: "Upload only the menu. Do not include faces, payment details, addresses, phone numbers, private conversations, or other personal or sensitive information. See the data notice for AI processing and optional contributions.",
    legalResponsibility: "You choose what to upload and order. These limitations do not exclude rights or responsibilities that applicable law does not allow us to exclude.",
    legalAccept: "I understand the menu-reference and safety limits. This does not consent to optional data contributions.",
    legalRequired: "Please acknowledge the menu-reference and safety limits before using DishKAI.",
    enterApp: "Enter",
    visitCountLabel: "Local visits",
    matched: "matched", universal: "universal", unmatched: "Not in starter database yet", aiEstimated: "AI estimate", tapForDetails: "Tap for details", tapForUniversal: "Universal ordering guide", tapForEstimate: "Tap for note", aiGenerated: "AI-generated estimate. Not yet verified in DishKAI database.", universalGuidance: "Universal guidance, not a verified fixed dish.", aiImageLabel: "AI-generated visual reference. Actual dish may vary by restaurant.", aiInteractionLabel: "AI-assisted menu analysis", aiInteractionDisclosure: "AI helps read this menu and may misread dishes. Check the original menu and confirm ingredients and allergens with the restaurant.", safetyNote: "Ingredients and allergens are not confirmed by the restaurant. Ask staff about actual ingredients, substitutions, and cross-contact.", potentialAllergens: "Potential allergens & watch-outs", aiGeneratedLabel: "AI-generated", aiAssistedLabel: "AI-assisted", preparedContentLabel: "DishKAI knowledge base", localRuleBasedLabel: "Rule-based guidance", aiGeneratedImageLabel: "AI-generated image", aiTransparencyBack: "Back to DishKAI", aiTransparencyEyebrow: "AI Transparency", aiTransparencyTitle: "AI Transparency", aiTransparencySubtitle: "How AI is used across DishKAI.", aiTransparencyIntro: "DishKAI uses AI to read menu photos, extract and normalise dish names, and help match them to a stored knowledge base. Optional AI estimates may describe dishes that are not in the database.", aiTransparencyContentMix: "Menu reading and dish knowledge are separate. Stored knowledge may include AI-assisted drafting and project checks; it is general dish information, not confirmation of a restaurant's recipe. Live AI estimates are temporary and unverified.", aiTransparencyLimitations: "AI can misread a menu, translate incorrectly, match the wrong dish, or miss ingredients and allergens. Composition percentages are estimates; recipes and cross-contact risks vary by restaurant.", aiTransparencyPurpose: "DishKAI helps you understand unfamiliar menu names before ordering. It does not provide recipes or certify whether food is safe for you.", aiTransparencyCheckIntro: "Before ordering, confirm with the restaurant:", aiCheckIngredients: "actual ingredients", aiCheckAllergens: "allergens and cross-contact", aiCheckDietary: "dietary and religious restrictions", aiCheckSubstitutions: "substitutions and restaurant variations", aiCheckSafety: "raw ingredients, alcohol, and any food-safety concerns", aiTransparencyIndependent: "DishKAI is a personally operated private menu-understanding experiment for exploring AI application development. Questions or feedback: hello@dishkai.com.", aiTransparencyBoundary: "DishKAI is not a medical, nutritional, allergy, or professional food-safety advisory service. Familiarity or ordering tags do not mean allergy-safe.", aiTransparencyLabelsIntro: "Labels distinguish how a menu was read, where dish knowledge comes from, and whether an image was generated. A database match is not a guarantee of the restaurant's ingredients.", aiTransparencyLabelsTitle: "Transparency labels", aiLabelGenerated: "AI-generated", aiLabelGeneratedDescription: "A live AI estimate or an image generated by AI. Live dish estimates are unverified; generated images are illustrations rather than restaurant photographs.", aiLabelAssisted: "AI-assisted", aiLabelAssistedDescription: "AI helped read, extract, translate, or organise the menu. The dish description may separately come from stored knowledge.", aiLabelPrepared: "DishKAI knowledge base", aiLabelPreparedDescription: "General dish information stored in advance. It is not live AI output or restaurant confirmation; it may have involved AI-assisted drafting and project checks.", aiLabelLocal: "Rule-based guidance", aiLabelLocalDescription: "A result assembled from stored data or deterministic rules. In PDC, a rule-based summary combines participant outputs without another model call.", original: "Original", familiar: "Familiar", verdict: "Order verdict", description: "What it is", preparation: "How it is usually prepared", composition: "Estimated composition", taste: "Basic taste", flavor: "Distinctive flavor", texture: "Texture", watchOut: "Watch out", variations: "Common variations", disclaimer: "Visual note", summary: "items", unknownNote: "This dish is not in the starter database yet."
  },
  zh: {
    sessionChecking: "正在确认私人会话…",
    sessionUnavailable: "暂时无法确认会话，请检查网络后重试。",
    sessionRetry: "重新确认会话",
    logoutFailed: "退出登录未完成，请检查网络后重试。",
    sessionExpired: "请重新登录后继续。",
    uploadProcessingNotice: "菜单文字和照片可能发送至 Google Gemini，OpenAI 用作备用；文字还可能使用 Cloudflare Workers AI。请避免个人信息。",
    dataNoticeLink: "AI 与数据处理说明",
    contributeUnknownDishes: "可选：分享未收录菜名建议，帮助完善 DishKAI（最多保留 90 天）。此贡献不会保存照片或完整菜单。",
    compositionEstimateNote: "成分比例仅为估算，实际配料与比例因餐厅而异。",
    allergensNotConfirmed: "尚未确认，请询问餐厅。",
    menuReadBy: "菜单识别：{provider}。菜品详情的来源见下方标签。",
    localMenuReading: "本地解析",
    otherAiReading: "AI",
    aiDataTitle: "你的菜单与数据",
    aiDataProcessing: "处理方式：提交菜单会把文字或照片发送到 Cloudflare 上的 DishKAI。按配置可能由 Google Gemini 处理、OpenAI 备用处理，或由 Cloudflare Workers AI 处理文字。出错后备用服务可能接收相同输入。",
    aiDataRetention: "存储方式：当前菜单处理代码不保存上传照片或完整菜单。AI 及托管服务可能依据账户设置与服务条款处理或保留数据；DishKAI 不承诺它们完全不留存或绝不用于训练。",
    aiDataContribution: "可选贡献：默认不勾选，仅分享未收录菜名建议及少量语言、来源信息，用于完善知识库，最多保留 90 天。不勾选也能正常分析。请勿在菜名中包含个人信息。",
    aiDataLegacy: "以前收集的未收录菜名记录，需要运营者单独审核并决定删除或保留；本次更新不代表旧记录已清理。",
    aiDataLocal: "浏览器会保存语言、安全限制确认与本机使用次数。私有登录使用会话 Cookie。私有 PDC 记录与设置在 7 天无保存活动后过期，下次打开私有工具时清除过期数据。可使用“清除本机 PDC 记录”或清除站点数据提前删除。",
    aiDataPdc: "私有 PDC 会将议题、背景和后续补充发送至 Cloudflare Workers AI。角色由 AI 模拟，不是真实专业人士，只提供思考参考。",
    aiDataRights: "如需纠正结果、咨询隐私或申请访问、删除数据，请联系 hello@dishkai.com。你也可以联系有管辖权的数据保护机构。安全限制确认不等于同意可选数据贡献。",
    aiDataTermsTitle: "服务商数据条款",
    pdcDisclosure: "这些是模拟 AI 角色，不是真实顾问。议题、背景和后续补充会发送至 Cloudflare Workers AI。记录与设置保存在此浏览器，7 天无保存活动后过期，下次打开私有工具时清除。请勿输入个人或敏感信息。",
    pdcAiRole: "AI 角色回应",
    pdcAiTeam: "AI 小组回应",
    localFallbackLabel: "本地占位 · AI 回应不可用",
    sourceNotRecorded: "来源未记录",
    pdcHistoryExpired: "本机 PDC 记录已过期，请重新开始讨论。",
    ruleBasedSummaryLabel: "规则摘要",
    legalGateTitle: "DishKAI",
    legalGateSubtitle: "快速菜单参考。确认基本限制后即可开始。",
    legalLanguageLabel: "语言",
    heroTitle: "点餐前，先看懂这道菜。",
    heroSubtitle: "粘贴文字或上传照片，几秒生成清晰菜品列表。",
    privateAccessEyebrow: "私人实验", privateAccessTitle: "你的 AI 应用实验空间。", unauthorizedNotice: "菜单分析和 PDC 都需要私人会话。", privateAccessLabel: "私有访问码", privateAccessPlaceholder: "输入私有访问码", unlockPrivate: "解锁私有工具", privateUnlocked: "私人会话已确认。", privateLocked: "请登录后继续。", privateDenied: "私人会话已过期，请重新登录。", clearRecentScans: "清除本机 PDC 记录", clearScansDone: "已清除本机 PDC 记录和设置。", privateLogout: "退出登录",
    textMode: "文字", imageMode: "照片", menuTextLabel: "菜单文字", menuTextPlaceholder: "Boeuf Bourguignon\nCoq au Vin\nRatatouille", menuImageLabel: "菜单照片", imageHelper: "照片识别不可用时会建议粘贴文字。", uploadWarning: "请避免上传人脸、支付信息、地址和隐私内容。",
    outputLanguage: "语言", generate: "分析菜单", loading: "正在分析菜单...", compressionStatus: "已将图片从 {from} 压缩到 {to}，正在分析菜单...", noItems: "没有找到菜单项。请粘贴更清晰的菜单文字。", imageUnavailable: "图片分析暂不可用。请粘贴菜单文字。",
    imageRequired: "请先选择一张菜单照片。",
    imageTooLarge: "图片压缩后仍超过 8 MB。请选择较小的照片，或裁剪菜单区域。",
    imageUnsupported: "请使用 JPEG、PNG 或 WebP 图片。若 GIF 或 HEIC 照片不受支持，请先转为 JPEG。",
    imageNoItems: "没有读出照片中的菜品。请换清晰照片、裁剪一个菜单区域，或粘贴菜单文字。",
    menuNetworkError: "连接中断了。请检查网络后重试。",
    menuTimeout: "菜单识别耗时过长。请缩小菜单区域，或粘贴菜单文字。",
    menuServerResponse: "服务器返回了异常响应，请稍后重试。",
    aiRateLimited: "菜单识别服务繁忙，请稍等片刻再试。",
    aiQuotaExceeded: "AI 服务额度已用完，菜单识别暂不可用，请稍后再试。",
    aiAuthError: "AI 服务连接配置需要处理，菜单识别暂不可用，请稍后再试。",
    aiModelUnavailable: "菜单识别模型暂不可用，请稍后再试。",
    aiInvalidRequest: "AI 服务未能处理这份菜单。请缩小照片，或粘贴菜单文字。",
    aiServiceUnavailable: "AI 服务暂时不可用，请稍后重试。",
    aiOutputTruncated: "菜单太长，一次没有读完。请裁剪一个区域，或粘贴较短的菜单文字。",
    aiInvalidResponse: "AI 服务返回的结果不完整。请重试，或粘贴菜单文字。",
    aiResponseRefused: "AI 服务未能读取这份菜单。请换一张菜单照片，或粘贴菜单文字。",
    menuListEyebrow: "菜单列表", menuListTitle: "识别到的菜", emptyCard: "选择一道菜。",
    footerText: "用 AI 在点餐前看懂这道菜。",
    footerAbout: "DishKAI 帮助你在点餐前快速理解菜名、菜品背景和需要注意的风险。",
    footerAiDisclosure: "AI 菜单识别与示意图片 · 请向餐厅确认菜品和过敏原",
    footerAiTransparency: "AI 透明度",
    footerContact: "联系",
    footerDisclaimerLabel: "查看免责声明",
    footerVisitTotalLabel: "总浏览次数",
    footerUsageTotalLabel: "使用次数",
    legalEyebrow: "重要免责声明",
    legalTitle: "仅作为菜单参考工具使用。",
    legalPrivate: "DishKAI 是私人 AI 应用实验工具，用于理解菜单，不是专业、医疗、营养、过敏、法律或餐厅顾问服务。",
    legalAccuracy: "菜名、成分、过敏原、饮食标签、翻译、图片、AI 估算和点餐建议都可能不完整、过时、误译或错误。",
    legalAllergy: "不要把 DishKAI 用于过敏、怀孕、疾病、宗教饮食限制、食品安全、酒精、生食或其他高风险决策。请直接向餐厅确认。",
    legalPrivacy: "只上传菜单，请勿包含人脸、支付信息、地址、电话号码、私人对话或其他个人、敏感信息。AI 处理与可选贡献见数据说明。",
    legalResponsibility: "请自行选择上传内容和所点菜品。以上限制不排除适用法律规定不能排除的权利或责任。",
    legalAccept: "我已了解菜单参考与安全限制。此确认不代表同意可选数据贡献。",
    legalRequired: "使用 DishKAI 前请先确认已了解菜单参考与安全限制。",
    enterApp: "进入",
    visitCountLabel: "本机访问次数",
    matched: "已匹配", universal: "通用项", unmatched: "暂未收录", aiEstimated: "AI 估算", tapForDetails: "点击查看详情", tapForUniversal: "通用点餐参考", tapForEstimate: "点击查看未收录提示", aiGenerated: "AI 估算结果，尚未进入 DishKAI 已验证数据库。", universalGuidance: "通用参考，不是已验证固定菜。", aiImageLabel: "AI 生成的视觉参考。实际菜品可能因餐厅而异。", aiInteractionLabel: "AI 辅助菜单分析", aiInteractionDisclosure: "AI 协助识别菜单，可能读错菜名。请对照原菜单，并向餐厅确认成分和过敏原。", safetyNote: "成分和过敏原未经餐厅确认。请向店员询问实际配料、替代食材及交叉接触风险。", potentialAllergens: "可能过敏原和注意事项", aiGeneratedLabel: "AI 生成", aiAssistedLabel: "AI 辅助", preparedContentLabel: "DishKAI 知识库", localRuleBasedLabel: "规则参考", aiGeneratedImageLabel: "AI 生成图片", aiTransparencyBack: "返回 DishKAI", aiTransparencyEyebrow: "AI 透明度", aiTransparencyTitle: "AI 透明度", aiTransparencySubtitle: "AI 如何参与 DishKAI。", aiTransparencyIntro: "DishKAI 使用 AI 读取菜单照片、提取并规范菜名，协助匹配预存知识库。对于未收录菜品，可选 AI 估算会提供临时说明。", aiTransparencyContentMix: "菜单识别与菜品知识是不同环节。预存知识可能经过 AI 辅助起草和项目检查，属于通用菜品信息，不代表餐厅配方确认。实时 AI 估算是临时、未验证的内容。", aiTransparencyLimitations: "AI 可能读错菜单、误译、匹配错菜品或漏掉成分和过敏原。成分比例只是估算，实际配方和交叉接触风险因餐厅而异。", aiTransparencyPurpose: "DishKAI 帮助你在点餐前理解陌生菜名，不提供菜谱，也不认证食物对你是否安全。", aiTransparencyCheckIntro: "点餐前，请向餐厅确认：", aiCheckIngredients: "实际配料", aiCheckAllergens: "过敏原与交叉接触风险", aiCheckDietary: "饮食与宗教限制", aiCheckSubstitutions: "替代食材与餐厅做法变化", aiCheckSafety: "生食、酒精及其他食品安全疑问", aiTransparencyIndependent: "DishKAI 是个人运营的私人菜单理解实验工具，用于探索 AI 应用开发。如有问题或反馈，请联系 hello@dishkai.com。", aiTransparencyBoundary: "DishKAI 不是医疗、营养、过敏或专业食品安全咨询服务。熟悉程度和点餐标签不代表过敏安全。", aiTransparencyLabelsIntro: "标签区分菜单识别方式、菜品知识来源和图片是否由 AI 生成。匹配到数据库不保证餐厅的实际配料。", aiTransparencyLabelsTitle: "透明度标签", aiLabelGenerated: "AI 生成", aiLabelGeneratedDescription: "实时 AI 估算或 AI 生成图片。实时菜品估算未经验证；生成图片属于示意图，不是餐厅实拍。", aiLabelAssisted: "AI 辅助", aiLabelAssistedDescription: "AI 协助读取、提取、翻译或整理菜单，菜品说明则可能来自独立的预存知识。", aiLabelPrepared: "DishKAI 知识库", aiLabelPreparedDescription: "提前存储的通用菜品信息，不是实时 AI 输出或餐厅确认，可能经过 AI 辅助起草与项目检查。", aiLabelLocal: "规则参考", aiLabelLocalDescription: "依据存储数据或确定性规则整理的结果。PDC 的规则摘要组合角色输出，不再调用模型。", original: "原始菜名", familiar: "熟悉名称", verdict: "点餐建议", description: "这是什么", preparation: "常见做法风格", composition: "估算成分", taste: "基础味道", flavor: "特色风味", texture: "口感", watchOut: "注意事项", variations: "常见变体", disclaimer: "图片说明", summary: "项", unknownNote: "这道菜暂时还不在 DishKAI 初始数据库中。"
  },
  nl: {
    sessionChecking: "Je privésessie wordt gecontroleerd…",
    sessionUnavailable: "De sessie kon niet worden gecontroleerd. Controleer je verbinding en probeer opnieuw.",
    sessionRetry: "Controleer sessie opnieuw",
    logoutFailed: "Uitloggen is niet voltooid. Controleer je verbinding en probeer opnieuw.",
    sessionExpired: "Log opnieuw in om verder te gaan.",
    uploadProcessingNotice: "Menutekst en foto's kunnen naar Google Gemini worden gestuurd, met OpenAI als reserve; tekst kan ook Cloudflare Workers AI gebruiken. Vermijd persoonlijke informatie.",
    dataNoticeLink: "AI en gegevensverwerking",
    contributeUnknownDishes: "Optioneel: deel suggesties voor onbekende gerechtnamen om DishKAI te verbeteren (maximaal 90 dagen bewaard). Hiervoor wordt geen foto of volledig menu opgeslagen.",
    compositionEstimateNote: "Geschatte samenstelling. Werkelijke ingrediënten en verhoudingen verschillen per restaurant.",
    allergensNotConfirmed: "Niet bevestigd; vraag het restaurant.",
    menuReadBy: "Menu gelezen door {provider}. De bronnen van gerechtinformatie staan hieronder.",
    localMenuReading: "lokale herkenning",
    otherAiReading: "AI",
    aiDataTitle: "Je menu en gegevens",
    aiDataProcessing: "Verwerking: een ingediend menu wordt als tekst of foto naar DishKAI op Cloudflare gestuurd. Afhankelijk van de configuratie kan Google Gemini, OpenAI als reserve of Cloudflare Workers AI voor tekst het verwerken. Een reserveservice kan na een fout dezelfde invoer ontvangen.",
    aiDataRetention: "Opslag: deze menuverwerkingscode bewaart geen geüploade foto's of volledige menu's. AI- en hostingdiensten kunnen gegevens volgens hun accountinstellingen en voorwaarden verwerken of bewaren; DishKAI belooft niet dat zij niets bewaren of gegevens nooit voor training gebruiken.",
    aiDataContribution: "Optionele bijdragen: het standaard uitgevinkte vakje deelt alleen suggesties voor onbekende gerechtnamen en beperkte taal- en brongegevens om de kennisbank te verbeteren, maximaal 90 dagen bewaard. Analyse werkt ook zonder deze optie. Neem geen persoonsgegevens op in gerechtnamen.",
    aiDataLegacy: "Eerder verzamelde onbekende-gerechtgegevens vereisen een aparte beoordeling en beslissing over verwijdering of bewaring door de beheerder. Deze update betekent niet dat ze al zijn verwijderd.",
    aiDataLocal: "Deze browser bewaart je taal, veiligheidsbevestiging en lokale gebruikstellers. Privélogin gebruikt een sessiecookie. Privé-PDC-geschiedenis en instellingen verlopen na 7 dagen zonder opslagactiviteit; verlopen gegevens worden gewist wanneer je de privétools weer opent. Wis lokale PDC-geschiedenis of sitegegevens om eerder te verwijderen.",
    aiDataPdc: "Privé-PDC stuurt je onderwerp, context en vervolginvoer naar Cloudflare Workers AI. De persona's zijn gesimuleerde AI-rollen, geen echte professionals; zij bieden reflectie en geen professioneel advies.",
    aiDataRights: "Neem voor een onjuist resultaat, privacyvraag of verzoek om inzage of verwijdering contact op via hello@dishkai.com. Je kunt ook je bevoegde gegevensbeschermingsautoriteit benaderen. De veiligheidsbevestiging is geen toestemming voor optionele bijdragen.",
    aiDataTermsTitle: "Gegevensvoorwaarden van aanbieders",
    pdcDisclosure: "Dit zijn gesimuleerde AI-rollen, geen echte adviseurs. Onderwerpen, context en vervolginvoer gaan naar Cloudflare Workers AI. Geschiedenis en instellingen worden in deze browser opgeslagen, verlopen na 7 dagen zonder opslagactiviteit en worden gewist wanneer je de privétools weer opent. Vermijd persoonlijke of gevoelige informatie.",
    pdcAiRole: "Antwoord van AI-rol",
    pdcAiTeam: "Antwoord van AI-groep",
    localFallbackLabel: "Lokale melding — AI-antwoord niet beschikbaar",
    sourceNotRecorded: "Bron niet geregistreerd",
    pdcHistoryExpired: "De lokale PDC-geschiedenis is verlopen. Begin een nieuwe discussie.",
    ruleBasedSummaryLabel: "Regelgebaseerde samenvatting",
    legalGateTitle: "DishKAI",
    legalGateSubtitle: "Een snelle menugids. Bevestig de basis en scan.",
    legalLanguageLabel: "Taal",
    heroTitle: "Ken het gerecht voordat je bestelt.",
    heroSubtitle: "Plak tekst of upload een foto. Krijg binnen seconden een heldere gerechtenlijst.",
    privateAccessEyebrow: "Privé-experiment", privateAccessTitle: "Je werkruimte voor AI-toepassingen.", unauthorizedNotice: "Menuanalyse en PDC vereisen een privésessie.", privateAccessLabel: "Private toegangscode", privateAccessPlaceholder: "Voer private toegangscode in", unlockPrivate: "Ontgrendel private tools", privateUnlocked: "Privésessie bevestigd.", privateLocked: "Log in om verder te gaan.", privateDenied: "Je privésessie is verlopen. Log opnieuw in.", clearRecentScans: "Wis lokale PDC-geschiedenis", clearScansDone: "Lokale PDC-geschiedenis en instellingen gewist.", privateLogout: "Uitloggen",
    textMode: "Tekst", imageMode: "Foto", menuTextLabel: "Menutekst", menuTextPlaceholder: "Boeuf Bourguignon\nCoq au Vin\nRatatouille", menuImageLabel: "Menufoto", imageHelper: "Fotoscan kan terugvallen op tekst.", uploadWarning: "Vermijd gezichten, betaalgegevens, adressen en privegegevens.",
    outputLanguage: "Taal", generate: "Analyseer menu", loading: "Menu analyseren...", compressionStatus: "Afbeelding verkleind van {from} naar {to}. Menu analyseren...", noItems: "Geen menu-items gevonden. Plak duidelijkere menutekst.", imageUnavailable: "Beeldanalyse is nog niet beschikbaar. Plak menutekst.",
    imageRequired: "Kies eerst een menufoto.",
    imageTooLarge: "De foto is na verkleinen nog groter dan 8 MB. Kies een kleinere foto of snijd het menu bij.",
    imageUnsupported: "Gebruik een JPEG-, PNG- of WebP-foto. Zet een afgewezen GIF- of HEIC-foto eerst om naar JPEG.",
    imageNoItems: "Er zijn geen gerechten uit deze foto gelezen. Probeer een scherpere foto, snijd één menugedeelte uit of plak menutekst.",
    menuNetworkError: "De verbinding werd onderbroken. Controleer je internetverbinding en probeer opnieuw.",
    menuTimeout: "De menuanalyse duurde te lang. Probeer een kleiner menugedeelte of plak menutekst.",
    menuServerResponse: "De server gaf een onverwacht antwoord. Probeer het zo nog eens.",
    aiRateLimited: "De menuherkenning is druk. Wacht even voordat je het opnieuw probeert.",
    aiQuotaExceeded: "Menuherkenning is niet beschikbaar omdat het quotum van de AI-dienst is bereikt. Probeer het later opnieuw.",
    aiAuthError: "De verbinding met de AI-dienst heeft aandacht nodig. Menuherkenning is tijdelijk niet beschikbaar.",
    aiModelUnavailable: "Het model voor menuherkenning is niet beschikbaar. Probeer het later opnieuw.",
    aiInvalidRequest: "De AI-dienst kon dit menu niet verwerken. Probeer een kleinere foto of plak menutekst.",
    aiServiceUnavailable: "De AI-dienst is tijdelijk niet beschikbaar. Probeer het zo nog eens.",
    aiOutputTruncated: "Dit menu was te lang voor één scan. Snijd één gedeelte uit of plak een korter menu.",
    aiInvalidResponse: "De AI-dienst gaf een onvolledig resultaat. Probeer opnieuw of plak menutekst.",
    aiResponseRefused: "De AI-dienst kon dit menu niet lezen. Probeer een andere menufoto of plak menutekst.",
    menuListEyebrow: "Menulijst", menuListTitle: "Gevonden gerechten", emptyCard: "Kies een gerecht.",
    footerText: "Ken het gerecht met AI voordat je bestelt.",
    footerAbout: "DishKAI helpt je snel menunamen, gerechtcontext en bestelrisico's te begrijpen voordat je kiest wat je eet.",
    footerAiDisclosure: "AI-menuherkenning en illustratieve afbeeldingen · Bevestig gerechten en allergenen bij het restaurant",
    footerAiTransparency: "AI-transparantie",
    footerContact: "Contact",
    footerDisclaimerLabel: "Bekijk disclaimer",
    footerVisitTotalLabel: "Totaal bezoeken",
    footerUsageTotalLabel: "Gebruik",
    legalEyebrow: "Belangrijke disclaimer",
    legalTitle: "Gebruik dit alleen als menugids.",
    legalPrivate: "DishKAI is een privé-experiment met AI-toepassingen voor menu-inzicht. Het is geen professionele, medische, voedingskundige, allergie-, juridische of restaurantadviesdienst.",
    legalAccuracy: "Gerechtnamen, ingredienten, allergenen, dieetlabels, vertalingen, afbeeldingen, AI-schattingen en besteladvies kunnen onvolledig, verouderd, verkeerd vertaald of onjuist zijn.",
    legalAllergy: "Vertrouw niet op DishKAI voor allergieen, zwangerschap, medische aandoeningen, religieuze dieetregels, voedselveiligheid, alcohol, rauw eten of andere risicovolle beslissingen. Vraag het restaurant rechtstreeks.",
    legalPrivacy: "Upload alleen het menu. Vermijd gezichten, betaalgegevens, adressen, telefoonnummers, privégesprekken en andere persoonlijke of gevoelige informatie. Zie de gegevensinformatie voor AI-verwerking en optionele bijdragen.",
    legalResponsibility: "Je kiest zelf wat je uploadt en bestelt. Deze beperkingen sluiten geen rechten of verantwoordelijkheden uit die volgens toepasselijk recht niet mogen worden uitgesloten.",
    legalAccept: "Ik begrijp de beperkingen van de menureferentie en veiligheid. Dit is geen toestemming voor optionele gegevensbijdragen.",
    legalRequired: "Bevestig eerst dat je de beperkingen van de menureferentie en veiligheid begrijpt.",
    enterApp: "Open",
    visitCountLabel: "Lokale bezoeken",
    matched: "gekoppeld", universal: "algemeen", unmatched: "nog niet in database", aiEstimated: "AI-schatting", tapForDetails: "Tik voor details", tapForUniversal: "Algemene bestelrichtlijn", tapForEstimate: "Tik voor notitie", aiGenerated: "AI-schatting. Nog niet geverifieerd in de DishKAI-database.", universalGuidance: "Algemene richtlijn, geen geverifieerd vast gerecht.", aiImageLabel: "AI-gegenereerde visuele referentie. Het echte gerecht kan per restaurant verschillen.", aiInteractionLabel: "AI-ondersteunde menuanalyse", aiInteractionDisclosure: "AI helpt dit menu lezen en kan gerechten verkeerd herkennen. Controleer het oorspronkelijke menu en bevestig ingrediënten en allergenen bij het restaurant.", safetyNote: "Ingrediënten en allergenen zijn niet door het restaurant bevestigd. Vraag het personeel naar de werkelijke ingrediënten, vervangingen en kruiscontact.", potentialAllergens: "Mogelijke allergenen en aandachtspunten", aiGeneratedLabel: "AI-gegenereerd", aiAssistedLabel: "AI-ondersteund", preparedContentLabel: "DishKAI-kennisbank", localRuleBasedLabel: "Regelgebaseerde richtlijn", aiGeneratedImageLabel: "AI-gegenereerde afbeelding", aiTransparencyBack: "Terug naar DishKAI", aiTransparencyEyebrow: "AI-transparantie", aiTransparencyTitle: "AI-transparantie", aiTransparencySubtitle: "Hoe AI wordt gebruikt binnen DishKAI.", aiTransparencyIntro: "DishKAI gebruikt AI om menufoto's te lezen, gerechtnamen te herkennen en te normaliseren en ze aan een opgeslagen kennisbank te koppelen. Optionele AI-schattingen kunnen niet-opgenomen gerechten beschrijven.", aiTransparencyContentMix: "Menuherkenning en gerechtkennis zijn aparte stappen. Opgeslagen kennis kan met AI zijn opgesteld en door het project zijn gecontroleerd; het is algemene gerechtinformatie, geen bevestiging van het restaurantrecept. Live AI-schattingen zijn tijdelijk en niet geverifieerd.", aiTransparencyLimitations: "AI kan een menu verkeerd lezen, verkeerd vertalen, een onjuist gerecht koppelen of ingrediënten en allergenen missen. Samenstellingspercentages zijn schattingen; recepten en risico's op kruiscontact verschillen per restaurant.", aiTransparencyPurpose: "DishKAI helpt je onbekende menunamen begrijpen voordat je bestelt. Het geeft geen recepten en certificeert niet of voedsel veilig voor je is.", aiTransparencyCheckIntro: "Bevestig vóór het bestellen bij het restaurant:", aiCheckIngredients: "werkelijke ingrediënten", aiCheckAllergens: "allergenen en kruiscontact", aiCheckDietary: "dieet- en religieuze beperkingen", aiCheckSubstitutions: "vervangingen en restaurantvariaties", aiCheckSafety: "rauwe ingrediënten, alcohol en vragen over voedselveiligheid", aiTransparencyIndependent: "DishKAI is een persoonlijk beheerd privé-experiment voor menu-inzicht en ontwikkeling van AI-toepassingen. Vragen of feedback: hello@dishkai.com.", aiTransparencyBoundary: "DishKAI is geen medische, voedingskundige, allergie- of professionele voedselveiligheidsadviesdienst. Bekendheids- en bestellabels betekenen niet dat een gerecht veilig is bij allergieën.", aiTransparencyLabelsIntro: "Labels onderscheiden hoe het menu is gelezen, waar gerechtkennis vandaan komt en of een afbeelding is gegenereerd. Een databasekoppeling garandeert de restaurantingrediënten niet.", aiTransparencyLabelsTitle: "Transparantielabels", aiLabelGenerated: "AI-gegenereerd", aiLabelGeneratedDescription: "Een live AI-schatting of een door AI gemaakte afbeelding. Live gerechtinschattingen zijn niet geverifieerd; gegenereerde afbeeldingen zijn illustraties, geen restaurantfoto's.", aiLabelAssisted: "AI-ondersteund", aiLabelAssistedDescription: "AI hielp het menu lezen, herkennen, vertalen of ordenen. De gerechtbeschrijving kan afzonderlijk uit opgeslagen kennis komen.", aiLabelPrepared: "DishKAI-kennisbank", aiLabelPreparedDescription: "Algemene gerechtinformatie die vooraf is opgeslagen. Het is geen live AI-output of restaurantbevestiging; AI en projectcontroles kunnen eraan hebben bijgedragen.", aiLabelLocal: "Regelgebaseerde richtlijn", aiLabelLocalDescription: "Een resultaat samengesteld uit opgeslagen gegevens of vaste regels. Een PDC-samenvatting combineert deelnemersoutput zonder een nieuwe modelaanroep.", original: "Origineel", familiar: "Vertrouwd", verdict: "Besteladvies", description: "Wat het is", preparation: "Hoe het meestal wordt bereid", composition: "Geschatte samenstelling", taste: "Basissmaak", flavor: "Kenmerkende smaak", texture: "Textuur", watchOut: "Let op", variations: "Veelvoorkomende variaties", disclaimer: "Visuele noot", summary: "items", unknownNote: "Dit gerecht staat nog niet in de startdatabase."
  }
};

const storedUiLang = localStorage.getItem("dishkai-ui-lang");
let uiLang = ["en", "zh", "nl"].includes(storedUiLang) ? storedUiLang : "zh";
let inputMode = "text";
let latestResult = null;
let expandedOrderIndex = null;
let pdcState = { rounds: [] };
let privateAccessGranted = false;
let privateToolsInitialized = false;
let menuAnalysisPending = false;
let sessionVerified = false;
let sessionCheckPending = false;
let logoutPending = false;
let loginRedirectPending = false;

const $ = (selector) => document.querySelector(selector);

function t(key) {
  return translations[uiLang][key] || translations.en[key] || key;
}

function template(key, values) {
  return Object.entries(values).reduce((text, [name, value]) => text.replaceAll(`{${name}}`, value), t(key));
}

function applyLanguage() {
  document.documentElement.lang = uiLang === "zh" ? "zh-CN" : uiLang;
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll("[data-ui-lang]").forEach((button) => button.classList.toggle("active", button.dataset.uiLang === uiLang));
  if ($("#targetLanguage")) $("#targetLanguage").value = uiLang;
  renderAppMeta();
  if (latestResult) renderAnalysis(latestResult);
  renderPageRoute();
}

function incrementVisitCount() {
  const current = Number(localStorage.getItem(VISIT_COUNT_KEY) || 0);
  const next = Number.isFinite(current) ? current + 1 : 1;
  localStorage.setItem(VISIT_COUNT_KEY, String(next));
  renderAppMeta();
}

function incrementUsageCount() {
  const current = Number(localStorage.getItem(USAGE_COUNT_KEY) || 0);
  const next = Number.isFinite(current) ? current + 1 : 1;
  localStorage.setItem(USAGE_COUNT_KEY, String(next));
  renderAppMeta();
}

function renderAppMeta() {
  const visitCount = Number(localStorage.getItem(VISIT_COUNT_KEY) || 0);
  const usageCount = Number(localStorage.getItem(USAGE_COUNT_KEY) || 0);
  if ($("#appVersion")) $("#appVersion").textContent = APP_VERSION;
  if ($("#footerVersion")) $("#footerVersion").textContent = APP_VERSION.replace(/^DishKAI\s+/, "");
  if ($("#visitCount")) $("#visitCount").textContent = `${t("visitCountLabel")}: ${visitCount}`;
  if ($("#footerVisitTotal")) $("#footerVisitTotal").textContent = String(visitCount);
  if ($("#footerUsageTotal")) $("#footerUsageTotal").textContent = String(usageCount);
}

function setMode(mode) {
  inputMode = mode;
  document.querySelectorAll("[data-mode]").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.classList.toggle("active", active);
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
  });
  document.querySelectorAll("[data-input-panel]").forEach((panel) => {
    const active = panel.dataset.inputPanel === mode;
    panel.classList.toggle("active", active);
    panel.hidden = !active;
  });
}

function setStatus(message, tone = "") {
  const el = $("#statusMessage");
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function focusMenuEntry() {
  $("#menuForm")?.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    const target = inputMode === "image" ? $("#menuImage") : $("#menuText");
    target?.focus({ preventScroll: true });
  }, 420);
}

async function fetchJson(url, options = {}, timeoutMs = 0) {
  const controller = timeoutMs > 0 ? new AbortController() : null;
  let timedOut = false;
  const timeout = controller ? window.setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs) : null;
  try {
    const response = await fetch(url, controller ? { ...options, signal: controller.signal } : options);
    if (response.status === 401) {
      redirectToPrivateLogin();
      const sessionError = new Error(t("sessionExpired"));
      sessionError.code = "SESSION_REQUIRED";
      throw sessionError;
    }
    const text = await response.text();
    let result = {};
    if (text) {
      try {
        result = JSON.parse(text);
      } catch {
        result = {
          error: "INVALID_JSON",
          message: "Server returned an unexpected response. Please try again shortly.",
        };
      }
    }
    return { response, result };
  } catch (error) {
    if (error?.code === "SESSION_REQUIRED") throw error;
    if (controller) {
      const menuError = new Error(t(timedOut ? "menuTimeout" : "menuNetworkError"));
      menuError.code = timedOut ? "MENU_CLIENT_TIMEOUT" : "MENU_NETWORK_ERROR";
      throw menuError;
    }
    throw error;
  } finally {
    if (timeout !== null) window.clearTimeout(timeout);
  }
}

const MENU_ERROR_TRANSLATIONS = {
  SESSION_REQUIRED: "sessionExpired",
  AI_REQUEST_TIMEOUT: "menuTimeout",
  MENU_CLIENT_TIMEOUT: "menuTimeout",
  MENU_NETWORK_ERROR: "menuNetworkError",
  INVALID_JSON: "menuServerResponse",
  AI_RATE_LIMITED: "aiRateLimited",
  RATE_LIMITED: "aiRateLimited",
  AI_QUOTA_EXCEEDED: "aiQuotaExceeded",
  AI_AUTH_ERROR: "aiAuthError",
  AI_MODEL_UNAVAILABLE: "aiModelUnavailable",
  AI_INVALID_REQUEST: "aiInvalidRequest",
  AI_SERVICE_UNAVAILABLE: "aiServiceUnavailable",
  AI_OUTPUT_TRUNCATED: "aiOutputTruncated",
  AI_INVALID_RESPONSE: "aiInvalidResponse",
  AI_RESPONSE_REFUSED: "aiResponseRefused",
  NO_MENU_ITEMS_FOUND: "imageNoItems",
  IMAGE_AI_NOT_CONFIGURED: "imageUnavailable",
  AI_PROVIDER_NOT_CONFIGURED: "imageUnavailable",
  IMAGE_REQUIRED: "imageRequired",
  IMAGE_TOO_LARGE: "imageTooLarge",
  REQUEST_BODY_TOO_LARGE: "imageTooLarge",
  UNSUPPORTED_IMAGE_TYPE: "imageUnsupported",
};

function menuErrorMessage(result, fallback) {
  const key = MENU_ERROR_TRANSLATIONS[result?.error || result?.code];
  return key ? t(key) : apiErrorMessage(result, fallback);
}

function apiErrorMessage(result, fallback) {
  return result?.message || result?.error || fallback;
}

function setPrivateStatus(message, tone = "") {
  const el = $("#privateAccessStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function updatePrivateAccessVisibility() {
  const panel = $("#privateAccess");
  if (panel) panel.hidden = !sessionVerified || !privateAccessGranted;
}

function redirectToPrivateLogin({ preserveNext = true } = {}) {
  if (loginRedirectPending) return;
  loginRedirectPending = true;
  sessionVerified = false;
  privateAccessGranted = false;
  document.body.classList.add("session-checking");
  clearPrivateLocalData();
  latestResult = null;
  if ($("#visualMenuGrid")) $("#visualMenuGrid").innerHTML = "";
  const next = `${window.location.pathname || "/"}${window.location.search || ""}${window.location.hash || ""}`;
  window.location.replace(preserveNext ? `/login?next=${encodeURIComponent(next)}` : "/login");
}

function setPrivateAccess(granted) {
  const wasGranted = privateAccessGranted;
  privateAccessGranted = Boolean(granted);
  document.body.classList.toggle("private-unlocked", privateAccessGranted);
  document.body.classList.toggle("private-locked", !privateAccessGranted);
  updatePrivateAccessVisibility();
  document.querySelectorAll("#privateLogoutTop").forEach((element) => {
    element.hidden = !privateAccessGranted;
  });
  const openPdcButton = $("#openPdcButton");
  if (openPdcButton) {
    openPdcButton.hidden = !privateAccessGranted;
    openPdcButton.setAttribute("aria-hidden", String(!privateAccessGranted));
    openPdcButton.tabIndex = privateAccessGranted ? 0 : -1;
  }
  document.querySelectorAll("#pdcForm input, #pdcForm textarea, #pdcForm select, #pdcForm button, #pdcInterventionForm textarea, #pdcInterventionForm button").forEach((element) => {
    element.disabled = !privateAccessGranted;
  });
  setStatus("");
  updateLegalGate();
  if (wasGranted && !privateAccessGranted) clearPrivateLocalData();
  if (privateAccessGranted && window.location.hash === "#personal-pdc") openPdcRoom();
  if (!privateAccessGranted && $("#personal-pdc")) $("#personal-pdc").hidden = true;
}

function legalAccepted() {
  return $("#legalAccepted")?.checked === true;
}

function storedLegalAccepted() {
  return localStorage.getItem(LEGAL_ACCEPTED_KEY) === "true";
}

function isTransparencyPage() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  return pathname === TRANSPARENCY_PATH;
}

function renderPageRoute() {
  if (!sessionVerified) {
    if ($("#legalGate")) $("#legalGate").hidden = true;
    if ($("#appShell")) $("#appShell").hidden = true;
    if ($("#aiTransparencyPage")) $("#aiTransparencyPage").hidden = true;
    return;
  }
  const transparencyPage = isTransparencyPage();
  document.body.classList.toggle("transparency-page", transparencyPage);
  document.title = transparencyPage ? `${t("aiTransparencyTitle")} | DishKAI` : HOME_TITLE;
  if ($("#aiTransparencyPage")) $("#aiTransparencyPage").hidden = !transparencyPage;
  if (transparencyPage) {
    document.body.classList.remove("legal-step-complete");
    if ($("#legalGate")) $("#legalGate").hidden = true;
    if ($("#appShell")) $("#appShell").hidden = true;
    return;
  }
  renderLegalStep();
}

function setLegalGateStatus(message, tone = "") {
  const el = $("#legalGateStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function renderLegalStep() {
  const accepted = sessionVerified && storedLegalAccepted();
  document.body.classList.toggle("legal-step-complete", accepted);
  if ($("#legalGate")) $("#legalGate").hidden = accepted;
  if ($("#appShell")) $("#appShell").hidden = !accepted;
  if ($("#generateButton")) $("#generateButton").disabled = menuAnalysisPending || !accepted || !sessionVerified;
  if ($("#enterAppButton")) $("#enterAppButton").disabled = !legalAccepted();
}

function updateLegalGate() {
  if ($("#enterAppButton")) $("#enterAppButton").disabled = !legalAccepted();
  if ($("#generateButton")) $("#generateButton").disabled = menuAnalysisPending || !storedLegalAccepted() || !sessionVerified;
}

function requireLegalAcceptance() {
  if (!sessionVerified || !privateAccessGranted) {
    redirectToPrivateLogin();
    return false;
  }
  if (storedLegalAccepted()) return true;
  setStatus(t("legalRequired"), "error");
  setLegalGateStatus(t("legalRequired"), "error");
  renderLegalStep();
  $("#legalAccepted")?.focus();
  return false;
}

function enterApp() {
  if (!sessionVerified || !privateAccessGranted) {
    redirectToPrivateLogin();
    return;
  }
  if (!legalAccepted()) {
    setLegalGateStatus(t("legalRequired"), "error");
    $("#legalAccepted")?.focus();
    return;
  }
  localStorage.setItem(LEGAL_ACCEPTED_KEY, "true");
  setLegalGateStatus("");
  renderLegalStep();
  focusMenuEntry();
}

function formatBytes(bytes) {
  const value = Number(bytes || 0);
  if (!Number.isFinite(value) || value <= 0) return "0 KB";
  if (value < 1024 * 1024) return `${Math.max(1, Math.round(value / 1024))} KB`;
  return `${(value / (1024 * 1024)).toFixed(1)} MB`;
}

async function compressMenuImage(file) {
  if (!file || !file.type?.startsWith("image/")) return { file, changed: false };
  if (file.type === "image/gif") return { file, changed: false };

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MENU_IMAGE_MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d", { alpha: false });
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close?.();

    const blob = await new Promise((resolve) => {
      canvas.toBlob(resolve, "image/jpeg", MENU_IMAGE_JPEG_QUALITY);
    });
    if (!blob || blob.size >= file.size) return { file, changed: false };

    const compressed = new File([blob], file.name.replace(/\.[^.]+$/, "") + "-dishkai-compressed.jpg", {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
    return { file: compressed, changed: true, originalSize: file.size, compressedSize: compressed.size, width, height };
  } catch (error) {
    console.warn("DishKAI image compression failed; uploading original image.", error);
    return { file, changed: false };
  }
}

async function checkPrivateAccess() {
  if (sessionCheckPending || loginRedirectPending) return false;
  sessionCheckPending = true;
  sessionVerified = false;
  document.body.classList.add("session-checking");
  const sessionStatus = $("#sessionStatus");
  const retryButton = $("#retrySessionButton");
  if (sessionStatus) {
    sessionStatus.hidden = false;
    sessionStatus.textContent = t("sessionChecking");
  }
  if (retryButton) retryButton.hidden = true;
  try {
    const { response, result } = await fetchJson("/api/private-status", { cache: "no-store", credentials: "same-origin" }, 10_000);
    if (loginRedirectPending) return false;
    if (!response.ok || result.ok !== true) throw new Error("SESSION_CHECK_FAILED");
    if (result.configured !== true || result.authenticated !== true) {
      redirectToPrivateLogin();
      return false;
    }
    sessionVerified = true;
    setPrivateAccess(true);
    document.body.classList.remove("session-checking");
    if (sessionStatus) sessionStatus.hidden = true;
    if (retryButton) retryButton.hidden = true;
    setPrivateStatus(t("privateUnlocked"));
    await initializePrivateTools();
    renderPageRoute();
    return true;
  } catch (error) {
    if (error?.code === "SESSION_REQUIRED" || loginRedirectPending) return false;
    if (sessionStatus) sessionStatus.textContent = t("sessionUnavailable");
    if (retryButton) retryButton.hidden = false;
    return false;
  } finally {
    sessionCheckPending = false;
  }
}

async function clearRecentScans() {
  clearPrivateLocalData();
  setPrivateStatus(t("clearScansDone"));
}

async function logoutPrivateAccess() {
  if (logoutPending) return;
  logoutPending = true;
  try {
    const { response, result } = await fetchJson("/api/private-logout", {
      method: "POST", cache: "no-store", credentials: "same-origin",
    }, 10_000);
    if (!response.ok || result.ok !== true) throw new Error("LOGOUT_FAILED");
    clearPrivateLocalData();
    redirectToPrivateLogin({ preserveNext: false });
  } catch (error) {
    if (error?.code !== "SESSION_REQUIRED") setPrivateStatus(t("logoutFailed"), "error");
  } finally {
    logoutPending = false;
  }
}

function clearPrivateLocalData() {
  localStorage.removeItem("dishkai-pdc-state");
  localStorage.removeItem("personalPdcCustomGroups");
  pdcState = { rounds: [] };
  ["#pdcTopic", "#pdcContext", "#pdcIntervention"].forEach((selector) => {
    const field = $(selector);
    if (field) field.value = "";
  });
  if (privateToolsInitialized) {
    renderPdcRoleCards([]);
    updatePdcDiscussionUi();
  }
  renderPdcRounds();
}

async function initializePrivateTools() {
  updatePrivateAccessVisibility();
  if (privateToolsInitialized || !sessionVerified || !privateAccessGranted) return;
  privateToolsInitialized = true;
  pdcState = loadPdcState();
  renderPdcRoleCards();
  updatePdcDiscussionUi();
  renderPdcRounds();
}

async function analyzeText() {
  if (!requireLegalAcceptance()) return;
  const menuText = $("#menuText").value.trim();
  if (!menuText) {
    setStatus(t("noItems"), "error");
    return;
  }
  setStatus(t("loading"));
  const { response, result } = await fetchJson("/api/analyze-menu-text", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      menuText,
      contributeUnknownDishes: $("#contributeUnknownDishes")?.checked === true,
      sourceLanguage: "auto",
      targetLanguage: $("#targetLanguage").value,
    }),
  }, MENU_REQUEST_TIMEOUT_MS);
  if (!response.ok || !result.ok) {
    if (response.status === 401) setPrivateAccess(false);
    setStatus(menuErrorMessage(result, t("noItems")), "error");
    return;
  }
  latestResult = result;
  incrementUsageCount();
  renderAnalysis(result);
  setStatus(`${result.items.length} ${t("summary")}.`);
  $("#visual-menu").scrollIntoView({ behavior: "smooth", block: "start" });
}

async function analyzeImage() {
  if (!requireLegalAcceptance()) return;
  const image = $("#menuImage").files[0];
  if (!image) {
    setStatus(t("imageRequired"), "error");
    return;
  }
  setStatus(t("loading"));
  const uploadImage = await compressMenuImage(image);
  if (!MENU_IMAGE_TYPES.has(String(uploadImage.file.type || "").toLowerCase())) {
    setStatus(t("imageUnsupported"), "error");
    return;
  }
  if (uploadImage.file.size > MENU_IMAGE_MAX_BYTES) {
    setStatus(t("imageTooLarge"), "error");
    return;
  }
  if (uploadImage.changed) {
    setStatus(template("compressionStatus", {
      from: formatBytes(uploadImage.originalSize),
      to: formatBytes(uploadImage.compressedSize),
    }));
  }
  const formData = new FormData();
  formData.append("image", uploadImage.file);
  formData.append("sourceLanguage", "auto");
  formData.append("targetLanguage", $("#targetLanguage").value);
  formData.append("contributeUnknownDishes", String($("#contributeUnknownDishes")?.checked === true));
  const { response, result } = await fetchJson("/api/analyze-menu-image", { method: "POST", body: formData }, MENU_REQUEST_TIMEOUT_MS);
  if (!response.ok || !result.ok) {
    if (response.status === 401) setPrivateAccess(false);
    setStatus(menuErrorMessage(result, t("imageUnavailable")), "error");
    return;
  }
  latestResult = result;
  incrementUsageCount();
  renderAnalysis(result);
  setStatus(`${result.items.length} ${t("summary")}.`);
}

function setMenuAnalysisPending(pending) {
  menuAnalysisPending = pending;
  $("#menuForm").setAttribute("aria-busy", String(pending));
  $("#generateButton").disabled = pending || !storedLegalAccepted() || !sessionVerified;
}

async function submitMenu(event) {
  event.preventDefault();
  if (menuAnalysisPending || !requireLegalAcceptance()) return;
  setMenuAnalysisPending(true);
  try {
    if (inputMode === "image") await analyzeImage();
    else await analyzeText();
  } catch (error) {
    setStatus(menuErrorMessage(error, t("menuServerResponse")), "error");
  } finally {
    setMenuAnalysisPending(false);
  }
}

function renderAnalysis(result) {
  expandedOrderIndex = null;
  renderSummary(result);
  renderVisualMenu(result.items || []);
}

function provenanceLabelKey(card) {
  return {
    "dishkai-database": "preparedContentLabel",
    "universal-generic": "localRuleBasedLabel",
    unmatched: "localRuleBasedLabel",
    "ai-fallback": "aiGeneratedLabel",
  }[card?.metadataSource] || "";
}

function renderProvenanceLabel(card) {
  const key = provenanceLabelKey(card);
  if (!key) return "";
  return `<p class="provenance-label provenance-${key.replace(/Label$/, "").replace(/[A-Z]/g, (char) => `-${char.toLowerCase()}`)}"><span aria-hidden="true">ⓘ</span>${escapeHtml(t(key))}</p>`;
}

function renderSafetyNote() {
  return `<p class="safety-note"><span aria-hidden="true">ⓘ</span>${escapeHtml(t("safetyNote"))}</p>`;
}

function isAiGeneratedImage(card, path) {
  if (!path || path.includes("/placeholders/")) return false;
  if (card?.imageOrigin) return card.imageOrigin === "ai-generated";
  return ["dishkai-database", "unmatched", "ai-fallback"].includes(card?.metadataSource);
}

function renderImageProvenanceLabel(card) {
  const imagePath = safeImagePath(card?.imagePath);
  if (!isAiGeneratedImage(card, imagePath)) return "";
  return `<span class="image-provenance-label"><span aria-hidden="true">ⓘ</span>${escapeHtml(t("aiGeneratedImageLabel"))}</span>`;
}

function menuReadingProvider(source) {
  if (String(source || "").startsWith("gemini")) return "Google Gemini";
  if (String(source || "").startsWith("openai")) return "OpenAI";
  if (source === "workers-ai") return "Cloudflare Workers AI";
  if (["local-fallback", "local", "local-parser"].includes(source)) return t("localMenuReading");
  return t("otherAiReading");
}

function renderSummary(result) {
  const matched = result.items.filter((item) => item.matchStatus === "matched").length;
  const universal = result.items.filter((item) => item.matchStatus === "universal").length;
  const aiGenerated = result.items.filter((item) => item.matchStatus === "ai-generated").length;
  const unmatched = result.items.filter((item) => item.matchStatus === "unmatched").length;
  const universalSummary = universal ? `<span>${universal} ${t("universal")}</span>` : "";
  const aiSummary = aiGenerated ? `<span>${aiGenerated} ${t("aiEstimated")}</span>` : "";
  $("#menuSummary").innerHTML = `
    <span>${result.items.length} ${t("summary")}</span>
    <span>${matched} ${t("matched")}</span>
    ${universalSummary}
    ${aiSummary}
    <span>${unmatched} ${t("unmatched")}</span>
    <span class="menu-reading-source">${escapeHtml(template("menuReadBy", { provider: menuReadingProvider(result.extractionSource) }))}</span>
  `;
}

function renderVisualMenu(items) {
  const grid = $("#visualMenuGrid");
  if (!items.length) {
    grid.innerHTML = `<p class="empty-state">${t("noItems")}</p>`;
    return;
  }
  grid.innerHTML = items.map((item) => {
    const card = item.card || {};
    const thumbPath = safeImagePath(card.thumbPath || card.imagePath);
    const thumbLabel = isAiGeneratedImage(card, thumbPath) ? `<span class="thumbnail-provenance-label" role="img" aria-label="${escapeAttribute(t("aiGeneratedImageLabel"))}">AI</span>` : "";
    const thumbMarkup = thumbPath ? `<span class="menu-card-thumb"><img src="${escapeAttribute(thumbPath)}" alt="" loading="lazy">${thumbLabel}</span>` : "";
    const tags = (card.iconTags || []).slice(0, 5).map((tag) => `<span class="icon-tag" title="${escapeHtml(tag.label)}">${tag.icon ? `${tag.icon} ` : ""}${escapeHtml(tag.label)}</span>`).join("");
    const detailId = `dish-detail-${String(item.orderIndex).replace(/[^a-zA-Z0-9_-]/g, "-")}`;
    const isExpanded = String(item.orderIndex) === String(expandedOrderIndex);
    const statusLabel = item.matchStatus === "matched"
      ? t("tapForDetails")
      : item.matchStatus === "universal"
        ? t("tapForUniversal")
        : item.matchStatus === "ai-generated"
          ? t("aiGenerated")
          : t("tapForEstimate");
    return `
      <article class="menu-card ${item.matchStatus} ${isExpanded ? "expanded" : ""}" data-order-index="${item.orderIndex}">
        <button class="menu-card-button ${thumbPath ? "has-thumb" : "no-thumb"}" type="button" data-open-card="${item.orderIndex}" aria-expanded="${isExpanded ? "true" : "false"}" aria-controls="${escapeAttribute(detailId)}">
          <span class="order-index">${item.orderIndex}</span>
          ${thumbMarkup}
          <div class="menu-card-copy">
            <h3>${escapeHtml(item.originalName)}</h3>
            <p>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</p>
            <div class="icon-row">${tags}</div>
            <small>${statusLabel}</small>
          </div>
        </button>
        ${isExpanded ? `<div id="${escapeAttribute(detailId)}" class="inline-knowledge-card">${renderKnowledgeCardMarkup(item)}</div>` : ""}
      </article>
    `;
  }).join("");
  grid.querySelectorAll("[data-open-card]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = items.find((entry) => String(entry.orderIndex) === button.dataset.openCard);
      if (!item) return;
      expandedOrderIndex = String(expandedOrderIndex) === String(item.orderIndex) ? null : item.orderIndex;
      renderVisualMenu(items);
      grid.querySelector(`[data-open-card="${String(item.orderIndex).replace(/[^a-zA-Z0-9_-]/g, "")}"]`)?.focus({ preventScroll: true });
    });
  });
}

function renderKnowledgeCardMarkup(item) {
  const card = item.card || {};
  const imagePath = safeImagePath(card.imagePath);
  const composition = (card.composition || []).map((part) => `
    <li><span>${escapeHtml(part.name || part.role)}</span><strong>${Number(part.estimatedPercent || 0)}%</strong></li>
  `).join("") || `<li><span>—</span><strong></strong></li>`;
  const tags = (card.iconTags || []).map((tag) => `<span class="icon-tag">${tag.icon} ${escapeHtml(tag.label)}</span>`).join("");
  const variations = renderVariations(card.commonVariations);
  const unverified = card.verified === false && card.metadataSource === "ai-fallback" ? `<p class="notice">${t("aiGenerated")}</p>` : "";
  const universalNotice = card.verified === false && card.metadataSource === "universal-generic" ? `<p class="notice">${t("universalGuidance")}</p>` : "";
  const provenance = renderProvenanceLabel(card);
  const imageProvenance = renderImageProvenanceLabel(card);
  return `
    <div class="knowledge-card">
    ${imagePath ? `<div class="knowledge-image"><img src="${escapeAttribute(imagePath)}" alt="" loading="lazy">${imageProvenance}</div>` : ""}
    <div class="knowledge-copy">
      <p class="eyebrow">${escapeHtml(card.cuisineName || item.matchStatus)}</p>
      <h3>${escapeHtml(card.familiarName || item.cleanName || item.originalName)}</h3>
      <p class="original-name"><strong>${t("original")}:</strong> ${escapeHtml(item.originalName)}</p>
      <p class="verdict">${escapeHtml(card.orderVerdict || t("unknownNote"))}</p>
      ${provenance}
      ${renderSafetyNote()}
      ${imagePath ? `<p class="notice">${escapeHtml(isAiGeneratedImage(card, imagePath) ? t("aiImageLabel") : card.visualDisclaimer || "")}</p>` : ""}
      ${unverified}
      ${universalNotice}
      ${card.cuisineRole?.note ? `<p>${escapeHtml(card.cuisineRole.note)}</p>` : ""}
      <dl>
        <div><dt>${t("description")}</dt><dd>${escapeHtml(card.shortDescription || t("unknownNote"))}</dd></div>
        <div><dt>${t("preparation")}</dt><dd>${renderCooking(card.cooking)}</dd></div>
        <div><dt>${t("composition")}</dt><dd><ul class="composition-list">${composition}</ul><p class="helper">${escapeHtml(t("compositionEstimateNote"))}</p></dd></div>
        <div><dt>${t("taste")}</dt><dd>${listText(card.basicTaste)}</dd></div>
        <div><dt>${t("flavor")}</dt><dd>${listText(card.distinctiveFlavorSources)}</dd></div>
        <div><dt>${t("texture")}</dt><dd>${listText(card.texture)}</dd></div>
        ${variations ? `<div><dt>${t("variations")}</dt><dd>${variations}</dd></div>` : ""}
        <div><dt>${t("potentialAllergens")}</dt><dd>${Array.isArray(card.watchOuts) && card.watchOuts.length ? listText(card.watchOuts) : escapeHtml(t("allergensNotConfirmed"))}</dd></div>
        ${imagePath && card.visualDisclaimer ? `<div><dt>${t("disclaimer")}</dt><dd>${escapeHtml(card.visualDisclaimer)}</dd></div>` : ""}
      </dl>
      <div class="icon-row">${tags}</div>
    </div>
    </div>
  `;
}

function renderCooking(cooking) {
  if (!cooking?.profile && !cooking?.methods?.length) return "—";
  const methods = (cooking.methods || []).map((method) => `<span class="method-tag">${escapeHtml(method)}</span>`).join("");
  return `<div class="method-row">${methods}</div>${cooking.profile ? `<p class="cooking-profile">${escapeHtml(cooking.profile)}</p>` : ""}`;
}

function renderVariations(variations) {
  if (!Array.isArray(variations) || !variations.length) return "";
  return `<ul class="variation-list">${variations.map((variation) => `
    <li><strong>${escapeHtml(variation.label || "")}</strong><span>${escapeHtml(variation.note || "")}</span></li>
  `).join("")}</ul>`;
}

function listText(value) {
  return escapeHtml(Array.isArray(value) && value.length ? value.join(", ") : "—");
}

function escapeHtml(value) {
  return String(value || "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

const pdcCouncils = {
  product: [
    role("rex-velocity", "Rex Velocity", "雷克斯", "产品增长合伙人", "让用户现在行动", ["点击理由", "增长", "行动速度"], "判断用户为什么会点开、开始、完成、继续、分享。", "激进、直接、急性子、结果导向。", "用户行动、第一眼吸引力、完成率、继续率、分享欲。", "很美但没人用的产品、过度解释、慢吞吞的验证。", "可能过度追求短期钩子。", ["用户为什么要现在行动？", "30秒内用户能得到什么？", "这个入口有没有点击理由？"], "增长、冷启动、首屏转化、行动钩子。", "短、狠、直接。"),
    role("vera-flow", "Vera Flow", "维拉", "UX 合伙人", "让用户第一秒看懂", ["UX", "清晰度", "路径"], "降低理解成本，清理用户路径，让用户知道下一步。", "冷静、精准、极简。", "首屏理解、按钮清楚、路径顺畅、认知负担。", "信息过载、抽象概念堆砌、按钮混乱。", "可能过度简化，削弱情绪价值。", ["用户第一秒知道该做什么吗？", "哪一步会让用户想关闭？", "这个文案是不是太长？"], "页面体验、流程设计、入口优化。", "简短、精准、像手术刀。"),
    role("max-build", "Max Build", "马克斯", "执行合伙人", "把想法变成行动", ["执行", "时间盒", "交付"], "把讨论转化为任务、时间线、负责人和验证标准。", "务实、自律、强推进。", "明天做什么、怎么验证、交付顺序。", "没有行动的讨论、没有负责人、没有时间表。", "可能太任务化，忽略人味。", ["明天到底做哪三件事？", "这个方案如何验证？", "谁负责，什么时候完成？"], "行动计划、MVP、复盘。", "清单式、推进式。"),
    role("nina-ember", "Nina Ember", "妮娜", "社群冷启动合伙人", "找到第一批火种人", ["冷启动", "关系", "种子用户"], "找到第一批真实回应者，设计私聊邀请和内测关系链。", "温暖、现实、社交敏感。", "种子用户、真实反馈、私聊、转介绍。", "公开撒网、把人当流量。", "可能比强增长打法慢。", ["谁会认真回应你？", "第一批火种人在哪里？", "这个邀请像推广还是像邀请？"], "冷启动、社群、内测。", "温暖但现实。"),
    role("wang-zhibai", "Wang Zhibai / 王之白", "王之白", "视觉设计合伙人", "定义视觉语言和留白", ["视觉", "留白", "品牌感"], "塑造视觉语言、版式、留白、节奏和品牌记忆点。", "克制、安静、有审美。", "视觉一致性、留白、字体、色彩、结果卡。", "颜色太多、普通 AI 工具感。", "可能过度打磨。", ["这看起来像 MapKAI 吗？", "视觉是否清晰、有记忆点？", "颜色和留白是否克制？"], "品牌视觉、界面质感、结果卡。", "安静、挑剔、审美精准。"),
    role("owen-insight", "Owen Insight", "欧文", "用户洞察合伙人", "听懂礼貌反馈背后的真话", ["用户洞察", "反馈", "反自嗨"], "分辨真实反馈和礼貌性好评，识别用户犹豫点。", "共情、敏锐、怀疑表面好评。", "用户原话、真实动机、犹豫、但是。", "创始人自嗨、把朋友鼓励当市场信号。", "可能过度分析。", ["用户是真的理解，还是只是在客气？", "用户原话里的“但是”是什么？", "如果不是你发给他，他还会点吗？"], "用户反馈、内测复盘、定位验证。", "温和但刺痛。"),
    role("adrian-north", "Adrian North", "阿德里安", "战略合伙人", "守住长期方向", ["战略", "长期", "定位"], "判断短期动作是否符合长期方向和产品主线。", "冷静、宏观、长期主义。", "产品定位、长期复利、战略一致性。", "追热点、短期诱惑、频繁转向。", "可能太抽象。", ["这会不会带偏长期主线？", "三年后这件事还重要吗？", "这是否增强你的战略位置？"], "长期定位、职业方向、资源选择。", "冷静、高位。"),
    role("orion-zhuge", "Orion Zhuge / 诸葛观辰", "诸葛观辰", "象征时机合伙人", "观察时机、象和隐藏势能", ["时机", "象征", "隐喻"], "提供象征性、隐喻性、非线性的时机判断。", "神秘、冷静、幽默。", "气口、时机、门是否打开、火是否点燃。", "纯机械判断、没有人味。", "可能太玄。", ["从象征视角看，这件事的势在哪里？", "现在是点火、蓄势还是转向？", "门开了吗，火点了吗？"], "时机判断、直觉补充。", "有画面感，但说明不是预测。"),
    role("mira-ethos", "Mira Ethos", "米拉", "镜像完整性合伙人", "守住语言边界和镜子感", ["边界", "伦理", "镜子感"], "防止产品语言过度定义用户，守住可信度和心理边界。", "优雅、克制、敏感。", "语言边界、命中感、可信度。", "伪心理学、人格标签、过度营销。", "可能太谨慎。", ["这句话是否过度定义用户？", "它是镜子，还是标签？", "是否有命中感但保留边界？"], "结果页文案、自我探索、心理边界。", "克制、优雅、精准。"),
  ],
  personal: [
    role("strategist", "The Strategist", "长线战略者", "长线战略者", "判断三年后的长期价值", ["长期", "职业", "复利"], "判断选择是否符合长期职业价值、人生主线和身份变化。", "冷静、长期主义、系统化。", "长期复利、职业主线、身份升级。", "短期兴奋、随机转向。", "可能过度理性。", ["这个选择三年后还重要吗？", "它会增强我的长期位置吗？", "它让我更接近什么身份？"], "EMBA、职业转型、创业投入。", "冷静、高位、长期视角。"),
    role("builder", "The Builder", "现实建造者", "现实建造者", "把人生选择变成现实动作", ["执行", "资源", "行动"], "判断选择如何落地，需要多少时间、钱、精力和下一步行动。", "务实、具体、清单化。", "时间、资源、行动路径、可验证结果。", "没有行动的宏大愿景。", "可能低估精神价值。", ["这件事明天怎么落地？", "每周要投入多少小时？", "30天后怎么判断？"], "行动计划、时间管理、决策实验。", "现实、直接、清单式。"),
    role("learner", "The Learner", "终身学习者", "终身学习者", "判断学习是否真正有效", ["学习", "认知", "知识结构"], "判断选择是否带来真实知识、认知升级和可迁移能力。", "好奇、系统化、重视输入质量。", "学习效率、知识结构、反馈循环。", "为了安全感而学习。", "可能把学习当成逃避行动。", ["这个选择让我学到什么真实能力？", "是系统学习，还是买安全感？", "学到的东西能不能马上实践？"], "EMBA、课程、学习路径、AI 能力建设。", "理性、好奇、结构化。"),
    role("creator", "The Creator", "创造者", "创造者", "逼你把想法变成作品", ["创造", "作品", "表达"], "判断选择是否增加作品、创造力、公开表达和真实输出。", "有想象力、冲动、热爱作品。", "产品、文章、视频、公开表达。", "只学习不输出。", "可能过度追求输出。", ["一年后这个选择会留下什么作品？", "它会增加我的创造力吗？", "我是在创造，还是在准备创造？"], "创业项目、个人品牌、内容输出。", "有热情、有画面感。"),
    role("guardian", "The Guardian", "守护者", "守护者", "守住健康、家庭和基本稳定", ["家庭", "健康", "精力"], "判断选择是否伤害身体、家庭、睡眠、财务和情绪稳定。", "稳重、保护性强、现实。", "健康、家庭、睡眠、金钱、情绪。", "用燃烧自己证明成长。", "可能过度保守。", ["这个选择会伤害家庭节奏吗？", "我的身体和精力承受得了吗？", "我是不是在用透支换成长？"], "高负荷选择、家庭平衡。", "温和、坚定、保护你。"),
    role("challenger", "The Challenger", "反对者", "反对者", "拆穿自我欺骗", ["反驳", "真相", "自欺检测"], "挑战最舒服的答案，拆穿虚荣、逃避、从众和伪战略。", "尖锐、直接、不讨好。", "真实动机、隐藏恐惧、自我欺骗。", "自我感动、虚荣包装。", "可能过度尖锐。", ["我是不是在骗自己？", "这是战略，还是害怕承认浪费？", "我真正不敢面对的是什么？"], "重大选择、纠结、反复合理化。", "尖锐、像审问。"),
    role("connector", "The Connector", "关系连接者", "关系连接者", "判断关系、人脉和圈层价值", ["人脉", "关系", "圈层"], "判断选择会带来哪些人、关系、导师、合作和社交资本。", "社交敏感、现实、懂关系价值。", "人脉质量、同伴、导师、合作机会。", "高估空泛人脉、低估真实关系。", "可能高估圈层价值。", ["这个选择会让我遇见什么人？", "这些关系是真资源，还是名片？", "家人和重要关系如何受影响？"], "EMBA、人脉、职业圈层。", "现实、细腻、关系导向。"),
    role("inner-compass", "The Inner Compass", "内在罗盘", "内在罗盘", "判断是否接近真正想成为的人", ["意义", "身份", "价值观"], "判断选择是否符合价值观、身份一致性和后悔最小化。", "安静、深刻、关注意义。", "价值观、意义感、身份、自我一致性。", "看起来合理但内在不对的选择。", "可能太抽象。", ["这个选择让我更接近想成为的人吗？", "如果五年后回看，我会后悔什么？", "这个决定和我的人生原则一致吗？"], "人生方向、身份变化、价值观冲突。", "安静、深刻。"),
    role("wild-oracle", "The Wild Oracle", "野性预言者", "野性预言者", "用象征和直觉看时机", ["直觉", "时机", "象征"], "从隐喻、直觉、时机和势能角度提供非线性提醒。", "野性、诗意、神秘。", "气口、门、火、风向、时机。", "过度理性、完全忽视直觉。", "可能太玄。", ["从象征看，现在是出手、蓄势还是转向？", "这件事的气口在哪里？", "我的直觉在提醒什么？"], "直觉校准、时机判断、人生转折。", "诗意、有画面感，但说明不是预测。"),
  ],
};

function role(id, name, cnName, cnRole, shortTrait, tags, core, personality, cares, hates, blind, questions, bestFor, style) {
  return { id, name, cn_name: cnName, cn_role: cnRole, short_trait: shortTrait, tags, core_responsibility: core, personality, cares_about: cares, hates, blind_spot: blind, typical_questions: questions, best_for: bestFor, speaking_style: style };
}

const quickSelections = {
  product: ["rex-velocity", "vera-flow", "max-build"],
  personal: ["strategist", "builder", "challenger"],
};

const pdcLoadingText = {
  individual_debate: "独立参会人正在形成各自判断……",
  auto_group_debate: "自动分组正在融合各自立场……",
};

function loadPrivateLocalRecord(key, fallback) {
  try {
    const record = JSON.parse(localStorage.getItem(key));
    if (!record || !Number.isFinite(record.expiresAt) || record.expiresAt <= Date.now()) {
      localStorage.removeItem(key);
      return fallback;
    }
    return record;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function loadPdcState() {
  return loadPrivateLocalRecord("dishkai-pdc-state", { rounds: [] });
}

function savePdcState() {
  pdcState.expiresAt = Date.now() + PDC_HISTORY_RETENTION_MS;
  localStorage.setItem("dishkai-pdc-state", JSON.stringify(pdcState));
}

function loadPdcGroupingSettings() {
  return loadPrivateLocalRecord("personalPdcCustomGroups", {});
}

function savePdcGroupingSettings() {
  const settings = {
    council_type: currentCouncilType(),
    discussion_style: currentDiscussionStyle(),
    group_count: currentGroupCount(),
    selected_agents: selectedPdcAgents(),
    expiresAt: Date.now() + PDC_HISTORY_RETENTION_MS,
  };
  localStorage.setItem("personalPdcCustomGroups", JSON.stringify(settings));
}

function setPdcStatus(message, tone = "") {
  const el = $("#pdcStatus");
  if (!el) return;
  el.textContent = message;
  el.className = `status ${tone}`.trim();
}

function openPdcRoom() {
  if (!privateAccessGranted || !sessionVerified) {
    updatePrivateAccessVisibility();
    return;
  }
  const section = $("#personal-pdc");
  pdcState = loadPdcState();
  section.hidden = false;
  restorePdcGroupingSettings();
  renderPdcRoleCards();
  updatePdcDiscussionUi();
  renderPdcRounds();
  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function currentCouncilType() {
  return $("#pdcCouncilType")?.value || "product";
}

function currentCouncilAgents() {
  return pdcCouncils[currentCouncilType()] || pdcCouncils.product;
}

function currentDiscussionStyle() {
  return $("#pdcDiscussionStyle")?.value || "individual_debate";
}

function currentGroupCount() {
  return Math.max(1, Number($("#pdcGroupCount")?.value || 1));
}

function selectedPdcAgents() {
  return Array.from(document.querySelectorAll(".role-card.selected")).map((card) => card.dataset.agentId);
}

function restorePdcGroupingSettings() {
  const settings = loadPdcGroupingSettings();
  if (settings.council_type && $("#pdcCouncilType")) $("#pdcCouncilType").value = settings.council_type;
  if (settings.discussion_style && $("#pdcDiscussionStyle")) $("#pdcDiscussionStyle").value = settings.discussion_style;
  if (settings.group_count && $("#pdcGroupCount")) $("#pdcGroupCount").value = settings.group_count;
}

function renderPdcRoleCards(selectedIds = loadPdcGroupingSettings().selected_agents || []) {
  const container = $("#pdcRoleGrid");
  if (!container) return;
  const selected = new Set(selectedIds.filter((id) => currentCouncilAgents().some((agent) => agent.id === id)));
  container.innerHTML = currentCouncilAgents().map((agent) => `
    <article class="role-card ${selected.has(agent.id) ? "selected" : ""}" data-agent-id="${agent.id}">
      <div class="role-card-head">
        <div>
          <h4>${escapeHtml(agent.name)} / ${escapeHtml(agent.cn_name)}</h4>
          <p>${escapeHtml(agent.cn_role)}</p>
        </div>
        <button class="role-check" type="button" aria-label="选择 ${escapeHtml(agent.cn_name)}">✓</button>
      </div>
      <p>${escapeHtml(agent.short_trait)}</p>
      <div class="role-tags">${agent.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>
      <details class="role-detail">
        <summary>查看详情</summary>
        <dl>
          <div><dt>核心职责</dt><dd>${escapeHtml(agent.core_responsibility)}</dd></div>
          <div><dt>性格特点</dt><dd>${escapeHtml(agent.personality)}</dd></div>
          <div><dt>最在乎什么</dt><dd>${escapeHtml(agent.cares_about)}</dd></div>
          <div><dt>最讨厌什么</dt><dd>${escapeHtml(agent.hates)}</dd></div>
          <div><dt>典型盲点</dt><dd>${escapeHtml(agent.blind_spot)}</dd></div>
          <div><dt>常问的问题</dt><dd>${escapeHtml(agent.typical_questions.join(" / "))}</dd></div>
          <div><dt>适合参与什么决策</dt><dd>${escapeHtml(agent.best_for)}</dd></div>
          <div><dt>典型发言风格</dt><dd>${escapeHtml(agent.speaking_style)}</dd></div>
        </dl>
      </details>
    </article>
  `).join("");
  container.querySelectorAll(".role-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("details")) return;
      card.classList.toggle("selected");
      updatePdcDiscussionUi();
      savePdcGroupingSettings();
    });
  });
  updatePdcDiscussionUi();
}

function selectPdcAgents(ids) {
  const selected = new Set(ids);
  document.querySelectorAll(".role-card").forEach((card) => {
    card.classList.toggle("selected", selected.has(card.dataset.agentId));
  });
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
}

function selectedOrDefaultAgents() {
  const selected = selectedPdcAgents();
  return selected.length ? selected : currentCouncilAgents().map((agent) => agent.id);
}

function updatePdcDiscussionUi() {
  const grouped = currentDiscussionStyle() === "auto_group_debate";
  $("#pdcGroupCountWrap").hidden = !grouped;
  updatePdcCallEstimate();
  renderAutoGroupPreview();
}

function autoAssignGroups(selectedIds, groupCount) {
  const ids = [...new Set(selectedIds)];
  if (!ids.length) return [];
  const count = Math.max(1, Math.min(Number(groupCount) || 1, ids.length));
  const groups = Array.from({ length: count }, () => []);
  ids.forEach((id, index) => groups[index % count].push(id));
  return groups;
}

function buildAutoGroups() {
  return autoAssignGroups(selectedOrDefaultAgents(), currentGroupCount()).map((memberIds, index) => ({
    group_id: `group_${index + 1}`,
    group_name: `第 ${index + 1} 组`,
    group_purpose: "融合组内成员特征，对当前决策形成一个小组立场。",
    member_ids: memberIds,
  }));
}

function renderAutoGroupPreview() {
  const container = $("#pdcAutoGroupPreview");
  if (!container) return;
  if (currentDiscussionStyle() !== "auto_group_debate") {
    container.innerHTML = "";
    return;
  }
  const agentById = new Map(currentCouncilAgents().map((agent) => [agent.id, agent]));
  container.innerHTML = buildAutoGroups().map((group) => `
    <section class="auto-group-card">
      <h4>${escapeHtml(group.group_name)}</h4>
      <ul>
        ${group.member_ids.map((id) => {
          const agent = agentById.get(id);
          return `<li>${escapeHtml(agent?.name || id)} / ${escapeHtml(agent?.cn_name || "")}：${escapeHtml(agent?.short_trait || "")}</li>`;
        }).join("")}
      </ul>
    </section>
  `).join("");
  updatePdcCallEstimate();
}

function estimatePdcCalls() {
  const selectedCount = selectedOrDefaultAgents().length;
  if (currentDiscussionStyle() === "individual_debate") return selectedCount;
  return Math.min(currentGroupCount(), selectedCount);
}

function updatePdcCallEstimate() {
  const el = $("#pdcCallEstimate");
  if (el) el.textContent = `预计 AI 调用次数：${estimatePdcCalls()}`;
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/"/g, "&quot;");
}

function safeImagePath(value) {
  const path = String(value || "").trim();
  if (!path) return "";
  if (path.startsWith("/assets/dishes/")) return path;
  if (path.startsWith("assets/dishes/")) return `/${path}`;
  return "";
}

async function startPdcRound(event) {
  event.preventDefault();
  if (!privateAccessGranted || !sessionVerified) {
    setPdcStatus(t("privateDenied"), "error");
    return;
  }
  const topic = $("#pdcTopic").value.trim();
  const context = $("#pdcContext").value.trim();
  const discussionStyle = currentDiscussionStyle();
  if (!topic) {
    setPdcStatus("请输入决策议题。", "error");
    return;
  }

  pdcState = {
    topic,
    context,
    council_type: currentCouncilType(),
    meeting_mode: discussionStyle,
    selected_agents: selectedOrDefaultAgents(),
    group_count: currentGroupCount(),
    custom_groups: discussionStyle === "auto_group_debate" ? buildAutoGroups() : [],
    previous_summary: "",
    rounds: [],
  };
  savePdcState();
  savePdcGroupingSettings();
  setPdcStatus(pdcLoadingText[discussionStyle] || "合伙人正在进入会议室……");
  await callPdcRound({ mode: "round_1a" });
}

async function continuePdcRound(event) {
  event.preventDefault();
  if (!privateAccessGranted || !sessionVerified) {
    setPdcStatus(t("privateDenied"), "error");
    return;
  }
  if (!Number.isFinite(pdcState.expiresAt) || pdcState.expiresAt <= Date.now()) {
    clearPrivateLocalData();
    setPdcStatus(t("pdcHistoryExpired"), "error");
    return;
  }
  const intervention = $("#pdcIntervention").value.trim();
  if (!intervention) {
    setPdcStatus("请先写下你想补充、追问或纠正的内容。", "error");
    return;
  }
  setPdcStatus("委员会正在根据你的补充继续讨论……");
  await callPdcRound({ mode: "user_intervention", user_intervention: intervention });
  $("#pdcIntervention").value = "";
}

async function callPdcRound({ mode, user_intervention = "" }) {
  try {
    const { response, result } = await fetchJson("/api/pdc-round", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic: pdcState.topic,
        context: pdcState.context,
        mode,
        council_type: pdcState.council_type || "product",
        meeting_mode: pdcState.meeting_mode || "individual_debate",
        selected_agents: pdcState.selected_agents || [],
        group_count: pdcState.group_count || 1,
        custom_groups: pdcState.custom_groups || [],
        previous_summary: typeof pdcState.previous_summary === "string" ? pdcState.previous_summary : JSON.stringify(pdcState.previous_summary || {}),
        user_intervention,
      }),
    });
    if (!response.ok || result.error) {
      if (response.status === 401) setPrivateAccess(false);
      throw new Error(apiErrorMessage(result, "PDC 暂时无法启动。请检查 Cloudflare Workers AI binding 是否配置为 AI。"));
    }

    pdcState.previous_summary = result.summary || pdcState.previous_summary || "";
    pdcState.rounds.push({
      mode,
      user_intervention,
      result,
      created_at: new Date().toISOString(),
    });
    savePdcState();
    renderPdcRounds();
    $("#pdcInterventionForm").hidden = false;
    setPdcStatus("PDC 本轮讨论完成。");
  } catch (error) {
    setPdcStatus(error.message || "PDC 暂时无法启动。请检查 Cloudflare Workers AI binding 是否配置为 AI。", "error");
  }
}

function renderPdcRounds() {
  const container = $("#pdcRounds");
  if (!container) return;
  const rounds = pdcState.rounds || [];
  container.innerHTML = rounds.map((round, index) => renderPdcRound(round, index)).join("");
  $("#pdcInterventionForm").hidden = !rounds.length;
  if (pdcState.topic && $("#pdcTopic") && !$("#pdcTopic").value) {
    $("#pdcTopic").value = pdcState.topic;
    $("#pdcContext").value = pdcState.context || "";
    if ($("#pdcCouncilType")) $("#pdcCouncilType").value = pdcState.council_type || "product";
    if ($("#pdcDiscussionStyle")) $("#pdcDiscussionStyle").value = normalizePdcUiMode(pdcState.meeting_mode);
    if ($("#pdcGroupCount")) $("#pdcGroupCount").value = pdcState.group_count || 3;
    renderPdcRoleCards(pdcState.selected_agents || []);
    updatePdcDiscussionUi();
  }
}

function normalizePdcUiMode(mode) {
  if (["team_debate", "preset_team_debate", "custom_team_debate", "hybrid_debate"].includes(mode)) return "auto_group_debate";
  if (mode === "quick_mode" || mode === "select_agents" || mode === "full_council") return "individual_debate";
  return mode || "individual_debate";
}

function renderPdcRound(round, index) {
  const result = round.result || {};
  const userCard = round.user_intervention ? `
    <article class="pdc-user-card">
      <h3>我的补充：</h3>
      <p>${escapeHtml(round.user_intervention)}</p>
    </article>
  ` : "";
  const cards = (result.participants || []).map(renderPdcParticipantCard).join("");
  return `
    <section class="pdc-round">
      <div class="pdc-round-title">
        <span>第 ${index + 1} 轮 · ${result.meeting_mode || round.mode}</span>
        <span>${round.mode === "user_intervention" ? "继续讨论" : "开场陈述"}</span>
      </div>
      ${userCard}
      ${cards}
      ${result.next_step ? `<p class="provenance-label">${escapeHtml(result.summary?.contentOrigin === "rule-based" ? t("ruleBasedSummaryLabel") : t("sourceNotRecorded"))}</p><p class="helper">${escapeHtml(result.next_step)}</p>` : ""}
    </section>
  `;
}

function renderPdcParticipantCard(participant) {
  const isTeam = participant.participant_type === "team";
  const contentLabel = participant.contentOrigin === "ai-generated"
    ? t("aiGeneratedLabel")
    : participant.contentOrigin === "local-fallback" ? t("localFallbackLabel") : t("sourceNotRecorded");
  const members = isTeam ? `
    <ul class="member-list">
      ${(participant.members || []).map((member) => `<li>${escapeHtml(member.name)} · ${escapeHtml(member.role || member.responsibility || "")}</li>`).join("")}
    </ul>
  ` : "";
  const memberTraits = isTeam && participant.member_traits?.length
    ? `<div><dt>成员特征：</dt><dd>${escapeHtml(participant.member_traits.join("；"))}</dd></div>`
    : "";
  return `
    <article class="pdc-card ${isTeam ? "team-participant" : "agent-participant"}">
      <span class="participant-kind">${escapeHtml(participant.contentOrigin === "ai-generated" ? (isTeam ? t("pdcAiTeam") : t("pdcAiRole")) : (isTeam ? "小组" : "角色"))}</span>
      <p class="provenance-label">${escapeHtml(contentLabel)}</p>
      <h3>${escapeHtml(participant.name)}</h3>
      <p class="pdc-role">${escapeHtml(participant.role_or_purpose)}</p>
      ${members}
      <dl>
        <div><dt>立场标签：</dt><dd>${escapeHtml(participant.decision_bias)}</dd></div>
        <div><dt>立场：</dt><dd>${escapeHtml(participant.position)}</dd></div>
        <div><dt>回应用户：</dt><dd>${escapeHtml(participant.response_to_user)}</dd></div>
        ${memberTraits}
        ${isTeam ? `<div><dt>组内张力：</dt><dd>${escapeHtml(participant.internal_tension)}</dd></div>` : ""}
        <div><dt>最强反驳：</dt><dd>${escapeHtml(participant.strongest_counterargument)}</dd></div>
        <div><dt>建议：</dt><dd>${escapeHtml(participant.recommendation)}</dd></div>
        <div><dt>风险：</dt><dd>${escapeHtml(participant.risk)}</dd></div>
        <div><dt>挑战：</dt><dd>${escapeHtml(participant.challenge)}</dd></div>
      </dl>
    </article>
  `;
}

document.querySelectorAll("[data-ui-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    uiLang = button.dataset.uiLang;
    localStorage.setItem("dishkai-ui-lang", uiLang);
    applyLanguage();
  });
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
  button.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    const buttons = [...document.querySelectorAll("[data-mode]")];
    const currentIndex = buttons.indexOf(button);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextButton = buttons[(currentIndex + direction + buttons.length) % buttons.length];
    event.preventDefault();
    setMode(nextButton.dataset.mode);
    nextButton.focus();
  });
});

$("#menuForm").addEventListener("submit", submitMenu);

$("#targetLanguage").addEventListener("change", () => {
  uiLang = $("#targetLanguage").value;
  localStorage.setItem("dishkai-ui-lang", uiLang);
  applyLanguage();
});

$("#openPdcButton")?.addEventListener("click", openPdcRoom);
$("#pdcCouncilType")?.addEventListener("change", () => {
  renderPdcRoleCards([]);
  savePdcGroupingSettings();
});
$("#pdcDiscussionStyle")?.addEventListener("change", () => {
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
});
$("#pdcGroupCount")?.addEventListener("input", () => {
  updatePdcDiscussionUi();
  savePdcGroupingSettings();
});
$("#pdcSelectAll")?.addEventListener("click", () => selectPdcAgents(currentCouncilAgents().map((agent) => agent.id)));
$("#pdcSelectProductQuick")?.addEventListener("click", () => {
  if ($("#pdcCouncilType")) $("#pdcCouncilType").value = "product";
  renderPdcRoleCards(quickSelections.product);
});
$("#pdcSelectPersonalQuick")?.addEventListener("click", () => {
  if ($("#pdcCouncilType")) $("#pdcCouncilType").value = "personal";
  renderPdcRoleCards(quickSelections.personal);
});
$("#pdcClearSelection")?.addEventListener("click", () => selectPdcAgents([]));
$("#pdcForm")?.addEventListener("submit", startPdcRound);
$("#pdcInterventionForm")?.addEventListener("submit", continuePdcRound);
$("#clearRecentScans")?.addEventListener("click", clearRecentScans);
$("#privateLogout")?.addEventListener("click", logoutPrivateAccess);
$("#privateLogoutTop")?.addEventListener("click", logoutPrivateAccess);
window.addEventListener("hashchange", () => {
  updatePrivateAccessVisibility();
  if (sessionVerified) void initializePrivateTools();
});
$("#enterAppButton")?.addEventListener("click", enterApp);
if ($("#legalAccepted")) {
  $("#legalAccepted").checked = localStorage.getItem(LEGAL_ACCEPTED_KEY) === "true";
  $("#legalAccepted").addEventListener("change", updateLegalGate);
}
renderPageRoute();

incrementVisitCount();
applyLanguage();
updatePrivateAccessVisibility();
void checkPrivateAccess();

$("#retrySessionButton")?.addEventListener("click", () => { void checkPrivateAccess(); });
window.addEventListener("pageshow", (event) => {
  if (event.persisted) void checkPrivateAccess();
});
window.addEventListener("pagehide", () => {
  sessionVerified = false;
  document.body.classList.add("session-checking");
});
