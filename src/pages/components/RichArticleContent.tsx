import React, {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import styled from "styled-components";

const RichAirticleContent = ({ contents }: { contents: any }) => {
  return (
    <div>
      {contents?.map(
        (data: {
          id: Key | null | undefined;
          text:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
          tagName: string;
        }) => {
          if (data.tagName === "h1") {
            return (
              <StyledTitle key={data.id} id={data.id + "h1"}>
                {data.text}
              </StyledTitle>
            );
          }
          if (data.tagName === "h2") {
            return (
              <StyledH2 key={data.id} id={data.id + "h2"}>
                {data.text}
              </StyledH2>
            );
          }
          if (data.tagName === "h3") {
            return (
              <StyledH3 key={data.id} id={data.id + "h3"}>
                {data.text}
              </StyledH3>
            );
          }
          if (data.tagName === "p") {
            return (
              <StyledText key={data.id} id={data.id + "p"}>
                {data.text}
              </StyledText>
            );
          }
          if (data.tagName === "ul") {
            return (
              <ul key={data.id} id={data.id + "ul"}>
                {data.text}
              </ul>
            );
          }
          if (data.tagName === "li") {
            return (
              <li key={data.id} id={data.id + "li"}>
                {data.text}
              </li>
            );
          }
        }
      )}
    </div>
  );
};

export default RichAirticleContent;

const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #c3d941;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const StyledH2 = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #c3d941;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const StyledH3 = styled.h3`
  font-size: 26px;
  font-weight: bold;
  color: #c3d941;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const StyledText = styled.p`
  font-size: 24px;
  color: #333333;
  line-height: 1.25;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
