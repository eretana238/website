import { RevealStagger } from "../components/reveal";

const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "Ambient presence shows who’s active nearby or farther out, without turning the app into a profile catalog.",
  },
  {
    n: "02",
    title: "Match",
    body: "Queue in. Connect. Distance, language, interests, preferences, and region all sit behind one simple action.",
  },
  {
    n: "03",
    title: "Talk",
    body: "WebRTC video with the person as the focus. Icebreakers stay light. Controls stay out of the way.",
  },
  {
    n: "04",
    title: "Keep",
    body: "Add friends. Message later. Temporary encounters become lasting connections when they’re worth it.",
  },
];

export default function VyloLoop() {
  return (
    <section className="bg-[#0a0a0a] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
      <div className="mb-16 flex flex-col gap-6 sm:mb-20 lg:mb-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[40rem]">
          <p className="text-[10px] font-medium tracking-[0.35em] text-white/40 sm:text-sm">
            02 · PRODUCT LOOP
          </p>
          <h2 className="mt-5 text-[clamp(2.5rem,5.5vw,4.75rem)] font-black leading-[1.02] tracking-tight">
            Discover → Match → Talk →{" "}
            <span className="text-white/45">Connect.</span>
          </h2>
        </div>
        <p className="max-w-[22rem] text-sm leading-relaxed text-white/50 sm:text-base">
          One lifecycle. Four surfaces. Complexity stays under the hood.
        </p>
      </div>

      <RevealStagger
        step={110}
        className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:rounded-[2rem]"
      >
        {STEPS.map(({ n, title, body }) => (
          <article
            key={title}
            className="reveal-child flex min-h-[280px] flex-col justify-between bg-[#0a0a0a] p-6 sm:min-h-[320px] sm:p-8"
          >
            <span className="text-[10px] font-medium tracking-[0.3em] text-white/35">
              {n}
            </span>
            <div>
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55 sm:text-base">
                {body}
              </p>
            </div>
          </article>
        ))}
      </RevealStagger>
    </section>
  );
}
