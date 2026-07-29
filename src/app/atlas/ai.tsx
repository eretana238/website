import { Reveal } from "../components/reveal";

const AI_POINTS = [
  "Equipment points & live values",
  "Alarm states & priorities",
  "Setpoints & schedules",
  "System relationships",
  "Equipment configuration",
  "Historical operational context",
];

export default function AtlasAi() {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="bg-[#0b1420] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40 xl:px-16">
        <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
          05 — AI LAYER
        </p>
        <Reveal>
          <h2 className="mt-5 text-[clamp(2.25rem,4.5vw,4rem)] font-black leading-[1.05] tracking-tight">
            Not a chatbot on a dashboard — an analytical layer over the BMS.
          </h2>
        </Reveal>
        <p className="mt-8 max-w-[28rem] text-base leading-relaxed text-white/55 sm:text-lg">
          Zone at 76.8°F, cooling setpoint 72°F, damper at 100% — Atlas can
          explain that the zone is above setpoint while already fully open,
          pointing investigation upstream.
        </p>
      </div>

      <div className="flex flex-col justify-center border-t border-neutral-200 bg-white px-5 py-16 sm:px-8 sm:py-24 lg:border-t-0 lg:border-l lg:px-12 lg:py-40 xl:px-16">
        <p className="mb-6 text-[10px] font-medium tracking-[0.3em] text-neutral-400 uppercase">
          Context fed to the model
        </p>
        <ul>
          {AI_POINTS.map((item) => (
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
