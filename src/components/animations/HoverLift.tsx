import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export default function HoverLift({ children, className, href, onClick }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    if (href) {
      return (
        <a href={href} className={className}>
          {children}
        </a>
      );
    }
    return (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    );
  }

  const motionProps = {
    className,
    whileHover: { y: -8 },
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  };

  if (href) {
    return (
      <motion.a href={href} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div onClick={onClick} {...motionProps}>
      {children}
    </motion.div>
  );
}
