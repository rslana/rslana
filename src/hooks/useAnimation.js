import animate from "../helpers/animation.ts";

export default function useAnimation() {
  document.querySelectorAll("*[data-animation]").forEach((element) => {
    animate(element, getOffsetSize(element.scrollHeight, 50));
  });
}

function getOffsetSize(size, percentage) {
  return size * (percentage / 100);
}
