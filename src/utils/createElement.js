const createElement = (element, className) => {
  const el = document.createElement(element);

  if (className && className.trim() !== "") {
    el.classList.add(className);
  }

  return el;
};

export default createElement;
