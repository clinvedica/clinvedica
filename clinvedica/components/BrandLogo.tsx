type BrandLogoProps = {
  className?: string;
  /** Overall scale of the lockup. */
  size?: 'sm' | 'md' | 'lg';
  /** Light tagline for dark backgrounds (e.g. footer). */
  variant?: 'light' | 'dark';
};

const sizeMap = {
  sm: {
    icon: 'w-[58px] md:w-[64px]',
    name: 'text-[11px]',
    tag: 'text-[7px]',
    gap: 'gap-0.5',
  },
  md: {
    icon: 'w-[80px] md:w-[96px]',
    name: 'text-[14px]',
    tag: 'text-[8px]',
    gap: 'gap-1',
  },
  lg: {
    icon: 'w-[110px]',
    name: 'text-[18px]',
    tag: 'text-[10px]',
    gap: 'gap-1.5',
  },
};

/**
 * Brand lockup: your logo.png mark + styled "Clin Vedica" / "LIFE SCIENCES" text.
 */
export default function BrandLogo({
  className = '',
  size = 'md',
  variant = 'dark',
}: BrandLogoProps) {
  const s = sizeMap[size];
  const tagColor = variant === 'light' ? 'text-gray-300' : 'text-neutral-700';
  const align = className.includes('items-start') ? 'items-start' : 'items-center';

  return (
    <span className={`inline-flex flex-col ${align} ${s.gap} ${className}`}>
      <img
        src="/logo.png"
        alt=""
        className={`${s.icon} h-auto shrink-0`}
        aria-hidden="true"
      />
      <span className={`${s.name} font-bold leading-none tracking-tight`}>
        <span className="text-[#7A1F1A]">Clin </span>
        <span className="bg-gradient-to-r from-[#9A5A28] to-[#C9A56A] bg-clip-text text-transparent">
          Vedica
        </span>
      </span>
      <span
        className={`${s.tag} ${tagColor} font-semibold uppercase tracking-[0.18em] leading-none`}
      >
        Life Sciences
      </span>
    </span>
  );
}
