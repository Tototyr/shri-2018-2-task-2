export const scrollList = (element) => {
  let currentTime = 0,
      duration = 200,
      increment = 20;

  const animateScroll = () => {
    currentTime += increment;
    element.scrollTop += 20;

    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
};