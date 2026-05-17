import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: string;
  delay?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({
  children,
  delay = 0,
  className,
  as = "h1",
}: Props) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) {
    return <Tag className={className}>{children}</Tag>;
  }

  const words = children.split(" ");

  return (
    <Tag className={className}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
          style={{ marginRight: "0.25em" }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
