import React, { useContext, useEffect } from "react";
import "./overlay.css";
import { CommonContext } from "../../context/CommonContext";
import commonTypes from "../../context/types/commonTypes";

const Overlay = () => {
  const { overlay, dispatch } = useContext(CommonContext);

  useEffect(() => {
    let overlayElm = document.querySelector("#overlay");
    if (overlay) {
      overlayElm.classList.add("overlay__show");
    } else {
      overlayElm.classList.remove("overlay__show");
    }
  }, [overlay]);

  return (
    <div
      id="overlay"
      className="overlay"
      onClick={() => dispatch({ type: commonTypes.overlay.CLOSE })}
    ></div>
  );
};

export default Overlay;
