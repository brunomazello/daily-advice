import styled, { css } from "styled-components";

export const Title = styled.h1`
  color: #f00;
  font-size: 30px;
`;
export const Button = styled.button`
  background-color: #1db954;
  padding: 25px 45px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;

  &:hover {
    background-color: #191414;
    transition: 1s all;
  }

  ${(props) =>
    props.login &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

export const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
