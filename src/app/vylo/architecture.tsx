import { Reveal } from "../components/reveal";

const LAYERS = [
  { title: "iOS Client", stack: "Swift · Native", body: "Video, discovery, messaging, notifications, accounts." },
  { title: "Rust Backend", stack: "APIs · Auth", body: "Matchmaking, presence, social graph, messaging." },
  { title: "PostgreSQL", stack: "Durable state", body: "Users, interests, friendships, conversations." },
  { title: "WebSockets", stack: "Live events", body: "Presence sync, queue events, message updates." },
  { title: "WebRTC", stack: "P2P media", body: "Live video with STUN/TURN fallback." },
  { title: "Push", stack: "Re-engage", body: "Messages and social activity outside the app." },
];

export default function VyloArchitecture() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <Reveal className="mb-14 max-w-[40rem] sm:mb-16 lg:mb-20">
        <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
          06 · SYSTEM
        </p>
        <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
          Real-time system.
          <span className="text-[#a3a0ad]"> Not CRUD dressed up.</span>
        </h2>
      </Reveal>

      <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
        {LAYERS.map(({ title, stack, body }, i) => (
          <article key={title} className="border-t border-neutral-200 py-8 sm:py-10">
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
