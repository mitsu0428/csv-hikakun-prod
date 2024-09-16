import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingIcon />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const LoadingIcon = styled.div`
  // ぐるぐる回るアイコン
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  border-top: 5px solid #ccc;
  animation: loading 1s linear infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @keyframes loading {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
