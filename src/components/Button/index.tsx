import styled from "styled-components";

export const Button = styled.button`
  padding: 0.5rem 2rem;
  font-family: "Shadows Into Light", cursive;
  font-size: 1rem;
  box-shadow: 0px 0px 2px #bbb;
  background-color: #720de6;
  color: #fff;
  border-radius: 6px;
  border: solid 1px transparent;
  outline: none;
  cursor: pointer;
  font-weight: 100;
  transition: 0.3s;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0.5rem 1rem 0.5rem 0;
  border: solid 1px -webkit-linear-gradient(360deg, #720de6, #150338);
  transition: 0.2s;

  &:hover {
    filter: brightness(1.4);
  }
`;
