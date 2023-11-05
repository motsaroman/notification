export const animationNotification = {
    hidden: {
      x: 400,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 2 },
    }),
  };