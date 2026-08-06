export function PortalBrandLogo({ className }: { readonly className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      role="img"
      aria-label="智作门户"
    >
      <rect width="64" height="64" rx="18" fill="#0B1020" />
      <path
        d="M14 39.5C18.5 48.5 27 53 36 51.5C45.5 50 52.5 42 52.5 32C52.5 22 45 13.5 34.5 12.5C24 11.5 15 18.5 12.5 28"
        stroke="#7C8CFF"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <path
        d="M19 37C22.5 43 28 46 34 45C41 44 46 38.5 46 32C46 25.5 41 20 34.5 19.5C28 19 22.5 22.5 20 28"
        stroke="#59D8D2"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M31.8 22.5L34.2 29.8L41.5 32.2L34.2 34.6L31.8 42L29.4 34.6L22 32.2L29.4 29.8L31.8 22.5Z" fill="#F8FAFF" />
      <circle cx="51" cy="14" r="2.5" fill="#59D8D2" />
    </svg>
  );
}

