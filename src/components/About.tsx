import { ArrowRight, Sparkle, Flower2, Circle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { stats, skills } from "@/lib/content";

const icons = {
  sparkle: Sparkle,
  flower: Flower2,
  circle: Circle,
};

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">About me</p>
            </Reveal>

            <Reveal index={1}>
              <h2 className="mt-6 text-[clamp(2rem,6vw,3.25rem)]">
                Design meets{" "}
                <em className="text-rose">delivery.</em>
              </h2>
            </Reveal>

            <Reveal index={2}>
              <p className="mt-6 max-w-[46ch] text-sm leading-relaxed sm:text-base">
                I&rsquo;m Queenie, a WordPress developer based in Cebu City. I
                build and customize sites with Elementor, Divi and Avada,
                converting PSD and Figma designs into fully responsive builds,
                and taking clients from first requirements through launch and
                revisions.
              </p>
            </Reveal>

            {/* Skills exactly as the resume lists them */}
            <Reveal index={3}>
              <ul className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line/70 px-3 py-1.5 text-[0.625rem] tracking-[0.14em] uppercase text-muted transition-colors duration-250 hover:border-gold/70 hover:text-cream"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal index={4}>
              <a href="#contact" className="pill pill-ghost group mt-8">
                Get in touch
                <ArrowRight aria-hidden="true" className="arrow size-3.5" />
              </a>
            </Reveal>
          </div>

          <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:gap-5">
            {stats.map((stat, i) => {
              const Icon = icons[stat.icon];
              return (
                <li key={stat.label}>
                  <Reveal index={i} direction="right" className="h-full">
                    <article className="group h-full rounded-sm border border-line/60 bg-[linear-gradient(160deg,#5a1220_0%,#3a0c14_100%)] p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-gold/70 lg:p-8">
                      <Icon
                        aria-hidden="true"
                        className="size-6 text-gold transition-transform duration-300 group-hover:scale-110"
                        strokeWidth={1}
                      />

                      {stat.value ? (
                        <p className="mt-8 font-display text-4xl text-rose lg:text-5xl">
                          {stat.value}
                        </p>
                      ) : null}

                      <h3
                        className={`font-display text-lg text-cream ${
                          stat.value ? "mt-2 text-base font-normal" : "mt-8"
                        }`}
                      >
                        {stat.label}
                      </h3>

                      <p className="mt-4 text-xs leading-relaxed sm:text-sm">
                        {stat.description}
                      </p>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
