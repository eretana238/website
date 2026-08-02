import { Reveal } from "../components/reveal";

const CHALLENGES = [
  {
    n: "01",
    title: "Bridging OT and cloud",
    body: "Translate points, devices, schedules, and alarms into structures a SaaS app can consume, without fighting how Niagara actually works.",
  },
  {
    n: "02",
    title: "Modeling buildings",
    body: "Organizations → buildings → systems → equipment → thousands of points. Hierarchical, queryable, navigable.",
  },
  {
    n: "03",
    title: "Making AI understand a building",
    body: "An LLM isn’t useful on isolated sensor values. Context like relationships, setpoints, alarms, and schedules is the real product.",
  },
  {
    n: "04",
    title: "Deciding what not to show",
    body: "Traditional BMS exposes everything. Atlas prioritizes operational importance and reveals depth only when needed.",
  },
];

export default function AtlasChallenges() {
  return (
    <section className="bg-neutral-50 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <Reveal>
        <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
          08 · ENGINEERING
        </p>
        <h2 className="mt-5 max-w-[36rem] text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
          Hard problems.
          <span className="text-[#a3a0ad]"> Clear surface.</span>
        </h2>
      </Reveal>

      <ol className="mt-16 space-y-0 sm:mt-20">
        {CHALLENGES.map(({ n, title, body }) => (
          <li
            key={n}
            className="grid gap-4 border-t border-neutral-300 py-10 sm:grid-cols-[5rem_minmax(0,0.9fr)_minmax(0,1.2fr)] sm:gap-8 sm:py-12 lg:gap-12"
          >
            <span className="text-sm font-medium tracking-[0.2em] text-neutral-400">
              {n}
            </span>
            <h3 className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            <p className="max-w-[32rem] text-base leading-relaxed text-neutral-500 sm:text-lg">
              {body}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
