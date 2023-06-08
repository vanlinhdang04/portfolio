import React, { useContext, useEffect } from "react";
import "./popup.css";
import Project from "../project/project";
import { CommonContext } from "../../context/CommonContext";

const Popup = () => {
  const { popup } = useContext(CommonContext);

  useEffect(() => {
    let popupElm = document.querySelector("#popup");

    if (popup && popupElm) {
      popupElm.classList.add("popup__show");
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
