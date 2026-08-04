"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "up" | "left" | "right" | "none";

type RevealProps = {
  children: React.ReactNode;
  /** Stagger index: 90ms per step, capped so late items never feel stalled. */
  index?: number;
  direction?: Direction;
  /** Render as a span when the parent only allows phrasing content (e.g. inside h1). */
  as?: "div" | "span";
  className?: string;
};

const offsets: Record<Direction, { x: string; y: string }> = {
  up: { x: "0", y: "2rem" },
  left: { x: "-2rem", y: "0" },
  right: { x: "2rem", y: "0" },
  none: { x: "0", y: "0" },
};

export default function Reveal({
  children,
  index = 0,
  direction = "up",
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { x, y } = offsets[direction];

  return (
    <Tag
      ref={ref as React.Ref<HTMLDivElement & HTMLSpanElement>}
      className={`reveal ${shown ? "reveal-in" : ""} ${className ?? ""}`}
      style={
        {
          "--reveal-x": x,
          "--reveal-y": y,
          "--reveal-delay": `${Math.min(index, 6) * 90}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Tag>
  );
}
