import React from "react";
import "./SectionTwo.scss";
import ProductivityHigh from "../SecondWidgets/DayHighLights/Productivity/ProductivityHigh";
import LateWidget from "../SecondWidgets/DayHighLights/Late/LateWidget";
import Arrived from "../SecondWidgets/DayHighLights/Arrived/Arrived";
import Absent from "../SecondWidgets/DayHighLights/Absent/Absent";
import ProductionInPercentile from "../SecondWidgets/SlackAndProductive/Producting/ProductionInPercentile";
import SlackingInPercentile from "../SecondWidgets/SlackAndProductive/Slacking/SlackingInPercentile";
import WorkingTimeDoughnut from "../Graphs/Doughnut/WorkingTimeDoughnut";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function SectionTwo() {
  return (
    <div className="section-two">
      {/* total working time doughnut chart */}
      <div className="comp working">
        <WorkingTimeDoughnut
          style={{
            color: "black",
          }}
        />
      </div>

      {/*   Productivity, Absent, Arrived, Late */}
      <div className="comp main4Components" id="main4Components">
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <ProductivityHigh />
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Absent />
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <LateWidget />
        </div>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <Arrived />
        </div>
      </div>

      {/* Productive, Slacking */}
      <div
        className="comp twoComponents"
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          gap: "10px",
        }}
      >
        {/* Productive Component */}
        <ProductionInPercentile />

        {/*Slacking Component*/}
        <SlackingInPercentile />
      </div>
    </div>
  );
}

export default SectionTwo;
