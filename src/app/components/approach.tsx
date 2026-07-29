"use client";

import { useEffect, useRef, useState } from "react";
import { FiArrowDown } from "react-icons/fi";

// Words wrapped in [] stay gray permanently
const SENTENCE =
  "I approach problems as a solutions architect, leveraging the [latest] [in] [AI] and modern tech to build high-quality solutions in tight [deadlines.]";

const WORDS = SENTENCE.split(" ").map((raw) => {
  const accent = raw.startsWith("[");
  return { text: raw.replace(/[[\]]/g, ""), accent };
});

export default function Approach() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(1);
        return;
      }
      const p = Math.min(1, Math.max(0, -rect.top / scrollable));
      setProgress(p);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const revealed = Math.floor(progress * WORDS.length);

  return (
    <section id="approach" ref={sectionRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-dvh flex-col justify-between px-5 py-10 sm:px-8 sm:py-14 lg:px-10">
        <div className="flex flex-1 flex-col justify-center">
          <p className="mb-4 text-[10px] font-medium tracking-[0.35em] text-neutral-400 sm:mb-6 sm:text-sm">
            MY APPROACH
          </p>
          <p className="w-full text-[clamp(2.75rem,7.5vw,7.5rem)] font-black leading-[1.05] tracking-tight">
            {WORDS.map(({ text, accent }, i) => (
              <span
                key={i}
                className="transition-colors duration-500"
                style={{
                  color: accent
                    ? "#a3a0ad"
                    : i < revealed
                      ? "#0a0a0a"
                      : "#d4d4d8",
                }}
              >
                {text}
                {i < WORDS.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-500">
            <FiArrowDown className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-medium tracking-[0.3em] text-neutral-400 sm:text-xs">
            SCROLL TO EXPLORE
          </span>
        </div>
      </div>
    </section>
  );
}
