import React from "react";
import "./SectionFour.scss";
import MostLogged from "../MostLogged/MostLogged";
import ProductiveApps from "../ProductivityApps/ProductiveApps";
import UnProductive from "../UnProductiveApps/UnProductive";
import NeutralApp from "../Neutral Apps/NeutralApp";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function SectionFour() {
  return (
    <div className="section-four" id="section-four">
      <div className="most logged" data-aos="fade-up" data-aos-duration="500">
        <MostLogged />
      </div>

      <div
        className="most productive"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <ProductiveApps />
      </div>
      <div
        className="most undproductive"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <UnProductive />
      </div>
      <div className="most neutral" data-aos="fade-up" data-aos-duration="3000">
        <NeutralApp />
      </div>
    </div>
  );
}

export default SectionFour;
