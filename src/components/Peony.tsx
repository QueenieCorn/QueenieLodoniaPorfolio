type PeonyProps = {
  className?: string;
};

/**
 * Decorative bloom standing in for the reference's peony photography.
 * Layered radial gradients rather than clipart, so it reads as atmosphere
 * not as a missing asset.
 */
export default function Peony({ className }: PeonyProps) {
  return (
    <div aria-hidden="true" className={`pointer-events-none ${className ?? ""}`}>
      <div className="float-slow relative size-full">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_35%,#a11f2f_0%,#6b1220_45%,transparent_72%)] blur-2xl" />
        <div className="absolute inset-[18%] rounded-full bg-[radial-gradient(circle_at_60%_40%,#c72a3c_0%,#7d1523_50%,transparent_75%)] blur-xl opacity-80" />
        <div className="absolute inset-[38%] rounded-full bg-[radial-gradient(circle_at_50%_50%,#e0525f_0%,#8b1a28_60%,transparent_80%)] blur-lg opacity-70" />
      </div>
    </div>
  );
}
