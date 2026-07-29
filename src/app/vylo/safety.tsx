import { Reveal } from "../components/reveal";

const SAFEGUARDS = [
  "Facial age estimation",
  "Liveness verification",
  "Moderation controls",
  "Report & block",
  "Privacy-conscious location",
  "Local · Nearby · Anywhere",
];

export default function VyloSafety() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-[#0a0a0a] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40 xl:px-16">
        <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
          05 — SAFETY
        </p>
        <Reveal>
          <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,4rem)] font-black leading-[1.05] tracking-tight">
            Safety as architecture — not an afterthought.
          </h2>
        </Reveal>
        <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-white/55 sm:text-lg">
          Precise locations never appear in discovery. Location is a matching
          signal, not a public pin. Spontaneity stays. Risk drops.
        </p>
      </div>

      <div className="flex flex-col justify-center border-t border-neutral-200 bg-white px-5 py-16 sm:px-8 sm:py-24 lg:border-t-0 lg:border-l lg:px-12 lg:py-40 xl:px-16">
        <ul>
          {SAFEGUARDS.map((item) => (
            <li
              key={item}
              className="border-b border-neutral-200 py-5 text-lg font-semibold tracking-tight text-black first:border-t sm:text-xl lg:text-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
