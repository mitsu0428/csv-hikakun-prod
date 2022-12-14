import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Container>
        <Image
          src="/images/csvhikakun_logo_ver0.2.png"
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
`;
