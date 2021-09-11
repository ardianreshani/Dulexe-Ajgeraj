export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 0.65,
      when: "afterChildren",
    },
  },
};
export const LogoAnimate = {
  hidden: { x: 100 },
  show: { x: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { ease: "easeOut", duration: 0.75 },
  },
};
