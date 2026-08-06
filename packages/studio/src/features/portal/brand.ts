const configuredPortalUrl = import.meta.env.VITE_PORTAL_URL?.trim();
const portalUrl = (configuredPortalUrl || "http://127.0.0.1:8787").replace(/\/$/, "");

export const PORTAL_BRAND = {
  productName: "智作门户",
  englishName: "Stargate AI",
  workspaceName: "星际创作工作台",
  tagline: "让每一个想法，都能成为完整作品",
  portalUrl,
  helpUrl: `${portalUrl}/help.html`,
  sourceUrl: "https://github.com/cx22051040/inkos",
} as const;

