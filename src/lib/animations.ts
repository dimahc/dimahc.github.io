import { Variants } from "framer-motion";
import { ANIMATION_DURATION, STAGGER_DELAY } from "./constants";

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
};

export const scaleOnHover = {
  scale: 1.1,
};

export const scaleOnHoverSmall = {
  scale: 1.05,
};

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: STAGGER_DELAY.items,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export const getTransition = (
  delay = 0,
  duration = ANIMATION_DURATION.normal
) => ({
  duration,
  delay,
});

export const getStaggeredTransition = (
  index: number,
  baseDelay = 0,
  staggerDelay = STAGGER_DELAY.items
) => ({
  duration: ANIMATION_DURATION.normal,
  delay: baseDelay + index * staggerDelay,
});
