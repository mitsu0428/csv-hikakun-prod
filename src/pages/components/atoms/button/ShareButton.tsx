import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

type Props = {
  text: string;
  url: string;
};

const ShareButton = ({ text, url }: Props) => {
  return (
    <ShareUl>
      <li>
        <TwitterShareButton url={url} title={text}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
      </li>
      <li>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
      </li>
    </ShareUl>
  );
};

export default ShareButton;

const ShareUl = styled.ul`
  display: flex;
  justify-content: left;
  list-style: none;
  li {
    margin-right: 8px;
  }
`;
