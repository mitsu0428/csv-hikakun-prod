import React from "react";
import styled from "styled-components";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableRow } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableContainer } from "@mui/material";

type Props = {
  text: string;
  array: any;
  children?: React.ReactNode;
};

const ShowDataWithTable = ({ text, array }: Props) => {
  const [isClick, setIsClick] = React.useState(false);
  const handleClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <p>{text}</p>
      </Button>
      {isClick && (
        <TableContainer>
          <Table>
            <TableBody>
              {array.map((row: any, index: number) => (
                <TableRow key={index}>
                  {row.map((cell: any, index: number) => (
                    <TableCell key={index}>{cell}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default ShowDataWithTable;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 350px;
  font-size: 1rem;
  height: 3rem;
  margin-top: 2rem;
  text-decoration: none;
  color: #ffffff;
  background-color: #eea9a9;
  border: none;
  border-radius: 0.5rem;
  transition: 0.4s;

  :hover {
    background-color: #ff6f91;
  }
`;
