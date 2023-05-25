import React from "react";
import styled from "styled-components";

const InputField = () => {
  return (
    <InputFieldContainer>
      <TextArea />
    </InputFieldContainer>
  );
};

export default InputField;

const InputFieldContainer = styled.div`
  width: 50%;
  max-width: 1200px;
  padding: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  font-size: 16px;
  height: 30vh;
  border-radius: 8px;
  padding: 8px;
  border: none;
`;
