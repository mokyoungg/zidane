import React from "react";
import "./Career.scss";
import { Link, withRouter } from "react-router-dom";

const Career = ({ img, year, title }) => {
  const clickHandler = () => {
    console.log("click!");
  };

  return (
    <div className="career_wrap">
      <img className="img" src={img} alt="img" onClick={() => clickHandler()} />
      <div className="info">
        <span>{year}</span>
        <br />
        {title}
      </div>
    </div>
  );
};

export default withRouter(Career);
