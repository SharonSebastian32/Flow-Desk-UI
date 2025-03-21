import React from "react";
import "./SectionThree.scss";
import DeskTime from "../ThirdWidgets/DeskTime/DeskTime";
import MostProductive from "../ThirdWidgets/MostProductive/MostProductive";
import MostUnProductive from "../ThirdWidgets/MostUnProductive/MostUnProductive";
import MostEffective from "../ThirdWidgets/MostEffective/MostEffective";

function SectionThree() {
  return (
    <div className="section-three">
      <div className="total desktime">
        <DeskTime />
      </div>
      <div className="total productive">
        <MostProductive />
      </div>
      <div className="total unproductive">
        <MostUnProductive />
      </div>
      <div className="total effective">
        <MostEffective />
      </div>
    </div>
  );
}

export default SectionThree;
