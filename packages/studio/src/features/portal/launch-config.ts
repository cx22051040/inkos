const PORTAL_LAUNCH_KINDS = ["script", "storyboard", "interactive-film"] as const;

export type PortalLaunchKind = (typeof PORTAL_LAUNCH_KINDS)[number];

const portalLaunchKindSet = new Set<string>(PORTAL_LAUNCH_KINDS);

export function isPortalLaunchKind(value: string): value is PortalLaunchKind {
  return portalLaunchKindSet.has(value);
}

export function parsePortalLaunchPath(path: string): PortalLaunchKind | null {
  const match = path.match(/^chat\/([^/]+)$/);
  if (!match || !isPortalLaunchKind(match[1])) return null;
  return match[1];
}

export function portalLaunchToHash(kind: PortalLaunchKind): string {
  return `#/chat/${kind}`;
}
