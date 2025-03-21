import React from "react";
import "../MostLogged/MostLogged.scss";
import "./NeutralApp.scss";
import Navi from "../../assets/Navigator.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";

function NeutralApp() {
  return (
    <>
      <div className="most-log-container">
        <div>
          <span id="title">Neutral Apps</span>
          <div className="arrow-container">
            <span>
              <FaArrowTrendUp className="arrow-down-icon" />
            </span>
            <span>+3% Increase than yesterday</span>
          </div>
        </div>
        <div>
          <img src={Navi} alt="" />
        </div>
      </div>
      <div className="no-one-offline">
        <GrAppsRounded id="group-icon" />
        <span className="span-neutral">
          <span> Your team haven’t used</span>
          <span>neutral apps yet </span>
        </span>
      </div>
    </>
  );
}

export default NeutralApp;
