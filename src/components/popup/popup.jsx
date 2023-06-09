import React, { useContext, useEffect } from "react";
import "./popup.css";
import Project from "../project/Project";
import { CommonContext } from "../../context/CommonContext";

const Popup = () => {
  const { popup } = useContext(CommonContext);

  useEffect(() => {
    let popupElm = document.querySelector("#popup");
    if (popup) {
      popupElm?.classList.add("popup__show");
      popupElm?.classList.add("animation-opacity");
    } else {
      popupElm.classList.remove("popup__show");
      popupElm?.classList.remove("animation-opacity");
    }
  }, [popup]);

  return (
    <div id="popup" className="popup">
      <div className="popup-wrapper">
        <Project />
      </div>
    </div>
  );
};

export default Popup;
