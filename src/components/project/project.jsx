import React, { useContext } from "react";
import "./project.css";
import IMG1 from "../../assets/portfolio1.jpg";
import { CommonContext } from "../../context/CommonContext";

const Project = () => {
  const { contentPopup } = useContext(CommonContext);
  console.log(contentPopup);
  return (
    <div className="project">
      <div className="project__img">
        <img src={contentPopup?.image} alt="" />
      </div>
      <div className="project__body">
        <div className="project__content">
          <h3>{contentPopup?.title}</h3>
          {contentPopup?.tech && (
            <p>
              <b>Technology: </b>
              {contentPopup?.tech}
            </p>
          )}
          {contentPopup?.teamSize && (
            <p>
              <b>Team size: </b>
              {contentPopup?.teamSize}
            </p>
          )}
          {contentPopup?.role && (
            <p>
              <b>My responsibility: </b>
              {contentPopup?.role}
            </p>
          )}
          {contentPopup?.desc && (
            <p>
              <b>Description: </b>
              {contentPopup?.desc}
            </p>
          )}
        </div>
        <div className="project__cta">
          {contentPopup?.demo && (
            <a
              href={contentPopup?.demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {contentPopup?.github && (
            <a
              href={contentPopup?.github}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
