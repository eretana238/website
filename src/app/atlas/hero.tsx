import { FiArrowDown } from "react-icons/fi";
import { Reveal } from "../components/reveal";

const META = [
  { label: "Role", value: "End-to-End" },
  { label: "Platform", value: "Web · Cloud · OT" },
  { label: "Stack", value: "Next.js · Niagara · AWS" },
  { label: "Focus", value: "AI · Operations" },
];

export default function AtlasHero() {
  return (
    <header className="relative min-h-dvh overflow-hidden bg-[#0b1420] text-white">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/bms/home.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,transparent_0%,rgba(11,20,32,0.5)_40%,rgba(11,20,32,0.96)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0b1420] via-transparent to-[#0b1420]/50"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-dvh flex-col justify-between px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:px-10 lg:pb-12">
        <div>
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-medium tracking-[0.35em] text-white/55 sm:text-xs">
            <a href="/" className="transition-colors hover:text-white">
              HOME
            </a>
            <span aria-hidden>/</span>
            <span>CASE STUDY</span>
            <span aria-hidden>/</span>
            <span className="text-white">ATLAS</span>
          </div>

          <Reveal eager>
            <h1 className="mt-8 font-black uppercase leading-[0.82] tracking-tight text-[18vw] sm:mt-10 sm:text-[14vw] lg:text-[11vw]">
              Atlas
            </h1>
          </Reveal>

          <Reveal eager delay={200}>
            <p className="mt-4 max-w-[32rem] text-lg leading-snug text-white/75 sm:mt-6 sm:text-xl lg:text-2xl">
              AI-powered building intelligence. Turn complex BMS data into
              clear, actionable insight.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-4">
            {META.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[10px] font-medium tracking-[0.3em] text-white/40 uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white sm:text-base">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href="#brief"
            className="inline-flex items-center gap-3 self-start text-white/70 transition-colors hover:text-white"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25">
              <FiArrowDown className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-medium tracking-[0.3em]">
              SCROLL
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
