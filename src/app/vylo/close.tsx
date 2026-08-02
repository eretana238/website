import { Reveal } from "../components/reveal";

const ROLE = [
  "Product strategy",
  "UX & UI design",
  "iOS architecture",
  "Rust backend",
  "REST & WebSockets",
  "PostgreSQL modeling",
  "WebRTC media",
  "Matchmaking design",
  "Auth & identity",
  "Safety concepts",
  "Cloud planning",
  "End-to-end systems",
];

export default function VyloClose() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-20">
        <Reveal>
          <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
            09 · ROLE & OUTCOME
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            One product.
            <span className="text-[#a3a0ad]"> One system.</span>
          </h2>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-neutral-600 sm:text-xl">
            Designed and built end-to-end, with product decisions feeding architecture
            directly. Not screens bolted onto an API. A complete real-time
            consumer system.
          </p>
          <p className="mt-6 max-w-[34rem] text-base leading-relaxed text-neutral-500 sm:text-lg">
            Vylo explores what social looks like when presence comes before
            profiles: find someone available right now, and start talking.
          </p>
        </Reveal>

        <ul className="columns-1 gap-x-8 sm:columns-2 lg:pt-12">
          {ROLE.map((item) => (
            <li
              key={item}
              className="break-inside-avoid border-t border-neutral-200 py-3 text-sm font-medium text-neutral-700 sm:text-base"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <Reveal delay={80}>
        <p className="mt-20 overflow-hidden text-[clamp(3rem,12vw,10rem)] font-black uppercase leading-[0.85] tracking-tight text-neutral-100 sm:mt-28 lg:mt-32">
          Presence first
        </p>
      </Reveal>
    </section>
  );
}
