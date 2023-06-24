import React from "react";
import styled from "styled-components";

const TitleStyled = styled.h1`
  margin: 0 0 80px 0;
  line-height: 1.15;
  font-size: 4rem;
  transition: transform 100ms;
  min-height: 6rem;
  display: flex;
  align-items: center;
`;

export interface TitleProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  gradient?: "primary" | "secondary";
}

export const Title = React.forwardRef(
  ({ children, className, gradient, ...rest }: TitleProps, ref: any) => {
    return (
      <TitleStyled
        {...rest}
        className={[
          className,
          gradient === "primary" ? "text-gradient-primary" : undefined,
        ].join(" ")}
        ref={ref}
      >
        {children}
      </TitleStyled>
    );
  }
);
Title.displayName = "Title";
