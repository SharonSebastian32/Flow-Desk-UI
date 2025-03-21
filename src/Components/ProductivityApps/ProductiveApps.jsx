import React from "react";
import "./ProductiveApp.scss";
import { FaArrowTrendUp } from "react-icons/fa6";
import Navi from "../../assets/Navigator.png";
function ProductiveApps() {
  const ProductiveApps = [
    {
      id: 1,
      title: "Chrome",
      icon: "../../../src/assets/Chrome.png",
      time: "15m",
      color: "#4BC769",
    },

    {
      id: 2,
      title: "Figma",
      icon: "../../../src/assets/Figma.png",
      time: "15m",
      color: "#4BC769",
    },
  ];
  return (
    <>
      <div className="productive-apps">
        <div className="sub-container">
          <div className="title-section">
            <span className="productive-apps-title">Productivity Apps</span>
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

      {ProductiveApps.map((item, id) => {
        return (
          <div className="app-bar" key={id}>
            <div className="sub-app-bar">
              <img src={item.icon} alt="image" />
              <span id="app-name">{item.title}</span>
            </div>
            <div id="time-text" style={{ color: item.color }}>
              {item.time}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductiveApps;
