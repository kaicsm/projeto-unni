import type { JSX } from "preact";

type IconProps = JSX.SVGAttributes<SVGSVGElement> & { size?: number };

export function CheckIcon({ size = 14, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={3}
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function MailIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={1.8}
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width={1.8}
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function QuoteIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M9.5 7.5c-3 1.2-4.5 3.4-4.5 6.5 0 2.5 1.6 4 3.7 4 1.8 0 3.3-1.4 3.3-3.3 0-1.8-1.3-3-2.9-3-.3 0-.6 0-.8.1.2-1.6 1.4-3 3.2-3.7l-2-.6Zm9 0c-3 1.2-4.5 3.4-4.5 6.5 0 2.5 1.6 4 3.7 4 1.8 0 3.3-1.4 3.3-3.3 0-1.8-1.3-3-2.9-3-.3 0-.6 0-.8.1.2-1.6 1.4-3 3.2-3.7l-2-.6Z" />
    </svg>
  );
}
