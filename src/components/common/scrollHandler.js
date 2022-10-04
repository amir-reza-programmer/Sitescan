const scrollUp = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const scrollDown = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

const scrollHandler = (location = "top") => {
  if (location === "top") {
    scrollUp();
  } else if (location === "bottom") {
    scrollDown();
  }
};

export default scrollHandler;
