import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_info_section">
        <div className="info_section">
          <div className="info_container">
            <h3 className="title">Design Reference</h3>
            <p className="info">
              <a href="https://www.rezo-zero.com">https://www.rezo-zero.com/</a>
            </p>
          </div>
          <div className="info_container">
            <h3 className="title">Contect</h3>
            <p className="info">mokyoungg@gmail.com</p>
            <p className="info">
              <a href="https://github.com/mokyoungg/">Git</a>
            </p>
            <p className="info">
              <a href="https://velog.io/@mokyoungg">Velog</a>
            </p>
          </div>
        </div>
        <div className="info_section">
          <div className="info_container">
            <h3 className="title">made by Mokyoungg</h3>
            <br />
            <p className="info">
              It's a web made for practicing the 'gsap' animation. I made it
              using React, Sass, and Gsap. The design of this web was referred
              to as 'zero-zero'.
              <br />
              <br /> I'm a front-end developer.
              <br /> I usually develop a variety of libraries with react and
              styled-components. I'm interested in UI/UX, and I'm particularly
              interested in design and animation that help users experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
