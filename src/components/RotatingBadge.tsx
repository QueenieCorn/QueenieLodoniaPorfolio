type RotatingBadgeProps = {
  text: string;
  className?: string;
};

/**
 * Circular seal: text set on a path, ring rotates slowly.
 * Decorative: hidden from assistive tech, and the spin is disabled
 * by the reduced-motion block in globals.css.
 */
export default function RotatingBadge({ text, className }: RotatingBadgeProps) {
  return (
    <div aria-hidden="true" className={className}>
      <div className="relative grid size-full place-items-center rounded-full border border-gold/40 bg-bg/40 backdrop-blur-sm">
        <svg viewBox="0 0 100 100" className="spin-slow size-full">
          <defs>
            <path
              id="badge-arc"
              fill="none"
              d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            />
          </defs>
          <text
            fill="currentColor"
            className="fill-gold text-[7.5px] tracking-[0.28em] uppercase"
          >
            <textPath href="#badge-arc" startOffset="0%">
              {text}
            </textPath>
          </text>
        </svg>

        {/* Static centre mark */}
        <svg
          viewBox="0 0 24 24"
          className="absolute size-[26%] text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2c1.8 3 1.8 5 0 7-1.8-2-1.8-4 0-7ZM12 22c-1.8-3-1.8-5 0-7 1.8 2 1.8 4 0 7ZM2 12c3-1.8 5-1.8 7 0-2 1.8-4 1.8-7 0ZM22 12c-3 1.8-5 1.8-7 0 2-1.8 4-1.8 7 0Z" />
        </svg>
      </div>
    </div>
  );
}
