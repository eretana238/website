import { FaAws } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { Reveal } from "./reveal";

const EXPERIENCES = [
  {
    company: "Freelance Developer",
    role: null,
    period: "2026 — Present",
    tags: ["AI", "Automation", "Full-Stack & Cloud", "Mobile"],
    description:
      "Designing and shipping end-to-end products for clients — from AI-assisted workflows and automation pipelines to full-stack web apps, cloud infra, and mobile experiences. Focused on rapid delivery without sacrificing architecture or quality.",
  },
  {
    company: "Applied BAS, LLC",
    role: "Niagara Developer / Software Engineer",
    period: "2023 — Present",
    tags: ["Niagara", "AWS", "Dashboards", "ETL"],
    description:
      "Building custom Niagara Framework modules, internal tools, and operational dashboards that streamline facility workflows. Improving business operations through automation, data pipelines, and cloud-hosted services that keep multi-site systems running smoothly.",
  },
  {
    company: "Project AVERT",
    role: "Secure Activity Monitoring System · UTEP & DEVCOM Sponsored Project",
    period: "Spring 2021 — Fall 2021",
    tags: ["Security", "Logging", "Research"],
    description:
      "Developed software tooling for background logging processes in a secure activity monitoring system. Collaborated with university and DEVCOM sponsors to capture, process, and surface operational telemetry for research and defense use cases.",
  },
];

const BADGES = [
  {
    label: "Education",
    title: "B.S. Computer Science",
    detail: "The University of Texas at El Paso · Graduated Fall 2021",
    Icon: HiOutlineAcademicCap,
    iconClass: "text-black",
  },
  {
    label: "Certification",
    title: "AWS Solutions Architect — Associate",
    detail: "Amazon Web Services Certified",
    Icon: FaAws,
    iconClass: "text-[#FF9900]",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-10 lg:pb-32 lg:pt-48"
    >
      <div className="w-full">
        <Reveal>
          <p className="mb-4 text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:mb-6 sm:text-sm">
            EXPERIENCE
          </p>
          <h2 className="mb-10 max-w-[1200px] text-[clamp(2.75rem,7vw,6.5rem)] font-black leading-[1.05] tracking-tight sm:mb-12 lg:mb-14">
            Building intelligent solutions that drive real-world{" "}
            <span className="text-[#a3a0ad]">Impact.</span>
          </h2>
        </Reveal>

        <div className="mb-14 flex flex-col gap-3 sm:mb-16 sm:flex-row sm:flex-wrap sm:gap-4 lg:mb-20">
          {BADGES.map(({ label, title, detail, Icon, iconClass }) => (
            <div
              key={label}
              className="inline-flex max-w-full items-center gap-4 rounded-full border border-neutral-200 bg-neutral-50 py-3 pl-3 pr-6 sm:pr-8"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-neutral-200">
                <Icon className={`h-6 w-6 ${iconClass}`} aria-hidden />
              </span>
              <div className="min-w-0">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-neutral-400 uppercase">
                  {label}
                </p>
                <p className="truncate text-sm font-bold text-black sm:text-base">
                  {title}
                </p>
                <p className="truncate text-xs text-neutral-500 sm:text-sm">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ol className="relative">
          {EXPERIENCES.map((job, i) => (
            <li
              key={job.company}
              className="relative grid gap-6 border-t border-neutral-200 py-10 last:pb-0 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] sm:gap-10 sm:py-14 lg:gap-16 lg:py-16"
            >
              <div className="pointer-events-none absolute left-0 top-0 hidden h-full sm:block">
                <span
                  className={
                    "absolute -top-px left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-black " +
                    (i === 0 ? "bg-black" : "bg-white")
                  }
                />
                {i < EXPERIENCES.length - 1 && (
                  <span className="absolute left-0 top-3 h-[calc(100%+3.5rem)] w-px -translate-x-1/2 bg-neutral-200 lg:h-[calc(100%+4rem)]" />
                )}
              </div>

              <div className="sm:pl-8 lg:pl-12">
                <p className="text-sm font-medium tracking-wide text-neutral-400 sm:text-base">
                  {job.period}
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-black sm:text-3xl lg:text-4xl">
                  {job.company}
                </h3>
                {job.role && (
                  <p className="mt-2 text-sm font-medium text-neutral-500 sm:text-base">
                    {job.role}
                  </p>
                )}
                {job.tags.length > 0 && (
                  <p className="mt-4 text-[10px] font-semibold tracking-[0.15em] text-neutral-500 uppercase sm:text-xs">
                    {job.tags.join("  /  ")}
                  </p>
                )}
              </div>

              <p className="max-w-[560px] text-base leading-relaxed text-neutral-600 sm:pt-1 sm:text-lg lg:text-xl">
                {job.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
