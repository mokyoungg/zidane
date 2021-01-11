import React, { useEffect } from "react";
import "./Lesbelus.scss";
import { gsap } from "gsap";
import img1 from "../../images/worldcup.jpg";

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
      <div className="section first">
        <div className="text_container">
          <hr className="section_bar" />
          <p className="section_subtitle">July 12th, 1998</p>
          <h3 className="section_title">Winning the World Cup in France</h3>
        </div>
        <div className="img_container">
          <img className="img1" src={img1} alt="img1" />
        </div>
      </div>
      <div className="section second">
        <div className="text_container">
          <hr className="section_bar" />
          <p className="section_subtitle">July 12th, 1998</p>
          <h3 className="section_title">Winning the World Cup in France</h3>
        </div>
        <div className="img_container">
          <img className="img1" src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
};

export default Lesbelus;
