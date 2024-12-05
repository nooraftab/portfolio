import React from "react";
import "./ProjectOverview.css";
import staple from "./images/staple.svg";
import portfolio from "./images/portfolio.svg";
import { NavLink } from "react-router-dom";

const ProjectOverview = () => {
  return (
    <div className="project-overview-section">
      <h2 className="proud-project-heading">Website under construction 🏗️</h2>
      <div className="staple-section">
        {/* <img src={staple} alt="staple screen shot" className="staple-image" /> */}
        <div className="staple-overview-content">
          {/* <h4 className="staple-overview-heading" id="staple-overview-heading">
            The MDW Hα Sky Survey
          </h4> */}
          {/* <p className="staple-overview-para">
            With its focus on promoting the medicinal varieties of rice and
            connecting farmers with expert opinions, Staple represents an
            innovative and impactful approach to promoting sustainable and
            healthy rice farming practices.
          </p> */}
          <div className="overview-button-section">
            <a
              href="https://mdw.astro.columbia.edu/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <button
                className="overview-button primary"
                id="staple-button-source"
              >
                Check out the survey!
              </button>
            </a>
            <a
              href="https://github.com/paribhandarkar/portfolio"
              target="_blank"
              rel="noreferrer"
            > */}
              {/* <NavLink to="staple-code-journey">
                <button
                  className="overview-button secondary"
                  id="staple-button-code"
                >
                  Code Journey
                </button>
              </NavLink> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
