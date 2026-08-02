import { Reveal, RevealStagger } from "../components/reveal";

export default function AtlasScreens() {
  return (
    <section className="bg-[#0b1420] py-24 text-white sm:py-32 lg:py-40">
      <div className="mb-12 flex flex-col gap-6 px-5 sm:mb-16 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <Reveal className="max-w-[36rem]">
          <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
            09 · INTERFACE
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            Clean. Fast.
            <span className="text-white/40"> Operator-first.</span>
          </h2>
        </Reveal>
        <p className="max-w-[22rem] text-sm leading-relaxed text-white/45 sm:text-base">
          Dashboard · Alarms · HVAC · Schedules · Devices. Status loud. Noise
          quiet.
        </p>
      </div>

      <RevealStagger
        step={140}
        className="grid grid-cols-1 gap-6 px-5 sm:gap-8 sm:px-8 lg:grid-cols-2 lg:px-10"
      >
        <figure className="reveal-child">
          <div className="overflow-hidden rounded-[1.25rem] bg-white sm:rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bms/home.png"
              alt="Atlas portfolio dashboard with building health overview"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">
            Portfolio dashboard · what needs attention
          </figcaption>
        </figure>
        <figure className="reveal-child">
          <div className="overflow-hidden rounded-[1.25rem] bg-white sm:rounded-[1.75rem]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bms/alarms.png"
              alt="Atlas alarms view with priority and acknowledgment workflow"
              className="h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">
            Alarms · real-time monitor & respond
          </figcaption>
        </figure>
      </RevealStagger>
    </section>
  );
}
