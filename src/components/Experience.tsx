import Reveal from "@/components/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="eyebrow">Experience</h2>
        </Reveal>

        <ol className="mt-10 lg:mt-14">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`}>
              <Reveal index={i}>
                <article className="group grid gap-2 border-t border-line/50 py-7 transition-colors duration-300 hover:border-gold/60 lg:grid-cols-12 lg:gap-8 lg:py-8">
                  <p className="tabular text-xs tracking-[0.16em] uppercase text-muted lg:col-span-3">
                    {job.period}
                  </p>

                  <div className="lg:col-span-4">
                    <h3 className="font-display text-xl text-cream transition-colors duration-300 group-hover:text-rose sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-xs tracking-[0.16em] uppercase text-gold">
                      {job.company}
                    </p>
                  </div>

                  <p className="max-w-[62ch] text-sm leading-relaxed lg:col-span-5">
                    {job.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
          <li aria-hidden="true" className="border-t border-line/50" />
        </ol>
      </div>
    </section>
  );
}
