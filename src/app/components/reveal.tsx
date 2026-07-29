"use client";

import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  eager?: boolean;
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  eager = false,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => setVisible(true);

    if (eager) {
      const frame = requestAnimationFrame(show);
      return () => cancelAnimationFrame(frame);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        show();
        io.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`reveal${visible ? " is-in" : ""}${className ? ` ${className}` : ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  step?: number;
  y?: number;
};

type StaggerChildProps = {
  className?: string;
  style?: CSSProperties;
};

export const RevealStagger = forwardRef<HTMLDivElement, RevealStaggerProps>(
  function RevealStagger(
    { children, className = "", delay = 0, step = 90, y = 24 },
    forwardedRef,
  ) {
    const localRef = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const el = localRef.current;
      if (!el) return;

      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          setVisible(true);
          io.disconnect();
        },
        { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
      );

      io.observe(el);
      return () => io.disconnect();
    }, []);

    const setRefs = (node: HTMLDivElement | null) => {
      localRef.current = node;
      if (typeof forwardedRef === "function") forwardedRef(node);
      else if (forwardedRef) forwardedRef.current = node;
    };

    const style = {
      "--reveal-delay": `${delay}ms`,
      "--reveal-step": `${step}ms`,
      "--reveal-y": `${y}px`,
    } as CSSProperties;

    return (
      <div
        ref={setRefs}
        className={`reveal-stagger${visible ? " is-in" : ""}${className ? ` ${className}` : ""}`}
        style={style}
      >
        {Children.map(children, (child, i) => {
          if (!isValidElement(child)) return child;
          const el = child as ReactElement<StaggerChildProps>;
          const prev = el.props.className ?? "";
          return cloneElement(el, {
            className: prev.includes("reveal-child")
              ? prev
              : `${prev} reveal-child`.trim(),
            style: {
              ...el.props.style,
              "--i": i,
            } as CSSProperties,
          });
        })}
      </div>
    );
  },
);
