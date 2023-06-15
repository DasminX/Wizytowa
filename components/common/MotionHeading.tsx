"use client";

import { MotionAnimateVariantProps } from "@/lib/types";
import { motion } from "framer-motion";

export default function MotionHeading({
  className,
  children,
  variant,
  initial,
  animate,
}: MotionAnimateVariantProps) {
  return (
    <motion.h2
      initial={initial}
      animate={animate}
      variants={variant}
      className={className}
    >
      {children}
    </motion.h2>
  );
}
