import React, { useEffect } from "react";
import "./FranceWorldCup.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../images/worldcup.jpg";
import img2 from "../../images/worldcup2.jpg";
import img3 from "../../images/worldcup4.jpg";

const FranceWorldCup = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    /*
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_second",
        start: "top 100px",
        markers: true,
        //스크롤 기준 정해주기. 이게 없으면 스크롤이 2개가 생긴다.
        scroller: ".wrapper",
      },
    });

    tl.from(".description_1998_1", {
      y: 20,
      opacity: 0,
      duration: 1,
    });*/
    gsap.from(".description_1998_1, .description_1998_2", {
      scrollTrigger: {
        trigger: ".section_second",
        start: "top 100px",
        end: "top 50px",
        scrub: 1,
        //markers: true,
        scroller: ".wrapper",
      },
      y: 20,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".img2_container", {
      scrollTrigger: {
        trigger: ".description_1998_2",
        scroller: ".wrapper",
        start: "center 100px",
        end: "center 50px",
        //markers: true,
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      duration: 1,
    });

    gsap.from(".img3_container", {
      scrollTrigger: {
        trigger: ".img2_container",
        scroller: ".wrapper",
        start: "center 100px",
        end: "center 50px",
        //markers: true,
        scrub: 1,
      },
      y: 30,
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="section_first">
        <div className="text_container">
          <hr className="section_bar" />
          <p className="section_subtitle">July 12th, 1998</p>
          <hr className="section_bar" />
          <h3 className="section_title">
            Winning
            <br /> the World Cup
            <br /> in France
          </h3>
          <hr className="section_bar" />
        </div>
        <div className="img_container">
          <img className="img1" src={img1} alt="img1" />
        </div>
        <div className="trigger"></div>
      </div>
      <div className="section_second">
        <div className="description_1998_container">
          <p className="description_1998_1">
            The 1998 FIFA World Cup was the first World Cup that Zidane
            participated in the tournament was held in his home country, France.
            The French team won all three games in the group stage, with Zidane
            setting up Christophe Dugarry's goal in the opening match against
            South Africa from a corner, and contributing to Thierry Henry's
            opening goal in the second match against Saudi Arabia however,
            Zidane was sent off in the latter match for a stamp on Fuad Anwar,
            becoming the first French player to receive a red card in a World
            Cup Finals match.
            <br />
            <br /> Without their playmaker, France proceeded to win 1–0 in the
            round of sixteen game against Paraguay and, on his return to the
            side, defeated Italy 4–3 on penalties after a goalless draw in the
            quarter-finals, with Zidane netting the first spot kick in the
            shoot-out. France then defeated Croatia 2–1 in the semi-final.
            Although Zidane had played a role in the team's accomplishments, he
            had yet to score a goal at the World Cup.
          </p>
          <p className="description_1998_2">
            Zidane and France went on to play against defending champions and
            favourites Brazil at the Stade de France in the 1998 FIFA World Cup
            Final. France dominated Brazil from the kick-off, with Zidane
            scoring two similar goals, both headers from corner kicks taken by
            Emmanuel Petit and Youri Djorkaeff. Courtesy of Zidane's two goals,
            France went into the half-time break 2–0 up with one hand on the
            World Cup trophy.
            <br />
            <br /> Petit added a third goal deep in stoppage time to seal the
            3–0 win and France's first ever World Cup. Named man of the match,
            Zidane became an instant national hero and would receive the Legion
            of Honour later that year. More than one million people lined the
            Champs-Élysées in Paris, with celebrations centred around the Arc de
            Triomphe.
          </p>
        </div>
        <div className="img_container_1998">
          <div className="img2_container">
            <img className="img2" src={img2} alt="img2" />
          </div>
          <div className="img3_container">
            <img className="img3" src={img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranceWorldCup;
