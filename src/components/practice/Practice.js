//gsap 연습
//출처 https://www.youtube.com/watch?v=m6PDUIF24v4

import React, { useEffect } from "react";
import "./Practice.scss";
import { gsap } from "gsap";

const Practice = () => {
  /* gsap.from 의 duration과 delay 애니메이션 사용
  useEffect(() => {
    gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });
    gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 });
    gsap.from(".right", {
      duration: 1,
      x: "-100vw",
      delay: 1,
      ease: "power2.in",
    });
    gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
    gsap.to(".footer", { duration: 1, delay: 2.5, y: 0, ease: "elastic" });
    gsap.fromTo(
      ".button",
      { opacity: 0, scale: 0, rotation: 720 },
      { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
    );

    
    const obj = { x: 0 };
    gsap.to(obj, { x: 100, onUpdate: () => console.log(obj.x) });
    
  }, []);*/

  // gsap의 timeline 사용
  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 1 } });
    timeline
      .from(".header", { y: "-100%", ease: "bounce" })
      .from(".link", { opacity: 0, stagger: 0.5 })
      .from(
        ".right",
        {
          x: "-100vw",
          ease: "power2.in",
        },
        1 // absolute duration
      )
      .from(".left", { x: "-100%" }, "<.5") //<.5 = 0.5seconds after this rigth animation starts
      .to(".footer", { y: 0, ease: "elastic" })
      .fromTo(
        ".button",
        { opacity: 0, scale: 0, rotation: 720 },
        { opacity: 1, scale: 1, rotation: 0 }
      );
  }, []);

  return (
    <div className="wrap">
      <div className="header">
        <div className="links">
          <div className="link">Link 1</div>
          <div className="link">Link 2</div>
          <div className="link">Link 3</div>
        </div>
      </div>
      <div className="content">
        <div className="sidebar left"></div>
        <button className="button">Reverse!</button>
        <div className="sidebar right"></div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default Practice;
