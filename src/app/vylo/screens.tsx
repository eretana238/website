import { Reveal, RevealStagger } from "../components/reveal";

export default function VyloScreens() {
  return (
    <section className="bg-[#05070f] py-24 text-white sm:py-32 lg:py-40">
      <div className="mb-12 flex flex-col gap-6 px-5 sm:mb-16 sm:px-8 lg:mb-20 lg:flex-row lg:items-end lg:justify-between lg:px-10">
        <Reveal className="max-w-[36rem]">
          <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
            08 — INTERFACE
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            Minimal. Native.
            <span className="text-white/40"> People first.</span>
          </h2>
        </Reveal>
        <p className="max-w-[22rem] text-sm leading-relaxed text-white/45 sm:text-base">
          Discover · Video · Messages · Notifications · Profile. Content stays
          loud. Chrome stays quiet.
        </p>
      </div>

      <RevealStagger
        step={140}
        className="grid grid-cols-1 gap-6 px-5 sm:gap-8 sm:px-8 lg:grid-cols-2 lg:px-10"
      >
        <figure className="reveal-child overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vylo/banner.png"
            alt="Vylo live video matching experience"
            className="h-auto w-full"
          />
          <figcaption className="mt-4 text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">
            Live matching — presence & video
          </figcaption>
        </figure>
        <figure className="reveal-child overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vylo/pages.png"
            alt="Vylo notifications, profile, and chat screens"
            className="h-auto w-full bg-black"
          />
          <figcaption className="mt-4 text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase">
            Notifications · Profile · Chat
          </figcaption>
        </figure>
      </RevealStagger>
    </section>
  );
}
