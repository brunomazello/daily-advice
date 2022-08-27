import styled, { css } from "styled-components";

export const Title = styled.h1`
  color: #ff009e;
  font-size: 60px;
  text-align: center;

  &:hover {
    cursor: pointer;
    color: #ff006c;
    transition: 1s all;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
export const Button = styled.button`
  background-color: #ff009e;
  padding: 15px 85px;
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  margin-top: 30px;
  margin-bottom: 20px;

  &:hover {
    background-color: #ff006c;
    transition: 1s all;
  }

  ${(props) =>
    props.login &&
    css`
      background: palevioletred;
      color: white;
    `}

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
  flex-direction: column;
  border: 1px solid white;
  margin-left: 10%;
  margin-right: 10%;
  padding: 25px 20px 60px 20px;
  background-color: #fff;
  border-radius: 15px;

  @media (max-width: 800px) {
    margin-top: 20vh;
  }
`;

export const Text = styled.p`
  color: #000;
  font-size: 1.5rem;
  padding: 0px 15px 0px 15px;
  text-align: center;
  color: #000;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;
