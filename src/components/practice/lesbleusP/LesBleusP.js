import React, { useEffect } from "react";
import "./LesBleusP.scss";
import { gsap } from "gsap";

const LesBleusP = () => {
  /*
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
  }, []);*/

  /*overlay
  useEffect(() => {
    gsap.to(".overlay", {
      delay: 0.2,
      duration: 0.3,
      y: "-100%",
      ease: "expo.out",
      stagger: 1,
    });
    gsap.to(".container", {
      delay: 3.8,
      duration: 0.1,
      y: "-100%",
      ease: "expo.out",
    });
    gsap.to(".sec", {
      delay: 3.9,
      duration: 0.1,
      y: "-100%",
      ease: "expo.out",
    });
  }, []);
*/

  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".overlay", {
        delay: 0.5,
        duration: 2,
        y: "-100%",
        ease: "power4.out",
        stagger: {
          each: 0.1,
          amount: 1,
          ease: "power1.inOut",
        },
      })
      .to(".overlay", {
        //duration: 0.1,
        display: "none",
      })
      .from(".container", {
        //delay: 0,
        //duration: 0.1,
        display: "none",
      })
      .from(".layout", {
        //display: "none",
        //delay: 0,
        duration: 1,
        height: "0%",
        ease: "power4.out",
        stagger: {
          each: 0.1,
          amount: 1,
          ease: "power1.inOut",
        },
      })
      .from(".textWrap", {
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "expo.easeInOut",
      });
  }, []);

  /*
  useEffect(() => {
    gsap.from(".layout", {
      display: "none",
      duration: 0.5,
      delay: 0.5,
      stagger: 1,
      height: "0%",
      ease: "expo.easeInOut",
    });
  }, []);*/

  return (
    <div className="wrapper">
      {/*}
      <div className="header">
        <div className="title">Les Bleus</div>
        <div className="bar"></div>
      </div>
  <div className="semicircle"></div>*/}
      <div className="content">
        {/* overlay */}
        <div className="overlay first"></div>
        <div className="overlay second"></div>
        <div className="overlay third"></div>
        <div className="overlay fourth"></div>
        <div className="textWrap">
          <div className="revealText">
            World
            <br />
            Champion
          </div>
        </div>
        <div className="container">
          <div className="layout first"></div>
          <div className="layout second"></div>
          <div className="layout third"></div>
          <div className="layout fourth"></div>
        </div>
      </div>
    </div>
  );
};

export default LesBleusP;
