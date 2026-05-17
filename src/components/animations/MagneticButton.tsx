import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  strength?: number;
  onClick?: () => void;
}

export default function MagneticButton({
  children,
  className,
  href,
  strength = 0.35,
  onClick,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 240, damping: 18 });
  const springY = useSpring(y, { stiffness: 240, damping: 18 });

  function handleMove(e: React.MouseEvent) {
    if (!ref.current || reduce) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className="inline-block" onClick={onClick}>
      {content}
    </button>
  );
}
