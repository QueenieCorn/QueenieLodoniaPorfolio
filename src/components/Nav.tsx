"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/content";

function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none ${className ?? ""}`}>
      <span className="font-display text-base tracking-[0.14em] text-cream sm:text-xl sm:tracking-[0.18em]">
        QUEENIE LODONIA
      </span>
      <span className="mt-1 text-[0.5rem] tracking-[0.4em] text-muted">
        WEB DESIGNER
      </span>
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");
  const [overHero, setOverHero] = useState(true);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    toggleRef.current?.focus();
  }, []);

  // Escape closes the mobile panel and returns focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Highlight whichever section is currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Float transparently over the hero, then settle into the solid bar.
  // An observer rather than a scroll listener: same pattern as above, and it
  // doesn't fire on every frame.
  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOverHero(entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        overHero && !open
          ? "border-b border-transparent bg-transparent"
          : "border-b border-line-soft/70 bg-bg/85 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Queenie Lodonia, home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative flex min-h-11 items-center px-4 text-[0.6875rem] tracking-[0.2em] uppercase transition-colors duration-250 hover:text-rose ${
                      isActive ? "text-cream" : "text-muted"
                    }`}
                  >
                    {link.label}
                    {/* Active marker: a dot, matching the reference */}
                    <span
                      aria-hidden="true"
                      className={`absolute bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-rose transition-transform duration-250 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="pill pill-ghost group hidden lg:inline-flex"
        >
          Let&rsquo;s talk
          <ArrowUpRight aria-hidden="true" className="arrow size-3.5" />
        </a>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-cream transition-colors duration-250 hover:border-gold hover:text-rose lg:hidden"
        >
          {open ? (
            <X aria-hidden="true" className="size-5" />
          ) : (
            <Menu aria-hidden="true" className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile panel. Unmounted via `hidden` when closed, so no
          open/close transition runs. */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line-soft/70 bg-bg/95 lg:hidden"
      >
        <nav aria-label="Primary mobile">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`flex min-h-12 items-center border-b border-line-soft/60 text-xs tracking-[0.2em] uppercase transition-colors duration-250 hover:text-rose ${
                    active === link.href ? "text-cream" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="pill pill-solid group w-full"
              >
                Let&rsquo;s talk
                <ArrowUpRight aria-hidden="true" className="arrow size-3.5" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
