import { Reveal } from "../components/reveal";

const LAYERS = [
  {
    title: "Next.js + React",
    stack: "Web UI",
    body: "Responsive operator app across desktop, tablet, and mobile — shared design language for dashboards, alarms, and equipment.",
  },
  {
    title: "PostgreSQL",
    stack: "Data model",
    body: "Organizations, buildings, systems, equipment, devices, users, and operational metadata in a relational hierarchy.",
  },
  {
    title: "Java / Niagara",
    stack: "OT integration",
    body: "Custom Niagara 4 modules expose building data while keeping the operational network separated from the cloud.",
  },
  {
    title: "AWS",
    stack: "Cloud infra",
    body: "Centralized building intelligence with secure remote access — no direct public exposure of BMS interfaces.",
  },
  {
    title: "AI Layer",
    stack: "LLM context",
    body: "Summaries, anomaly surfacing, and troubleshooting assistance grounded in real equipment relationships.",
  },
  {
    title: "Security Boundary",
    stack: "OT mindset",
    body: "Controlled integration edge between building systems and cloud services — remote intelligence, isolated control.",
  },
];

export default function AtlasArchitecture() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <Reveal className="mb-14 max-w-[40rem] sm:mb-16 lg:mb-20">
        <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
          07 — SYSTEM
        </p>
        <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
          Full-stack cloud platform
          <span className="text-[#a3a0ad]"> on industrial roots.</span>
        </h2>
      </Reveal>

      <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {LAYERS.map(({ title, stack, body }, i) => (
          <article
            key={title}
            className="border-t border-neutral-200 py-8 sm:py-10"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                {title}
              </h3>
              <span className="text-[10px] font-medium tracking-[0.25em] text-neutral-400">
                0{i + 1}
              </span>
            </div>
            <p className="mt-2 text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
              {stack}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 sm:text-base">
              {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
