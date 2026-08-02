import { Reveal } from "../components/reveal";

export default function AtlasBrief() {
  return (
    <section
      id="brief"
      className="border-b border-neutral-200 px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 xl:gap-28">
        <Reveal>
          <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
            01 · BRIEF
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            Buildings generate the data.
            <span className="text-[#a3a0ad]"> Operators need understanding.</span>
          </h2>
        </Reveal>

        <div className="flex flex-col justify-end gap-8 lg:pt-16">
          <p className="max-w-[34rem] text-lg leading-relaxed text-neutral-600 sm:text-xl lg:text-2xl">
            Traditional BMS interfaces are built around point trees and
            engineering workflows, not answering “what needs attention?” across
            a portfolio.
          </p>
          <p className="max-w-[34rem] text-base leading-relaxed text-neutral-500 sm:text-lg">
            Thousands of HVAC points, alarms, setpoints, and schedules. Access
            isn’t the hard part. Clarity is. Atlas puts a modern intelligence
            layer on top of existing automation infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}
