import type { ChatSessionKind } from "../../store/chat";

interface LocalizedGuidance {
  readonly zh: string;
  readonly en: string;
}

const PORTAL_GUIDANCE = {
  "book-create": {
    zh: "说明书名、题材、世界观、主角和核心冲突，我会先建立可持续写作的故事基础与章节规划。",
    en: "Describe the title, genre, world, protagonist, and core conflict to build the story foundation and chapter plan.",
  },
  script: {
    zh: "说明剧本类型、角色关系、核心冲突、时长和使用媒介，我会生成场次、动作、对白与可继续拆分的镜头线索。",
    en: "Describe the script format, character relationships, conflict, runtime, and medium to create scenes, action, dialogue, and shot cues.",
  },
  storyboard: {
    zh: "说明视频主题、场景、镜头数量、画面节奏和声音要求，我会生成逐镜头分镜表。",
    en: "Describe the video topic, scenes, shot count, visual rhythm, and audio requirements to create a shot-by-shot storyboard.",
  },
  "interactive-film": {
    zh: "说明互动作品的世界、玩家身份、开场事件、关键选择和结局方向，我会建立可编辑的分支叙事项目。",
    en: "Describe the interactive world, player role, opening event, key choices, and ending directions to create an editable branching narrative.",
  },
} satisfies Partial<Record<ChatSessionKind, LocalizedGuidance>>;

export function getPortalEmptyGuidance(
  sessionKind: ChatSessionKind | undefined,
  isZh: boolean,
): string | null {
  if (!sessionKind) return null;
  const guidance = PORTAL_GUIDANCE[sessionKind as keyof typeof PORTAL_GUIDANCE];
  if (!guidance) return null;
  return isZh ? guidance.zh : guidance.en;
}
