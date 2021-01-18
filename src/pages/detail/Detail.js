import React, { useEffect } from "react";
import "./Detail.scss";
import { gsap } from "gsap";
import FranceWorldCup from "../../components/lesbelus/FranceWorldCup";
import Euro from "../../components/lesbelus/Euro";
import Footer from "../../components/footer/Footer";

const Detail = () => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".bar", {
        duration: 1,
        width: "0px",
      })
      .from(".detail_title", {
        delay: 1,
        duration: 0.5,
        opacity: 0,
      });
  }, []);
  return (
    <div className="detail_wrapper">
      <div className="detail_title_container">
        <div className="detail_title">10</div>
        <div className="bar zero"></div>
        <div className="bar one"></div>
        <div className="bar two"></div>
        <div className="bar three"></div>
      </div>
      <FranceWorldCup />
      <Euro />
      <Footer />
    </div>
  );
};

export default Detail;
