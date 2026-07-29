import { FiArrowUpRight, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Reveal } from "./reveal";

const RESUME_URL =
  "https://drive.google.com/file/d/1zplLiCUbvoDfEjY49bP7XITsr3juV6lH/view?usp=sharing";

const LINKS = [
  {
    href: "mailto:eretana238@gmail.com",
    title: "eretana238@gmail.com",
    subtitle: "Send me an email",
    Icon: FiMail,
    external: false,
  },
  {
    href: "https://www.linkedin.com/in/esteban-retana-98a6b6174/",
    title: "LinkedIn",
    subtitle: "/in/esteban-retana-98a6b6174/",
    Icon: FaLinkedinIn,
    external: true,
  },
  {
    href: "https://github.com/eretana238",
    title: "GitHub",
    subtitle: "/eretana238",
    Icon: FaGithub,
    external: true,
  },
  {
    href: RESUME_URL,
    title: "Download Resume",
    subtitle: "Get a copy (PDF)",
    Icon: FiArrowUpRight,
    external: true,
  },
];

export default function Cta() {
  return (
    <section
      id="contact"
      className="relative overflow-x-clip overflow-y-visible px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-[min(40%,26rem)] lg:block xl:w-[min(38%,28rem)]">
        <div className="absolute inset-0 blob-hue">
          <div className="blob cta-blob blob-1 left-1/2 top-[18%] h-[58%] w-[70%] -translate-x-1/2 bg-[#7c6cff]" />
          <div className="blob cta-blob blob-2 left-[42%] top-[28%] h-[52%] w-[62%] bg-[#a78bfa]" />
          <div className="blob cta-blob blob-3 left-[48%] top-[38%] h-[48%] w-[58%] bg-[#60a5fa]" />
        </div>

        <a
          href="mailto:eretana238@gmail.com"
          aria-label="Get in touch"
          className="pointer-events-auto absolute left-1/2 top-1/2 z-20 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center xl:h-64 xl:w-64"
        >
          <span className="orbit-spin-slow absolute inset-[2%]">
            <span className="absolute inset-0 rounded-full border border-white/70" />
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-sm" />
          </span>
          <span className="orbit-spin absolute inset-[10%]">
            <span className="absolute inset-0 rounded-full border border-white/55" />
            <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/95" />
          </span>
          <span className="orbit-spin-reverse absolute inset-[18%]">
            <span className="absolute inset-0 rounded-full border border-white/40" />
            <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85" />
          </span>

          <span className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform duration-300 hover:-translate-y-1 xl:h-40 xl:w-40">
            <FiArrowUpRight className="h-12 w-12 xl:h-14 xl:w-14" strokeWidth={1.5} />
          </span>
        </a>
      </div>

      <div className="relative z-10 lg:pr-[min(42%,28rem)] xl:pr-[min(40%,30rem)]">
        <div className="min-w-0">
          <p className="mb-5 text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:mb-6 sm:text-sm">
            LET&apos;S WORK TOGETHER
          </p>

          <Reveal>
            <h2 className="max-w-[1200px] text-[clamp(2.75rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tight text-black">
              Have something great in mind?{" "}
              <span className="text-[#a3a0ad]">Let&apos;s build it.</span>
            </h2>
          </Reveal>

          <p className="mt-5 max-w-[540px] text-base leading-relaxed text-neutral-500 sm:mt-6 sm:text-lg">
            I&apos;m always open to discussing new ideas, challenging problems, and
            impactful projects. Let&apos;s create something exceptional.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5 sm:mt-10 sm:gap-7">
            <a
              href="mailto:eretana238@gmail.com"
              className="inline-flex items-center gap-4 rounded-full bg-black py-2.5 pl-6 pr-2.5 text-white shadow-[0_0_24px_rgba(96,165,250,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="text-sm font-semibold sm:text-base">
                Let&apos;s Work Together
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
                <FiArrowUpRight className="h-5 w-5" />
              </span>
            </a>

            <a
              href="/#projects"
              className="inline-flex items-center gap-2 font-semibold text-black underline decoration-neutral-300 underline-offset-[6px] transition-colors hover:decoration-black"
            >
              View My Work
              <FiArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 border-t border-neutral-200/80 pt-8 sm:mt-16 sm:grid-cols-2 sm:gap-0 lg:grid-cols-4">
            {LINKS.map(({ href, title, subtitle, Icon, external }, i) => (
              <a
                key={title}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={
                  "group flex items-center gap-3 py-1 sm:px-4 " +
                  (i > 0 ? "sm:border-l sm:border-neutral-200" : "")
                }
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-neutral-200 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-5 w-5 text-neutral-800" />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-bold text-black">
                    {title}
                  </span>
                  <span className="block truncate text-xs text-neutral-500">
                    {subtitle}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
