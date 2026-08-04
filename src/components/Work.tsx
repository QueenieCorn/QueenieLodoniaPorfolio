import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { projects, BEHANCE_PROFILE } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="relative scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <Reveal>
            <h2 className="eyebrow">Featured work</h2>
          </Reveal>
          <Reveal index={1}>
            <a
              href={BEHANCE_PROFILE}
              target="_blank"
              rel="noreferrer noopener"
              className="pill pill-ghost group"
            >
              View all on Behance
              <ArrowRight aria-hidden="true" className="arrow size-3.5" />
            </a>
          </Reveal>
        </div>

        {/* 3 columns at lg rather than 4: a 4-col card is only 225px wide at
            1024px, too small to read a website screenshot. 4 columns from xl. */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Reveal index={i} className="h-full">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col"
                >
                  {/* aspect-ratio reserves the box, so nothing shifts while images load */}
                  <div className="relative aspect-[4/3.4] overflow-hidden rounded-sm bg-panel">
                    <Image
                      src={project.image}
                      /* Decorative: the h3 below sits inside the same link and
                         already names the project, so alt would only repeat it */
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 1023px) calc(50vw - 2.5rem), (max-width: 1279px) calc(33vw - 2rem), 300px"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-bg/0 transition-colors duration-300 group-hover:bg-bg/20"
                    />
                  </div>

                  <h3 className="mt-4 text-[0.6875rem] tracking-[0.2em] uppercase text-cream transition-colors duration-250 group-hover:text-rose">
                    {project.name}
                    <span className="sr-only"> (opens on Behance)</span>
                  </h3>
                  <p className="tabular mt-1.5 flex items-center justify-between gap-3 text-xs text-muted">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
