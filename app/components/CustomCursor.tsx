"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Dot: tight follow
  const dotX = useSpring(rawX, { stiffness: 900, damping: 40, mass: 0.3 });
  const dotY = useSpring(rawY, { stiffness: 900, damping: 40, mass: 0.3 });

  // Glow blob: slow, lagging
  const blobX = useSpring(rawX, { stiffness: 80, damping: 22, mass: 1 });
  const blobY = useSpring(rawY, { stiffness: 80, damping: 22, mass: 1 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) setHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onEnter);
    window.addEventListener("mouseout", onLeave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
    };
  }, [rawX, rawY]);

  if (!mounted) return null;

  return (
    <>
      {/* Glow blob */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: blobX,
          y: blobY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 280 : 200,
          height: hovering ? 280 : 200,
          background: "var(--cursor-glow)",
          opacity: hovering ? 1 : 0.9,
          transition: "width 0.4s ease, height 0.4s ease",
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          borderColor: "var(--accent)",
          opacity: hovering ? 1 : "var(--cursor-ring-opacity)",
          transition: "width 0.25s ease, height 0.25s ease, opacity 0.2s ease",
        }}
      />

      {/* Center dot */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          background: "var(--accent)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
