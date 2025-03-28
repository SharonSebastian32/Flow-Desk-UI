import "./ProductiveMost.scss";
import React from "react";
import "../../ProductivityApps/ProductiveApp.scss";
import { FaArrowTrendUp } from "react-icons/fa6";
import Navi from "../../../assets/Navigator.png";
function MostProductive() {
  const MostProductivePersons = [
    {
      id: 1,
      fname: "Mariya Biya Elizabath",
      time: "4h 15m",
      avatarColor: "#ffd901",
      avatar: "M",
      profileImage:
        "https://i.pinimg.com/736x/fd/7d/fd/fd7dfd97a98a67c71bdf239dae7be115.jpg",
    },
    {
      id: 2,
      fname: "Farsin",
      time: "9h 15m",
      avatarColor: "#00ff91",
      avatar: "F",
    },
  ];
  return (
    <>
      <div className="productive-apps">
        <div className="sub-container">
          <div className="title-section">
            <span className="productive-apps-title">Most Productive</span>
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
        {MostProductivePersons.map((item) => (
          <div className="desk-bar-container" key={item.id}>
            <div className="user-info">
              {/* <div
                className="avatar"
                style={{ backgroundColor: item.avatarColor }}
              >
                <span className="name-avatar">{item.avatar}</span>
              </div> */}

              <div
                className="avatar"
                style={{
                  backgroundColor: item.avatarColor,
                  backgroundImage: item.profileImage
                    ? `url(${item.profileImage})`
                    : null,
                  backgroundSize: item.profileImage ? "cover" : null,
                  backgroundPosition: item.profileImage ? "center" : null,
                }}
              >
                {!item?.profileImage && (
                  <span className="name-avatar">{item.avatar}</span>
                )}
              </div>
              <div className="user-name">{item.fname}</div>
            </div>
            <div className="desk-time">{item.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MostProductive;
