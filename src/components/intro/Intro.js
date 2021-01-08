import React, { useEffect } from "react";
import "./Intro.scss";
import { gsap } from "gsap";

const Intro = () => {
  useEffect(() => {
    gsap.to(".left", {
      duration: 2,
      delay: 0.8,
      width: "50%",
      ease: "Power2.easeInOUt",
    });
    gsap.to(".right", {
      duration: 2,
      delay: 0.6,
      width: "50%",
      ease: "Power3.easeInOut",
    });
    gsap.to(".img1", {
      duration: 2,
      delay: 1.5,
      width: "530px",
      ease: "Power2.easeInOut",
    });
    gsap.from(".text h1", {
      duration: 2,
      delay: 0.6,
      x: 1000,
      ease: "Circ.easeInOut",
    });
    gsap.from(".text p", {
      duration: 2,
      delay: 0.6,
      x: 1000,
      ease: "Circ.easeInOut",
    });
  }, []);

  return (
    <div className="body">
      <div className="left"></div>
      <div className="right"></div>
      <div className="content">
        <div className="img-wrapper">
          <div className="img1"></div>
        </div>
      </div>
      <div className="text">
        {/*<p>
          The
          <br /> Masetro
        </p>*/}
        <h1>
          Zinedine
          <br /> Zidane
        </h1>
      </div>
    </div>
  );
};

export default Intro;
