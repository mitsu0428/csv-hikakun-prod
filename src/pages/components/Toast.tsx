import React, { Component } from "react";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class ErrorToast extends Component {
  toast = () =>
    toast.success("送信に成功しました。", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  render() {
    return (
      <BasicContainer>
        <BasicButton color="error" onClick={this.toast}>
          通知
        </BasicButton>
        <ToastContainer />
      </BasicContainer>
    );
  }
}

export default ErrorToast;

const BasicContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const BasicButton = styled.button`
  display: inline-block;
  width: 100%;
  max-width: 350px;
  height: 2rem;
  padding: 0.3em 1em;
  margin: 0 0.3em 0.3em 0;
  text-decoration: none;
  color: #eea9a9;
  background: none;
  border: solid 1px #eea9a9;
  border-radius: 3px;
  transition: 0.4s;
  :hover {
    background: #eea9a9;
    color: white;
  }
`;
