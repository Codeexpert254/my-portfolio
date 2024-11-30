import { Col } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";



export const ProjectCard = ({ title, description, imgURL, iframeURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Conditionally render iframe or img */}
        {iframeURL ? (
          <iframe
            src={iframeURL}
            height="316"
            width="404"
            title={`Project - ${title}`}
            allowFullScreen
            loading="lazy"
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <img src={imgURL} alt="" />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  iframeURL: PropTypes.string,
};

export const ProjectCard2 = ({ title, description, imgURL, iframeURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {/* Conditionally render iframe or img */}
        {iframeURL ? (
          <iframe
            src={iframeURL}
            height="316"
            width="404"
            title={`Project - ${title}`}
            allowFullScreen
            loading="lazy"
            frameBorder="0"
            allow="clipboard-write"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        ) : (
          <img src={imgURL} alt="" />
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

ProjectCard2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  iframeURL: PropTypes.string,
};

export const ProjectCard3 = ({ title, description, imgURL, githubURL }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={githubURL} target="_blank" rel="noopener noreferrer">
          <img src={imgURL} alt={title} />
        </a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};

ProjectCard3.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  githubURL: PropTypes.string.isRequired,
};