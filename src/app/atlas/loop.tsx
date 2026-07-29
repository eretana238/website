import { RevealStagger } from "../components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Portfolio",
    body: "Instant snapshot across buildings — alarms, comfort, status, weather, and AI insights in one view.",
  },
  {
    n: "02",
    title: "Building",
    body: "Dedicated operational views with floors, systems, and equipment organized the way operators think.",
  },
  {
    n: "03",
    title: "Equipment",
    body: "Focused AHU, VAV, and device views — temperatures, setpoints, commands, and alarms that matter.",
  },
  {
    n: "04",
    title: "Insight",
    body: "AI reads relationships between values so technicians know where to investigate first.",
  },
];

export default function AtlasLoop() {
  return (
    <section className="bg-[#0b1420] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mb-16 flex flex-col gap-6 sm:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[42rem]">
          <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
            02 — NAVIGATION MODEL
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            Portfolio → Building → System →{" "}
            <span className="text-white/45">Issue.</span>
          </h2>
        </div>
        <p className="max-w-[22rem] text-sm leading-relaxed text-white/50 sm:text-base">
          Progressive disclosure. Executives stay high. Technicians drill deep.
        </p>
      </div>

      <RevealStagger
        step={110}
        className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[2rem]"
      >
        {STEPS.map(({ n, title, body }) => (
          <article
            key={title}
            className="reveal-child flex min-h-[280px] flex-col justify-between bg-[#0b1420] p-6 sm:min-h-[320px] sm:p-8"
          >
            <span className="text-[10px] font-medium tracking-[0.3em] text-white/35">
              {n}
            </span>
            <div>
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                {body}
              </p>
            </div>
          </article>
        ))}
      </RevealStagger>
    </section>
  );
}
