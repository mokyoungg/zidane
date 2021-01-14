import React, { useEffect, useRef } from "react";
import "./Contents.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../images/zidane.jpg";
import img2 from "../../images/worldcup2.jpg";
import img3 from "../../images/euro2.png";
import img4 from "../../images/champions.png";
import img5 from "../../images/worldcup06.jpg";
import img6 from "../../images/zidane2.jpg";

gsap.registerPlugin(ScrollTrigger);

const Contents = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.to(".title", {
      delay: 0.5,
      duration: 1,
      y: "0%",
      ease: "power3.inOut",
      /*onComplete: () => {
        console.log("끝");
      },*/
    });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0 },
        {
          duration: 0.5,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            toggleAttribute: "play none none reverse",
            scroller: document.querySelector(".wrapper"),
          },
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    //console.log(el);
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="wrapper">
      <div className="section">
        <div className="title_container">
          <p className="title">
            A genius.
            <br /> Zinedine Zidane marked an era in world football with his
            elegance and technical skills.
          </p>
        </div>
      </div>
      <div className="section">
        <div className="description_container" ref={addToRefs}>
          <div className="portrait_container">
            <img className="portrait" src={img1} alt="zidane" />
            <p className="honours">
              <span>Honours</span>
              <br />
              <br />
              FIFA World Cup: 1998; runner-up: 2006
              <br />
              UEFA European Championship: 2000
              <br />
              <br />
              La Liga: 2002–03
              <br />
              Supercopa de España: 2001, 2003
              <br />
              UEFA Champions League: 2001–02
              <br />
              <br />
              Ballon d'Or : 1988
              <br />
              FIFA World Player of the Year: 1998, 2000, 2003
              <br />
              UEFA Team of the Year: 2001, 2002, 2003
              <br />
              Real Madrid Greatest XI of All Time: 2012
              <br />
              L'Équipe Best French Player of All Time : 2018
              <br />
            </p>
          </div>
          <p className="description">
            <span>Introduce</span>
            <br />
            <br />
            Popularly known as Zizou, is a French former professional football
            player who played as an attacking midfielder. He is the current
            manager of La Liga club Real Madrid and is one of the most
            successful managers in the world. <br />
            Widely regarded as one of the greatest players of all time, Zidane
            was an elite playmaker renowned for his elegance, vision, passing,
            ball control, and technique. He received many individual accolades
            as a player, including being named FIFA World Player of the Year in
            1998, 2000 and 2003, and winning the 1998 Ballon d'Or.
          </p>
        </div>
      </div>
      <div className="animation_section">
        <div className="scroll text1">
          <div>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
          </div>
          <div>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
          </div>
        </div>
        <div className="scroll text2">
          <div>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
          </div>
          <div>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
            Zizou <span>Elegant </span>Maestro <span>Art </span>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="career_container">
          <div className="line"></div>
          <div className="career_right" ref={addToRefs}>
            <img className="img_right" src={img2} alt="img2" />
            <div className="info_right">
              <span>1998</span>
              <br />
              World Cup in France
            </div>
          </div>
          <div className="career_left" ref={addToRefs}>
            <img className="img_left" src={img3} alt="img3" />
            <div className="info_left">
              <span>2000</span>
              <br />
              UEFA Euro
            </div>
          </div>
          <div className="career_right" ref={addToRefs}>
            <img className="img_right" src={img4} alt="img4" />
            <div className="info_right">
              <span>2002</span>
              <br />
              Champions League
            </div>
          </div>
          <div className="career_left" ref={addToRefs}>
            <img className="img_left" src={img5} alt="img5" />
            <div className="info_left">
              <span>2006</span>
              <br />
              World Cup in Germany
            </div>
          </div>
          <div className="career_right" ref={addToRefs}>
            <img className="img_right" src={img6} alt="img6" />
            <div className="info_right">
              <span>2006</span>
              <br />
              Retirement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
