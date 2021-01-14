import React, { useEffect } from "react";
import "./Lesbelus.scss";
import { gsap } from "gsap";
import FranceWorldCup from "./FranceWorldCup";
import Euro from "./Euro";

const Lesbelus = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".title", {
        delay: 1,
        duration: 1,
        opacity: 0,
        height: "0%",
        ease: "power3.inOut",
      })
      .from(".bar", {
        duration: 1,
        width: "0px",
      })
      .from(".overlay", {
        delay: 1,
        duration: 0.5,
        left: "-100%",
        stagger: {
          each: 0.1,
          amount: 1,
        },
      })
      .from(".subtitlebar", {
        duration: 1,
        width: "0px",
      })
      .from(".subtitle", {
        delay: 1,
        duration: 0.5,
        opacity: 0,
        ease: "power3.inOut",
      });
  }, []);

  return (
    <div className="wrapper">
      <div className="title_container">
        <div className="title">Les Bleus</div>
        <div className="bar"></div>
        <div className="overlay first"></div>
        <div className="overlay second"></div>
        <div className="overlay third"></div>
        <div className="subtitle_container">
          <div className="subtitle">10</div>
          <div className="subtitlebar zero"></div>
          <div className="subtitlebar one"></div>
          <div className="subtitlebar two"></div>
          <div className="subtitlebar three"></div>
        </div>
      </div>
      <div>
        <FranceWorldCup />
      </div>
      <div>
        <Euro />
      </div>
    </div>
  );
};

export default Lesbelus;
