import { ArrowRight, Mail, MapPin } from "lucide-react";
import BehanceIcon from "@/components/BehanceIcon";
import Peony from "@/components/Peony";
import Reveal from "@/components/Reveal";
import RotatingBadge from "@/components/RotatingBadge";
import { contactRows, CONTACT_EMAIL } from "@/lib/content";

const icons = {
  mail: Mail,
  behance: BehanceIcon,
  pin: MapPin,
};

export default function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-md bg-[linear-gradient(120deg,#6b1220_0%,#4a0f1a_55%,#2f0a12_100%)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <Peony className="absolute -bottom-16 -right-16 size-72 opacity-80 lg:size-96" />
            <RotatingBadge
              text="• LET'S BUILD SOMETHING GOOD "
              className="absolute right-6 top-8 hidden size-28 text-gold lg:block"
            />

            <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-6">
                <p className="eyebrow">Let&rsquo;s connect</p>

                <h2 className="mt-6 text-[clamp(1.875rem,5.5vw,3rem)]">
                  Ready to build{" "}
                  <em className="text-rose">your site?</em>
                </h2>

                <p className="mt-5 max-w-[44ch] text-sm sm:text-base">
                  Tell me what you need built. I take it from first
                  requirements through launch and revisions.
                </p>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="pill pill-solid group mt-8"
                >
                  Let&rsquo;s work together
                  <ArrowRight aria-hidden="true" className="arrow size-3.5" />
                </a>
              </div>

              <ul className="lg:col-span-5 lg:col-start-8 lg:self-center">
                {contactRows.map((row) => {
                  const Icon = icons[row.icon];
                  const inner = (
                    <>
                      <Icon
                        aria-hidden="true"
                        className="size-4 shrink-0 text-muted transition-colors duration-250 group-hover:text-gold"
                        strokeWidth={1.25}
                      />
                      <span className="text-sm">{row.label}</span>
                    </>
                  );

                  return (
                    <li key={row.label} className="border-b border-line/60">
                      {row.href ? (
                        <a
                          href={row.href}
                          target={row.external ? "_blank" : undefined}
                          rel={row.external ? "noreferrer noopener" : undefined}
                          className="group flex min-h-12 items-center gap-4 py-3 text-cream transition-[color,padding] duration-250 hover:pl-2 hover:text-rose"
                        >
                          {inner}
                        </a>
                      ) : (
                        <p className="group flex min-h-12 items-center gap-4 py-3 text-cream">
                          {inner}
                        </p>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
