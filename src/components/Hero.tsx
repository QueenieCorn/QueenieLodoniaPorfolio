import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotatingBadge from "@/components/RotatingBadge";
import { RESUME_URL } from "@/lib/content";

const disciplines = ["WordPress", "Elementor & Divi", "PSD & Figma to Web"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden lg:flex lg:min-h-svh lg:items-center"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-28 pb-10 sm:px-6 lg:px-8 lg:py-28">
        <div className="lg:max-w-[52%]">
          {/* One h1 carrying the whole headline. The three lines are spans
              so the display treatment doesn't fragment it for screen readers.
              Sizes are derived from the reference measured at 1440px:
              "I BUILD" cap 65px, "SITES" cap 329px / 600px wide,
              "THAT GO LIVE." 524px wide. */}
          <h1>
            <Reveal
              as="span"
              className="block font-normal leading-[0.9] tracking-[0.04em] text-cream text-[clamp(1.75rem,6.37vw,5.75rem)]"
            >
              I BUILD
            </Reveal>

            <Reveal
              as="span"
              index={1}
              className="mt-1 block text-[clamp(3rem,62vw,27.5rem)] leading-[0.85] text-rose lg:text-[clamp(4rem,30.5vw,27.5rem)]"
            >
              {/* Bodoni Moda 900 compressed to 0.45 for the reference's
                  condensed proportions. transform does not shrink the layout
                  box, but it only ever scales down, so nothing spills. */}
              <span className="block origin-left scale-x-[0.45] font-wordmark font-black tracking-[-0.02em]">
                SITES
              </span>
            </Reveal>

            <Reveal
              as="span"
              index={2}
              className="mt-4 block leading-[0.95] tracking-[0.02em] text-cream text-[clamp(1.5rem,5.18vw,4.7rem)]"
            >
              THAT <em>GO LIVE.</em>
            </Reveal>
          </h1>

          <Reveal index={3}>
            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.625rem] tracking-[0.2em] uppercase text-muted">
              {disciplines.map((item, i) => (
                <li key={item} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal index={4}>
            {/* One primary CTA; the second is a ghost pill so the hierarchy
                stays clear. Wraps to two rows on narrow screens. */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="pill pill-solid group">
                View work
                <ArrowRight aria-hidden="true" className="arrow size-3.5" />
              </a>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="pill pill-ghost group"
              >
                Download my Resume
                <Download aria-hidden="true" className="arrow-down size-3.5" />
                <span className="sr-only"> (opens in Google Drive)</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Portrait. Flows below the headline on small screens (the message
          leads); from lg it leaves the container and bleeds to the right
          viewport edge, full height, as in the reference. */}
      <div className="relative mx-auto w-full max-w-[22rem] px-4 pb-16 sm:px-6 lg:absolute lg:inset-y-0 lg:right-0 lg:mx-0 lg:w-1/2 lg:max-w-none lg:px-0 lg:pb-0">
        <div className="relative aspect-[4/5] lg:h-full lg:aspect-auto">
          <Image
            src="/queenie.jpg"
            alt="Queenie Lodonia"
            fill
            priority
            sizes="(max-width: 1023px) 22rem, 50vw"
            className="rounded-sm object-cover object-center lg:rounded-none"
          />

          {/* Left edge dissolves into the page instead of showing a seam */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden lg:block bg-[linear-gradient(to_right,var(--color-bg)_0%,transparent_42%)]"
          />
          {/* Top scrim keeps the transparent nav legible over the photo */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-40 lg:block bg-[linear-gradient(to_bottom,rgba(26,5,8,0.8)_0%,transparent_100%)]"
          />

          <RotatingBadge
            text="• WORDPRESS · ELEMENTOR · DIVI "
            className="absolute -right-4 top-4 size-24 text-gold sm:size-28 lg:right-10 lg:top-28 lg:size-32"
          />
        </div>
      </div>
    </section>
  );
}
