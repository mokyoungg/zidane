import React, { useEffect } from "react";
import "./Landing.scss";
import { gsap } from "gsap";

const Landing = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".hideText", {
        delay: 2,
        duration: 0.5,
        y: "-100%",
        ease: "power3.inOut",
      })
      .to(".revealText", {
        //delay: 4,
        duration: 0.5,
        y: "-100%",
        ease: "power3.inOut",
      })
      .to(".overlay, .content", {
        delay: 2,
        duration: 1,
        y: "-100%",
        ease: "power3.inOut",
      })
      .from(
        ".title",
        {
          duration: 0.5,
          height: "0px",
        },
        "textLabel"
      )
      .from(
        ".description",
        {
          duration: 0.5,
          height: "0px",
        },
        "textLabel"
      )
      .to(
        ".bar",
        { duration: 0.5, width: "60%", ease: "power3.inOut" },
        "barLabel"
      )
      .to(
        ".imgSection",
        { duration: 0.5, width: "35%", ease: "power3.inOut" },
        "barLabel"
      );
  }, []);

  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="overlayTextWrap">
          <p className="hideText">Wait a bit</p>
          <p className="revealText">Zinedine Zidane</p>
        </div>
      </div>
      <div className="content">
        <div className="textSection">
          <div className="title">
            Zinedine
            <br /> Zidane
          </div>
          <div className="bar"></div>
          <div className="description">
            A genius. Zinedine Zidane marked an era in world football with his
            elegance and technical skills. Blessed with natural talent for this
            sport, the French midfielder won everything that could possibly be
            won, both with his clubs as well as with the French national team. A
            magical player who elected to close out his historic sporting career
            at Real Madrid, together conquering the 2002 Champions League title.
          </div>
        </div>
        <div className="imgSection"></div>
      </div>
    </div>
  );
};

export default Landing;
