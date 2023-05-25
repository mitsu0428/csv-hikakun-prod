import React from "react";
import styled from "styled-components";
import Image from "next/image";

type Props = {
  isCsvPage?: boolean;
  isExcelPage?: boolean;
  isTextPage?: boolean;
};
const Logo = ({ isCsvPage, isExcelPage, isTextPage }: Props) => {
  const srcPath = () => {
    if (isCsvPage) {
      return "/images/csv-logo.png";
    }
    if (isExcelPage) {
      return "/images/excel-logo.png";
    }
    if (isTextPage) {
      return "/images/text-logo.png";
    }
    return "/images/csv-logo.png";
  };

  return (
    <>
      <Container>
        <Image
          src={srcPath()}
          width={100}
          height={100}
          alt="csvhikrakunのロゴ"
        />
      </Container>
    </>
  );
};

export default Logo;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
