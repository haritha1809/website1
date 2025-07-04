import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">to shape you</span>
      </div>

      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            <div className="program-icon">{program.image}</div>

            <div className="program-heading">{program.heading}</div>

            <div className="program-details">{program.details}</div>

            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;