import React from "react";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import styled from "styled-components";

const TableOfContents = ({ toc }: { toc: any }) => {
  return (
    <StyledContainer>
      <StyledH2>目次</StyledH2>
      <ul>
        {toc?.map(
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
          }) => (
            <StyledList key={data.id}>
              <a href={`#${data.text}`}>- {data.text}</a>
            </StyledList>
          )
        )}
      </ul>
    </StyledContainer>
  );
};

export default TableOfContents;

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const StyledH2 = styled.h2`
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
`;

const StyledList = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 16px;
`;
