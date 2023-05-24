import React, { useState, createContext, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

type ToastTypes = "normal" | "error" | "";

type ToastProviderProps = {
  children: React.ReactNode;
};

const ToastContext = createContext(
  {} as unknown as (props: {
    text: string;
    type?: ToastTypes;
    isDisplay?: boolean;
  }) => void
);

ToastContext.displayName = "ToastContext";

export const useToast = () => {
  return useContext(ToastContext);
};

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [showable, setShowable] = useState(false);
  const [toastText, setToastText] = useState("");
  const [toastType, setToastType] = useState<ToastTypes>("normal");

  const showToast = ({
    text,
    type = "normal",
    isDisplay = true,
  }: {
    text: string;
    type?: ToastTypes;
    isDisplay?: boolean;
  }) => {
    setToastText(text);
    setToastType(type);

    if (isDisplay) {
      setShowable(true);
    }

    if (!isDisplay) {
      setShowable(false);
    }

    setTimeout(() => {
      setShowable(false);
    }, 3000);
  };

  useEffect(() => {
    if (showable) {
      const portalNode = document.createElement("div");
      document.body.appendChild(portalNode);
      return () => {
        document.body.removeChild(portalNode);
      };
    }
  }, [showable]);

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      {showable &&
        createPortal(
          <Toast visible={showable} toastType={toastType}>
            {toastText}
          </Toast>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

const slideInFromRight = keyframes`
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`;

const Toast = styled.div<{ visible: boolean; toastType: ToastTypes }>`
  display: ${(p) => (p.visible ? "block" : "none")};
  background-color: ${(p) =>
    p.toastType === "normal" ? "#67A7CC" : "#cc5757"};
  position: fixed;
  bottom: 16px;
  right: 16px;
  color: #fff;
  border-radius: 8px;
  padding: 14px 32px 14px 32px;
  z-index: 100;

  animation: 0.5s ${slideInFromRight} ease-out;
`;
