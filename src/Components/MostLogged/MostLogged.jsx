import React from "react";
import "./MostLogged.scss";
import Navi from "../../assets/Navigator.png";
import { MdGroups } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";

function MostLogged() {
  return (
    <>
      <div className="most-log-container">
        <div>
          <span id="title">Most offline Time Logges</span>
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
        <MdGroups id="group-icon" />
        <span>No One is Offline</span>
      </div>
    </>
  );
}

export default MostLogged;
