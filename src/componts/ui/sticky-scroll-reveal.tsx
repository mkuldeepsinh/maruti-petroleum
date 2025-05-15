"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: Card[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({ container: ref, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const closest = breakpoints.reduce((prevIdx, bp, i) =>
      Math.abs(latest - bp) < Math.abs(latest - breakpoints[prevIdx]) ? i : prevIdx,
      0
    );
    setActiveCard(closest);
  });

  const backgroundColors = useMemo(() => ["#1c1917", "#0c4a6e"], []);

  // Memoize gradients to avoid re-creation
  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, #c2410c, #eab308)",
      "linear-gradient(to bottom right, #1e3a8a, #06b6d4)",
    ],
    []
  );

  const [background, setBackground] = useState(linearGradients[0]);

  useEffect(() => {
    setBackground(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      ref={ref}
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === idx ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === idx ? 1 : 0.3 }}
                className="mt-4 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block",
          contentClassName
        )}
      >
        {content[activeCard].content || null}
      </div>
    </motion.div>
  );
};
