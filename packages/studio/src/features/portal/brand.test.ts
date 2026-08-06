import { describe, expect, it } from "vitest";
import { PORTAL_BRAND } from "./brand";

describe("portal product brand", () => {
  it("keeps the user-facing identity and portal links centralized", () => {
    expect(PORTAL_BRAND.productName).toBe("智作门户");
    expect(PORTAL_BRAND.workspaceName).toBe("星际创作工作台");
    expect(PORTAL_BRAND.helpUrl).toBe(`${PORTAL_BRAND.portalUrl}/help.html`);
    expect(`${PORTAL_BRAND.productName}${PORTAL_BRAND.workspaceName}`).not.toMatch(/InkOS/i);
  });
});
