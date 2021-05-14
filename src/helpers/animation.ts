export default function animate(element: HTMLElement, offset = 150) {
  const elementHeight = element.clientHeight;

  document.addEventListener("scroll", animate);

  function inView() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY || window.pageYOffset;

    const scrollPosition = scrollY + windowHeight;

    const elementPosition =
      element.getBoundingClientRect().top + scrollY + elementHeight;

    if (scrollPosition > elementPosition - offset) {
      return true;
    }

    return false;
  }

  function animate() {
    if (!element.classList.contains("_animate")) {
      if (inView()) {
        // element is in view, add class to element
        element.classList.remove("_hidden");
        element.classList.add("_animate");
      } else {
        element.classList.add("_hidden");
      }
    }
  }
}
