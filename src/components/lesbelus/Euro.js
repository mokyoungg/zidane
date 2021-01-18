//useRef와 gsap을 활용한 스크롤 이벤트
import React, { useEffect, useRef } from "react";
import "./Euro.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../../images/euro.jpg";
import img2 from "../../images/euro2.png";
import img3 from "../../images/euro3.jpg";
import img4 from "../../images/euro4.jpg";

gsap.registerPlugin(ScrollTrigger);

const Euro = () => {
  const sectionRef = useRef(null);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    gsap.from(sectionRef.current, {
      duration: 1,
      autoAlpha: 0,
      ease: "none",
      //delay: 1,
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
            //id: `section-${index+1}`,
            trigger: el,
            start: "top center+=100",
            end: "top center+=150",
            toggleActions: "play none none reverse",
            //markers: true,
            scroller: document.querySelector(".wrapper"),
            scrub: 0.5,
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
    //console.log(revealRefs.current);
  };

  return (
    <div className="section_wrapper_2" ref={sectionRef}>
      <div className="section_first">
        <div className="text_container" ref={addToRefs}>
          <hr className="section_bar" />
          <p className="section_subtitle">July 2th, 2000</p>
          <hr className="section_bar" />
          <h3 className="section_title">
            Winning
            <br /> UEFA Euro 2000
          </h3>
          <hr className="section_bar" />
        </div>
        <div className="img_container">
          <img className="img1" src={img1} alt="img1" ref={addToRefs} />
        </div>
      </div>
      <div className="section_second">
        <div className="description_1998_container">
          <p className="description_1998_1" ref={addToRefs}>
            France won Euro 2000, becoming the first team to hold both the World
            Cup and the European Championship since West Germany in 1974. Zidane
            finished with two goals, a bending free kick against Spain in the
            quarter-final and the golden goal in the semi-final against Portugal
            with a penalty. UEFA named Zidane Player of the Tournament.
            <br />
            <br />
            Zidane himself believes he was at his peak during the tournament,
            while the UEFA website states, "In Belgium and the Netherlands,
            Zidane dominated a major championship in a way no individual had
            managed since Diego Maradona in 1986. From the opening game against
            Denmark to the final against Italy, 'Zizou' shone brightly, casting
            a spell on his opponents with clever flicks, mesmerising stepovers,
            slaloming runs and masterful vision."
          </p>
        </div>
        <div className="img_container_1998">
          <div className="img2_container" ref={addToRefs}>
            <img className="img2" src={img2} alt="img2" />
          </div>
          <div className="img3_container" ref={addToRefs}>
            <img className="img3" src={img3} alt="img3" />
          </div>
          <div className="img4_container" ref={addToRefs}>
            <img className="img4" src={img4} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Euro;
