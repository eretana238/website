import { Reveal } from "../components/reveal";

export default function AtlasBridge() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <Reveal className="mb-14 max-w-[44rem] sm:mb-16 lg:mb-20">
        <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
          06 · OT ↔ CLOUD
        </p>
        <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
          Niagara stays in control.
          <span className="text-[#a3a0ad]"> Atlas sits above it.</span>
        </h2>
      </Reveal>

      <p className="mb-12 max-w-[36rem] text-base leading-relaxed text-neutral-600 sm:mb-16 sm:text-lg lg:text-xl">
        Custom Java modules form a controlled bridge, translating equipment,
        points, alarms, and schedules into a format the cloud platform
        understands without exposing controllers to the public internet.
      </p>

      <p className="overflow-hidden text-[clamp(1.25rem,3.5vw,2.75rem)] font-black leading-[1.15] tracking-tight text-neutral-300">
        Building Automation → Niagara → Java Modules → Cloud → Atlas
      </p>
    </section>
  );
}
