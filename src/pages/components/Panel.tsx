import React from "react";

type Props = {
  close?: (e: any) => void;
};

const Panel: React.FC<Props> = props => {
  const submit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (props.close) {
      props.close(e);
    }
  };

  return (
    <section className="panel">
      <header>
        <h3>Modal Panel!</h3>
      </header>
      <div>Hi! Nice to meet you!</div>
      <footer>
        <button type="button" onClick={props.close}>
          Cancel
        </button>
        <button type="submit" onClick={submit}>
          OK
        </button>
      </footer>
    </section>
  );
};

export default Panel;
