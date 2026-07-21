import { describe, expect, it } from "vitest";
import { getPortalEmptyGuidance } from "./portal-guidance";

describe("portal empty guidance", () => {
  it("returns localized guidance for portal-owned modes", () => {
    expect(getPortalEmptyGuidance("script", true)).toBe(
      "说明剧本类型、角色关系、核心冲突、时长和使用媒介，我会生成场次、动作、对白与可继续拆分的镜头线索。",
    );
    expect(getPortalEmptyGuidance("storyboard", false)).toBe(
      "Describe the video topic, scenes, shot count, visual rhythm, and audio requirements to create a shot-by-shot storyboard.",
    );
    expect(getPortalEmptyGuidance("interactive-film", false)).toBe(
      "Describe the interactive world, player role, opening event, key choices, and ending directions to create an editable branching narrative.",
    );
    expect(getPortalEmptyGuidance("book-create", true)).toBe(
      "说明书名、题材、世界观、主角和核心冲突，我会先建立可持续写作的故事基础与章节规划。",
    );
  });

  it("lets native InkOS modes keep their existing guidance", () => {
    expect(getPortalEmptyGuidance("short", true)).toBeNull();
    expect(getPortalEmptyGuidance("play", false)).toBeNull();
    expect(getPortalEmptyGuidance(undefined, true)).toBeNull();
  });
});
