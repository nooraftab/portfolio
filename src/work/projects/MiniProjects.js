import React from "react";
import Details from "./Details";
import MiniProjectsData from "./MiniProjectsData";
import "./MiniProject.css";
import BriefFooter from "../../common components/BriefFooter";

const MiniProjects = () => {
  return (
    <>
      <div id="mini-projects-section">
        <div className="mini-projects-intro">
          <h4>Work + Research I've Done </h4>
          <p>
            TODO
          </p>
        
        </div>
        {MiniProjectsData.map(
          ({
            summary,
            imageSrc,
            descriptionHeading,
            description,
            newHeading,
            newDescription,
            challengesHeading,
            challengesDescription,
            linkSource,
            linkLive,
          }) => (
            <Details
              key={summary}
              summary={summary}
              imageSrc={imageSrc}
              descriptionHeading={descriptionHeading}
              description={description}
              newHeading={newHeading}
              newDescription={newDescription}
              challengesHeading={challengesHeading}
              challengesDescription={challengesDescription}
              linkSource={linkSource}
              linkLive={linkLive}
            />
          )
        )}
      </div>
      <BriefFooter />
    </>
  );
};

export default MiniProjects;
