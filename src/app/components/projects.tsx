import { FiArrowUpRight } from "react-icons/fi";
import { RevealStagger } from "./reveal";

const PROJECTS = [
  {
    id: "vylo",
    name: "Vylo",
    subtitle: "Real-Time Social Video",
    href: "/vylo",
    tone: "from-[#05070f] via-[#0b1224] to-[#1a1a4a]",
    image: "/vylo/banner.png",
  },
  {
    id: "atlas",
    name: "Atlas",
    subtitle: "AI Building Intelligence",
    href: "/atlas",
    tone: "from-[#0b1420] via-[#12253a] to-[#1a3a52]",
    image: "/bms/home.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32 lg:px-10 lg:pb-40 lg:pt-40"
    >
      <div className="w-full">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <div>
            <p className="mb-2 text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:mb-3 sm:text-sm">
              FEATURED PROJECTS
            </p>
            <h2 className="font-black uppercase leading-[0.88] tracking-tight text-black text-[9.5vw] md:text-[8vw]">
              Selected Work
            </h2>
          </div>

          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-3 self-start sm:self-auto"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform duration-300 hover:-translate-y-0.5">
              <FiArrowUpRight className="h-5 w-5" />
            </span>
            <span className="font-semibold underline underline-offset-[6px] decoration-1">
              View All Projects
            </span>
          </a>
        </div>

        <RevealStagger
          step={120}
          className="grid min-h-[calc(100dvh-8rem)] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6"
        >
          {PROJECTS.map(({ id, name, subtitle, href, tone, image }) => {
            const className =
              "reveal-child group relative block min-h-[280px] overflow-hidden rounded-[1.5rem] sm:min-h-[320px] sm:rounded-[2rem] lg:min-h-[380px]";
            const inner = (
              <>
                <div className="absolute inset-0 origin-center transition-[scale] duration-700 ease-out will-change-transform group-hover:scale-110">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tone}`}
                    aria-hidden
                  />
                  {image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={image}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover opacity-55 transition-opacity duration-700 ease-out group-hover:opacity-80"
                    />
                  )}
                </div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/85"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 transition-[translate] duration-500 ease-out group-hover:-translate-y-1 sm:p-8">
                  <div>
                    <p className="text-[10px] font-medium tracking-[0.25em] text-white/60 transition-colors duration-300 group-hover:text-white/80 sm:text-xs">
                      {subtitle}
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                      {name}
                    </h3>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-md transition-[translate,scale,rotate] duration-500 ease-out group-hover:-translate-y-0.5 group-hover:rotate-45 group-hover:scale-110">
                    <FiArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </>
            );

            return (
              <a key={id} href={href} className={className}>
                {inner}
              </a>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
