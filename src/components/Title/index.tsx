import styled from "styled-components";

const TitleStyled = styled.h1`
  margin: 0 0 80px 0;
  line-height: 1.15;
  font-size: 4rem;
  animation: showUp 1s;
  transition: transform 100ms;
  &.titleScroll {
    transform: translateY(var(--positive-scroll));
  }
`;

export interface TitleProps {
  className?: string;
  gradient?: "primary" | "secondary";
  children: React.ReactNode;
}

export const Title = ({ children, className, gradient }: TitleProps) => {
  return (
    <TitleStyled
      className={[
        className,
        gradient === "primary" ? "text-gradient-primary" : undefined,
      ].join(" ")}
    >
      {children}
    </TitleStyled>
  );
};
