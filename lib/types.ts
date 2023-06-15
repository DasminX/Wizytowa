import { Variants } from "framer-motion";
import { ReactNode } from "react";

export interface MotionAnimateVariantProps {
  className?: string;
  children: ReactNode;
  variant?: Variants | undefined;
  initial?: string | undefined;
  animate?: string | undefined;
}

export interface MotionButtonProps extends MotionAnimateVariantProps {
  onClick?: () => void;
}
