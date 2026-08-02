import { Reveal } from "../components/reveal";

export default function VyloVision() {
  return (
    <section className="relative overflow-hidden px-5 py-28 sm:px-8 sm:py-36 lg:px-10 lg:py-44">
      <p className="text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:text-sm">
        03 · VISION
      </p>
      <Reveal className="mt-8 max-w-[1100px]">
        <blockquote>
          <p className="text-[clamp(2.25rem,6vw,5.5rem)] font-black leading-[1.05] tracking-tight text-black">
            “See who&apos;s around.
            <br />
            Connect instantly.
            <br />
            <span className="text-[#a3a0ad]">Keep the people worth knowing.”</span>
          </p>
        </blockquote>
      </Reveal>
      <p className="mt-10 max-w-[28rem] text-base leading-relaxed text-neutral-500 sm:mt-12 sm:text-lg">
        Not another feed. An ambient network that feels alive, then a path from
        a spontaneous call to a lasting connection.
      </p>
    </section>
  );
}
