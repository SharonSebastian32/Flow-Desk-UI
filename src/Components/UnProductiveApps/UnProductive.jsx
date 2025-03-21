import React from "react";
import "./UnProductive.scss";

import { FaArrowTrendUp } from "react-icons/fa6";

import Navi from "../../assets/Navigator.png";
function UnProductive() {
  const UnProductive = [
    {
      id: 1,
      title: "Drive",
      icon: "../../../src/assets/Drive.png",
      time: "15m",
      color: "#DE4313",
    },

    {
      id: 2,
      title: "Facebook",
      icon: "../../../src/assets/Facebook.png",
      time: "15m",
      color: "#DE4313",
    },
  ];
  return (
    <>
      <div className="productive-apps">
        <div className="sub-container">
          <div className="title-section">
            <span className="productive-apps-title">UnProductive Apps</span>
            <span className="arrow-container">
              <span>
                <FaArrowTrendUp id="arrow-down-icon" />
              </span>
              <span>+3% Increase than yesterday</span>
            </span>
          </div>
          <div>
            <img src={Navi} />
          </div>
        </div>
      </div>

      {UnProductive.map((item) => {
        return (
          <div className="app-bar" key={item.id}>
            <div className="sub-app-bar">
              <img src={item.icon} alt="image" />
              <span id="app-name">{item.title}</span>
            </div>
            <div
              id="time-text"
              style={{
                color: item.color,
              }}
            >
              {item.time}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default UnProductive;
