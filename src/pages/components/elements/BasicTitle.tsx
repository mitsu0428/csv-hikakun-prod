import React from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

function BasicTitle({ title }: Props) {
  return <Title>{title}</Title>;
}

export default BasicTitle;

const Title = styled.h1`
  position: relative;
  font-size: 2rem;
  padding: 1rem 0.5rem;
  text-align: center;
  font-weight: bold;
  color: #eea9a9;
  margin-bottom: 2rem;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: 10px;
    content: "";
    background-image: repeating-linear-gradient(
      -45deg,
      #333333,
      #333333 1px,
      transparent 2px,
      transparent 5px
    );
    background-size: 7px 7px;
    transform: translateY(2px);
  }
`;
