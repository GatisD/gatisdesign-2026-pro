import { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

interface Props {
  children: ReactNode;
  className?: string;
  // duration in seconds for one full loop
  duration?: number;
}

export default function Marquee({ children, className, duration = 40 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={{ overflow: "hidden" }}>
        <div className="flex gap-12">{children}</div>
      </div>
    );
  }

  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{
          animation: `marquee ${duration}s linear infinite`,
          width: "max-content",
        }}
      >
        <div className="flex gap-12 shrink-0">{children}</div>
        <div className="flex gap-12 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
