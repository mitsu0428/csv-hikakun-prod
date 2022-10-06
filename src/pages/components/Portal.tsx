import ReactDOM from "react-dom";

const Portal = ( { children }: {children: any} ) => {
  const element = document.querySelector("#main");
  return element ? ReactDOM.createPortal(children, element) : null;
};

export default Portal;
