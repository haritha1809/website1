import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <>
      <div className="programs-header">
        <h2 className="programs-title">
          <span className="stroke-text">Explore Our </span>
          <span className="highlight-text">PROGRAMS </span>
          <span className="stroke-text">to shape you</span>
        </h2>
      </div>

      <div className="programs-categories">
        {programsData.map((program, index) => (
          <div className="category" key={index}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="Right Arrow" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Programs;
