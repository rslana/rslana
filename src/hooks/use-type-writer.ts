import { useEffect } from "react";

export const useTypeWriter = (props: {
  word: string;
  ref: React.MutableRefObject<HTMLElement>;
  speed: number;
}) => {
  const { word, ref, speed } = props;
  useEffect(() => {
    const type = () => {
      if (!ref || !ref.current) return;
      if (word.length <= ref.current.innerHTML.length) return;
      ref.current.innerHTML += word[ref.current.innerHTML.length];
    };

    const intervalId = setInterval(type, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [word, ref, speed]);
};
