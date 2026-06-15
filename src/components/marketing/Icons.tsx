import type { SVGProps } from "react";

export function NotebookTangledIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="8" y="6" width="28" height="36" rx="1" />
      <path d="M8 14h28M8 22h28M8 30h28" strokeDasharray="2 3" />
      <path d="M28 8 c4 4 -6 8 0 12 c4 3 -6 8 0 12 c4 3 -6 6 0 10" stroke="var(--spartype-gold)" />
      <circle cx="36" cy="40" r="2" fill="var(--spartype-gold)" stroke="none" />
    </svg>
  );
}

export function ClockQuestionIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="22" cy="24" r="16" />
      <path d="M22 14v10l7 4" />
      <path d="M36 10 c3 -3 9 -1 9 3 c0 4 -5 4 -5 8" stroke="var(--spartype-gold)" />
      <circle cx="40" cy="26" r="1.4" fill="var(--spartype-gold)" stroke="none" />
    </svg>
  );
}

export function FbrDocIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 6h18l8 8v28a2 2 0 0 1 -2 2H12a2 2 0 0 1 -2 -2V8a2 2 0 0 1 2 -2z" />
      <path d="M30 6v8h8" />
      <path d="M16 24h16M16 30h16M16 36h10" />
      <rect x="14" y="14" width="10" height="6" stroke="var(--spartype-gold)" />
      <text x="15.5" y="19" fontSize="5" fill="var(--spartype-gold)" stroke="none" fontFamily="Inter, sans-serif" fontWeight="700">FBR</text>
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 10l4 4 8-9" />
    </svg>
  );
}