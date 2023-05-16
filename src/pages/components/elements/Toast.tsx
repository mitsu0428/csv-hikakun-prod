import React, { Component } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Props {
  message: string;
  type: string;
}

export default class Toast extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    const { message, type } = this.props;
    if (type === "success") {
      toast.success(message);
      return;
    }

    if (type === "error") {
      toast.error(message);
      return;
    }

    if (type === "info") {
      toast.info(message);
      return;
    }

    if (type === "warning") {
      toast.warn(message);
      return;
    }

    if (type === "default") {
      toast(message);
      return;
    }
  }

  render() {
    return (
      <BasicContainer>
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={true}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BasicContainer>
    );
  }
}

const BasicContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
