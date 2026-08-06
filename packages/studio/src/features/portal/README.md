# Portal integration boundary

This directory contains Studio behavior owned by the long-text portal integration:

- stable deep-link launch kinds;
- portal-triggered draft-session activation;
- portal-specific Chinese and English empty-state guidance.

Keep account, billing, authorization, and cross-engine task history in the portal repository. Add code here only when it adapts the InkOS Studio experience. Changes to InkOS Core belong in separate, narrowly scoped commits with Core tests.

## Product branding

User-facing product identity is centralized in `brand.ts` and `PortalBrandLogo.tsx`.
The deployed portal origin is configured at build time with `VITE_PORTAL_URL`:

```powershell
$env:VITE_PORTAL_URL = "https://your-portal.example.com"
pnpm --filter @actalk/inkos-studio build
```

When the variable is absent, local development links return to
`http://127.0.0.1:8787`. Internal package names, API contracts, configuration
filenames, and storage keys remain unchanged for upstream compatibility.
