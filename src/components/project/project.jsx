import React from "react";
import "./project.css";
import IMG1 from "../../assets/portfolio1.jpg";

const Project = () => {
  return (
    <div className="project">
      <div className="project__img">
        <img src={IMG1} alt="" />
      </div>
      <div className="project__body">
        <div className="project__content">
          <h3>ZenOne - App Introduction</h3>
          <p>Technology: </p>
          <p>Team size: </p>
          <p>My responsibility: </p>
          <p>Description: </p>
        </div>
        <div className="project__cta">
          <a
            href={"#1"}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Live Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
