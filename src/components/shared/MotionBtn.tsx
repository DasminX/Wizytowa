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
      className={`${
        className ?? ""
      } transite-colors my-4 mx-auto py-3 px-6 bg-main-bg brightness-90 text-secondary-color font-semibold border-[0.0625rem] rounded-lg border-secondary-color hover:scale-105 hover:text-primary-color hover:border-primary-color`}
      whileHover={{ scale: 1.1 }}
      variants={variant}
      initial={initial}
      animate={animate}
    >
      {children}
    </motion.button>
  );
}
