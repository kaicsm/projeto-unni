interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-9" }: LogoProps) {
  return (
    <a href="#top" class="flex items-center gap-2 shrink-0">
      <img
        src="/images/logo.png"
        alt="Projeto UNNI"
        class={className}
        style={{ width: "auto" }}
      />
    </a>
  );
}
