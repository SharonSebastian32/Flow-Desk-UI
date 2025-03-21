import "../MostProductive/ProductiveMost.scss";
import React from "react";
import "../../ProductivityApps/ProductiveApp.scss";
import { FaArrowTrendUp } from "react-icons/fa6";
import Navi from "../../../assets/Navigator.png";
function MostUnProductive() {
  const MostUnProductivePersons = [
    {
      id: 1,
      fname: "Nidha",
      time: "4h 15m",
      avatarColor: "#ff1b09",
      avatar: "N",
    },
    {
      id: 2,
      fname: "Sreelakshmi",
      time: "9h 15m",
      avatarColor: "#ffca01",
      avatar: "S",
    },
  ];
  return (
    <>
      <div className="productive-apps">
        <div className="sub-container">
          <div className="title-section">
            <span className="productive-apps-title">Most UnProductive</span>
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

      <div className="desk-bar">
        {MostUnProductivePersons.map((item) => (
          <div className="desk-bar-container" key={item.id}>
            <div className="user-info">
              <div
                className="avatar"
                style={{ backgroundColor: item.avatarColor }}
              >
                <span className="name-avatar">{item.avatar}</span>
              </div>
              <div className="user-name">{item.fname}</div>
            </div>
            <div
              className="desk-time"
              style={{
                color: "#e24c4c",
              }}
            >
              {item.time}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MostUnProductive;
