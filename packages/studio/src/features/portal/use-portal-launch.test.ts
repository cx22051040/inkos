import { describe, expect, it, vi } from "vitest";
import { activatePortalLaunch } from "./use-portal-launch";

describe("portal launch activation", () => {
  it("creates a matching draft and enters the normal chat route", () => {
    const actions = {
      createDraftSession: vi.fn(() => "draft-1"),
      setProjectSessionId: vi.fn(),
      setChatInput: vi.fn(),
      setRoute: vi.fn(),
    };

    expect(activatePortalLaunch("script", actions)).toBe("draft-1");
    expect(actions.createDraftSession).toHaveBeenCalledWith(null, "script");
    expect(actions.setProjectSessionId).toHaveBeenCalledWith("draft-1");
    expect(actions.setChatInput).toHaveBeenCalledWith("");
    expect(actions.setRoute).toHaveBeenCalledWith({ page: "chat" });
  });
});
