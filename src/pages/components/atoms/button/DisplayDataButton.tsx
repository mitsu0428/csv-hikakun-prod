import React from "react";
import styled from "styled-components";

type Props = {
  data: any;
  children: React.ReactNode;
};

const DisplayDataButton = ({ data }: Props) => {
  const [isClick, setIsClick] = React.useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <p>データを表示する</p>
      </Button>
      {isClick && <p>今後、ここにデータを表示する予定です。</p>}
    </>
  );
};

export default DisplayDataButton;

const Button = styled.button`
  display: flex;
  justify-content: center;
  list-style: none;

  li {
    margin-right: 8px;
  }
`;
