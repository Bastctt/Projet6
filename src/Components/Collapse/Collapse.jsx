import "./Collapse.scss";
import { useState } from "react";

function Collapse({ titleCollapse, textCollapse }) {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState("");

  function close() {
    setAnimation("close");
    setTimeout(() => {
      setIsOpen(false);
    }, 590);
  }

  function open() {
    setIsOpen(true);
    setAnimation("open");
  }

  return isOpen ? (
    <div className={`collapse ${animation}`}>
      <button
        aria-haspopup="true"
        aria-expanded="true"
        className="button-collapse"
        onClick={() => close()}
      >
        <h3 className="title">{titleCollapse}</h3>
        <i className={`icone fa-solid fa-chevron-down fa-1x ${animation}`}></i>
      </button>
      <div className={`containerText ${isOpen ? "open" : ""}`}>
        {textCollapse}
      </div>
    </div>
  ) : (
    <div className="collapse">
      <button
        aria-haspopup="true"
        aria-expanded="false"
        className="button-collapse"
        onClick={() => open()}
      >
        <h3 className="title">{titleCollapse}</h3>
        <i className={`icone fa-solid fa-chevron-down fa-1x ${animation}`}></i>
      </button>
    </div>
  );
}

export default Collapse;
