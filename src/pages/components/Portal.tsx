import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Portal = ( { children }: {children: any} ) => {
  const [element, setElement] = useState<any>("");

  useEffect(() => {
    const elem: any = document.querySelector("#main");
    setElement(elem)
  });

  return element ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
