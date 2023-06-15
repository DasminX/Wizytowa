import { motion } from "framer-motion";
import { MotionButtonProps } from "@/lib/types";

export default function MotionBtn({
  children,
  onClick,
  className,
  variant,
  initial,
  animate,
}: MotionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`${className ?? ""} motion-btn`}
      whileHover={{ scale: 1.1 }}
      variants={variant}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.button>
  );
}
