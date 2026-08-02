import { FiArrowUpRight, FiBox, FiTrendingUp } from "react-icons/fi";
import HeroPerson from "./hero-person";
import { Reveal } from "./reveal";

const TITLES = [
  "Software Engineer",
  "AI Automation",
  "Cloud Architecture",
  "Full-Stack Development",
  "Building Automation",
  "Systems Design",
  "Data Engineering",
];

function ArrowButton({ dark = false }: { dark?: boolean }) {
  return (
    <span
      className={
        "flex h-11 w-11 items-center justify-center rounded-full shadow-md transition-transform duration-300 hover:-translate-y-0.5 " +
        (dark ? "bg-black text-white" : "bg-white text-black")
      }
    >
      <FiArrowUpRight className="h-5 w-5" />
    </span>
  );
}

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className={(reverse ? "tech-marquee-reverse" : "tech-marquee") + " flex w-max"}>
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          className="flex shrink-0 items-center"
          aria-hidden={copy === 1 || undefined}
        >
          {[...TITLES, ...TITLES, ...TITLES].map((title, i) => (
            <li
              key={`${copy}-${title}-${i}`}
              className="mx-8 shrink-0 whitespace-nowrap text-5xl font-black leading-none tracking-tight text-black/20 sm:mx-12 sm:text-6xl lg:mx-16 lg:text-7xl"
            >
              {title}
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <>
      {/* Hero fills most of viewport — leave ~half a marquee line peeking */}
      <section className="h-[calc(100dvh-3.25rem)] px-5 pt-5 sm:h-[calc(100dvh-4.25rem)] sm:px-8 sm:pt-8 lg:h-[calc(100dvh-5.75rem)] lg:px-10 lg:pt-10">
        <div className="relative h-full min-h-0 w-full overflow-hidden rounded-[2rem] bg-[#1a3a5f] sm:rounded-[2.5rem]">
          {/* Animated color blobs — oversized so color fills edges */}
          <div className="absolute inset-0 z-0 blob-hue">
            <div className="blob blob-1 -left-[15%] -top-[20%] h-[75%] w-[70%] bg-[#1e3a5f]" />
            <div className="blob blob-2 left-[20%] -top-[15%] h-[70%] w-[65%] bg-[#2d1b4e]" />
            <div className="blob blob-3 -right-[15%] top-[5%] h-[80%] w-[70%] bg-[#0d4f4f]" />
            <div className="blob blob-4 left-[10%] top-[25%] h-[75%] w-[70%] bg-[#3b1d4a]" />
            <div className="blob blob-2 -left-[10%] -bottom-[20%] h-[60%] w-[55%] bg-[#1e3a5f]" />
          </div>

          {/* Title block */}
          <Reveal
            eager
            y={36}
            className="absolute left-5 top-[12%] z-10 sm:left-10 sm:top-[15%] lg:left-14"
          >
            <p className="mb-2 text-[10px] font-medium tracking-[0.35em] text-white/70 sm:mb-3 sm:text-sm">
              SOFTWARE ENGINEER
            </p>
            <h1 className="font-black uppercase leading-[0.88] tracking-tight text-white text-[9.5vw] md:text-[8vw]">
              Engineering
              <br />
              Digital
              <br />
              Solutions
            </h1>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-3 group text-white sm:mt-8 sm:gap-4"
            >
              <ArrowButton />
              <span className="font-semibold underline underline-offset-[6px] decoration-1 decoration-white/60">
                View My Work
              </span>
            </a>

            <div className="mt-5 flex gap-2 sm:mt-6 sm:gap-3">
              <div className="w-36 rounded-xl bg-white p-3 shadow-lg sm:w-44 sm:rounded-2xl sm:p-4 md:w-[clamp(11rem,14vw,16rem)] md:p-[clamp(0.875rem,1.2vw,1.25rem)]">
                <div className="flex items-start justify-between">
                  <span className="text-xl font-bold leading-none sm:text-2xl md:text-[clamp(1.5rem,2.2vw,2.5rem)]">
                    24+
                  </span>
                  <FiBox className="h-4 w-4 text-neutral-800 sm:h-5 sm:w-5 md:h-[clamp(1rem,1.4vw,1.5rem)] md:w-[clamp(1rem,1.4vw,1.5rem)]" />
                </div>
                <p className="mt-1 text-[9px] font-medium tracking-[0.15em] text-neutral-500 sm:text-[10px] md:text-[clamp(0.625rem,0.8vw,0.875rem)]">
                  PROJECTS COMPLETED
                </p>
              </div>
              <div className="w-36 rounded-xl bg-black p-3 text-white shadow-lg sm:w-44 sm:rounded-2xl sm:p-4 md:w-[clamp(11rem,14vw,16rem)] md:p-[clamp(0.875rem,1.2vw,1.25rem)]">
                <div className="flex items-start justify-between">
                  <span className="text-xl font-bold leading-none sm:text-2xl md:text-[clamp(1.5rem,2.2vw,2.5rem)]">
                    3+
                  </span>
                  <FiTrendingUp className="h-4 w-4 text-white/90 sm:h-5 sm:w-5 md:h-[clamp(1rem,1.4vw,1.5rem)] md:w-[clamp(1rem,1.4vw,1.5rem)]" />
                </div>
                <p className="mt-1 text-[9px] font-medium tracking-[0.15em] text-white/60 sm:text-[10px] md:text-[clamp(0.625rem,0.8vw,0.875rem)]">
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal
            eager
            delay={220}
            className="pointer-events-none absolute bottom-0 right-0 z-30 flex h-[62%] w-[88%] max-w-[420px] items-end justify-end sm:h-[78%] sm:w-auto sm:max-w-none lg:h-[85%]"
          >
            <div
              className="flex h-full w-full items-end justify-end"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 80%, rgba(0,0,0,0.65) 90%, transparent 100%)",
                maskImage:
                  "linear-gradient(to bottom, #000 80%, rgba(0,0,0,0.65) 90%, transparent 100%)",
              }}
            >
              <HeroPerson
                src="/hero.png?v=2"
                alt="Esteban Retana"
                className="h-full w-auto max-w-full select-none object-contain object-bottom"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Titles — top half peeks on load; rest below fold */}
      <section
        className="flex flex-col gap-2 overflow-hidden pt-3 pb-16 sm:gap-3 sm:pt-4 sm:pb-24 lg:gap-4 lg:pt-5 lg:pb-32"
        aria-label="Focus areas"
      >
        <MarqueeRow />
        <MarqueeRow reverse />
      </section>
    </>
  );
}
