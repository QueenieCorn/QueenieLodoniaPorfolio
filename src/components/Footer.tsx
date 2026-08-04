export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line-soft/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-8 text-center sm:px-6 lg:flex-row lg:justify-between lg:px-8 lg:text-left">
        <span className="flex flex-col leading-none">
          <span className="font-display text-base tracking-[0.14em] text-cream">
            QUEENIE LODONIA
          </span>
          <span className="mt-1 text-[0.5rem] tracking-[0.4em] text-muted">
            WEB DESIGNER
          </span>
        </span>

        <p className="text-xs text-muted">
          © {new Date().getFullYear()} Queenie Lodonia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
