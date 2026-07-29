import { RevealStagger } from "../components/reveal";

const PILLARS = [
  {
    title: "Live Discovery",
    copy: "Activity over static profiles. The network feels alive before the first conversation starts.",
  },
  {
    title: "Intelligent Matchmaking",
    copy: "Preferences and constraints evaluated in real time — without exposing the machinery to the user.",
  },
  {
    title: "Real-Time Video",
    copy: "WebRTC at the center. Remote participant owns the screen. Controls stay secondary.",
  },
  {
    title: "Friends & Messaging",
    copy: "A good call doesn’t have to disappear. Persist the people worth knowing.",
  },
];

export default function VyloPillars() {
  return (
    <section className="border-y border-neutral-200 px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
      <div className="mb-10 sm:mb-14">
        <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
          04 — CORE EXPERIENCE
        </p>
        <h2 className="mt-4 text-[clamp(2rem,4.5vw,3.75rem)] font-black tracking-tight">
          Four surfaces
        </h2>
      </div>

      <RevealStagger
        step={100}
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-8"
      >
        {PILLARS.map(({ title, copy }, i) => (
          <article
            key={title}
            className="reveal-child border-t-2 border-black pt-6"
          >
            <span className="text-5xl font-black leading-none tracking-tight text-neutral-200 sm:text-6xl lg:text-7xl">
              0{i + 1}
            </span>
            <h3 className="mt-5 text-xl font-black tracking-tight sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-500 sm:text-base">
              {copy}
            </p>
          </article>
        ))}
      </RevealStagger>
    </section>
  );
}
