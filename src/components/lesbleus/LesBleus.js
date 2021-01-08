import React, { useEffect } from "react";
import "./LesBleus.scss";
import { gsap } from "gsap";

const LesBleus = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".title", {
        delay: 1,
        duration: 1,
        opacity: 0,
        y: "100%",
        ease: "power3.inOut",
      })
      .from(".bar", {
        duration: 0.5,
        width: "0%",
        opacity: 1,
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="header">
        <div className="title">Les Bleus</div>
        <div className="bar"></div>
      </div>
      <div className="semicircle"></div>
      <div className="content"></div>
    </div>
  );
};

export default LesBleus;
