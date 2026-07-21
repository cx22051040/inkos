import { describe, expect, it } from "vitest";
import {
  isPortalLaunchKind,
  parsePortalLaunchPath,
  portalLaunchToHash,
} from "./launch-config";

describe("portal launch config", () => {
  it("recognizes only the approved portal launch kinds", () => {
    expect(isPortalLaunchKind("script")).toBe(true);
    expect(isPortalLaunchKind("storyboard")).toBe(true);
    expect(isPortalLaunchKind("interactive-film")).toBe(true);
    expect(isPortalLaunchKind("book")).toBe(false);
  });

  it("parses and serializes portal chat paths", () => {
    expect(parsePortalLaunchPath("chat/script")).toBe("script");
    expect(parsePortalLaunchPath("chat/interactive-film")).toBe("interactive-film");
    expect(parsePortalLaunchPath("chat/unknown")).toBeNull();
    expect(portalLaunchToHash("storyboard")).toBe("#/chat/storyboard");
  });
});
