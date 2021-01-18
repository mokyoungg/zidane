import React, { useEffect, useRef, useState } from "react";
import "./Contents.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollText from "../../components/scrollText/ScrollText";
import Career from "../../components/career/Career";
import Footer from "../../components/footer/Footer";

import img1 from "../../images/zidane.jpg";
import img2 from "../../images/worldcup2.jpg";
import img3 from "../../images/euro5.jpg";
import img4 from "../../images/champions.png";
import img5 from "../../images/worldcup06.jpg";
import img6 from "../../images/zidane3.jpg";

gsap.registerPlugin(ScrollTrigger);

const Contents = ({ history }) => {
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline
      .from(".background", {
        opacity: 0,
        delay: 0.5,
      })
      .to(".title", {
        delay: 0.5,
        duration: 1,
        y: "0%",
        ease: "power3.inOut",
        /*onComplete: () => {
        console.log("끝");*/
      });

    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        //{ autoAlpha: 0 },
        { opacity: 0, y: "100" },
        {
          duration: 0.5,
          opacity: 1,
          y: "0",
          //autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top center+=100",
            end: "top center+=150",
            toggleAttribute: "play none none reverse",
            scroller: document.querySelector(".wrapper"),
            //markers: true,
            scrub: 0.5,
          },
        }
      );
    });

    if (isActive === true) {
      const tl = gsap.timeline();

      tl.to(".overlay", {
        delay: 0.5,
        duration: 0.5,
        left: "0%",
        stagger: {
          each: 0.1,
          amount: 1,
        },
      });
    }
  }, [isActive]);

  const addToRefs = (el) => {
    //console.log(el);
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const moveToDetail = () => {
    const link = () => {
      history.push("/detail");
    };
    setIsActive(true);
    setTimeout(link, 3000);
  };

  console.log(isActive);
  return (
    <div className="wrapper">
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>
      <div className="section">
        <div className="background">
          <div className="title_container">
            <p className="title">
              A genius.
              <br /> Zinedine Zidane marked an era in world football with his
              elegance and technical skills.
            </p>
          </div>
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
      <ScrollText />
      <div className="section">
        <div className="career_container">
          <div className="line"></div>
          <div
            className="career_right"
            ref={addToRefs}
            onClick={() => moveToDetail()}
          >
            <Career img={img2} year={1998} title={"Wolrd Cup in France"} />
          </div>
          <div className="career_left" ref={addToRefs}>
            <Career img={img3} year={2000} title={"Euro"} />
          </div>
          <div className="career_right" ref={addToRefs}>
            <Career img={img4} year={2002} title={"Champions League"} />
          </div>
          <div className="career_left" ref={addToRefs}>
            <Career img={img5} year={2006} title={"World Cup in Germany"} />
          </div>
          <div className="career_right" ref={addToRefs}>
            <Career img={img6} year={2006} title={"Retirement"} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contents;
