import React from "react";
import "./Section.scss";
import Clock from "../FirstWidgets/Clock/Clock";
import Effeciency from "../FirstWidgets/Effeciency/Effeciency";
import ProductivityBar from "../Graphs/BarChart/ProductivityBar";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function SectionOne() {
  return (
    <div className="section-one-container">
      <div className="item item-1" data-aos="zoom-in">
        <Clock />
      </div>
      <div className="item item-2" data-aos="fade-up" data-aos-duration="2000">
        <ProductivityBar />
      </div>
      <div
        className="item item-3"
        style={{
          backgroundColor: "#EFEFF5",
        }}
      >
        <Effeciency />
      </div>
    </div>
  );
}

export default SectionOne;
