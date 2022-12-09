import React from "react";
import fire from "../images/about.jpg";

const ImageSection = () => {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={fire} alt="profile img" />
      </div>
      <div className="about-info">
        <p className="about-text">
          I am looking for a job as a full-stack & blockchain developer. For 7
          years of software developer career, I built the Business, e-commerce,
          shopping platform, personal blog site, Blockchain projects, 2D & 3D
          Web online Games. I approach everything Agile and with my team I
          refined a new SCRUM like methodology that allows us to be
          super-precise, delivering on time and following high standard of
          coding thanks to many micro iterations of 1 or 2 weeks each.
        </p>

        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Languages</p>
          </div>
          <div className="right-section">
            <p>
              : <span>Yonathan Admasu</span>
            </p>
            <p>: 32</p>
            <p>: English</p>
          </div>
        </div>
        <button className="btn">
          <a
            href="https://drive.google.com/file/d/17NiJ2lfyYC1K24et4078D9vB09v4Sa4y/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
