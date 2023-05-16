import React from "react";
import styled from "styled-components";

type Props = {
  subtitle: string;
};

function BasicSubtitle({ subtitle }: Props) {
  return <Subtitle>{subtitle}</Subtitle>;
}

export default BasicSubtitle;

const Subtitle = styled.h2`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #eea9a9;
  margin-bottom: 1.5rem;

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
