import "./Absent.scss";
import React from "react";
import "../Productivity/ProductivityHigh.scss";
import AbsentImage from "../../../../assets/AbsentIcon.png";
import Navi from "../../../../assets/Navigator.png";
import AbsentRechart from "../../../Graphs/ReaGradienntCharts/AbsentRechart/AbsentRechart";

function Absent() {
  const AbsentData = [
    {
      id: 1,
      fname: "Sharon",
      avatar: "S",
      avatarColor: "red",
    },
    {
      id: 2,
      fname: "Mariya",
      avatar: "M",
      avatarColor: "#be0688",
    },
  ];

  return (
    <div className="productivity-high">
      <div className="productivity-high-left">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            margin: "5px",
            alignItems: "center",
            paddingTop: "0px",
          }}
        >
          <div>
            <img
              src={AbsentImage}
              alt=""
              style={{
                color: "green",
                backgroundColor: "#F1F1F1",
                height: "40px",
                width: "40px",
                padding: "10px",
                borderRadius: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </div>
          <div className="productivity-text">Absent</div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            paddingTop: "7px",
            color: " #DE4313",
          }}
          className="productivity-percentage"
        >
          10
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: "38px",
            flexDirection: "row",
            margin: "5px",
            color: "black",
            gap: "10px", // Added gap between employee cards
          }}
        >
          {/* absentes information */}
          {AbsentData.map((item) => (
            <div
              key={item.id}
              style={{
                marginTop: "26px",
                border: "1px solid #e8e8e8",
                width: "130px",
                height: "38px",
                top: "137px",
                left: "16px",
                borderRadius: "20px",
                borderWidth: "1px",
                paddingTop: "4px",
                paddingRight: "10px",
                paddingBottom: "4px",
                paddingLeft: "4px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    backgroundColor: item.avatarColor,
                    color: "white",
                    borderRadius: "50px",
                    height: "33px",
                    width: "33px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.avatar}
                </div>
                <div
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "100%",
                    letterSpacing: "0px",
                  }}
                >
                  {item.fname}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="productivity-high-right">
        <AbsentRechart
          style={{
            height: "50%",
            width: "100%",
            backgroundColor: "#9cff6a",
            color: "black",
          }}
        />

        <div
          style={{
            height: "30%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src={Navi}
            alt=""
            style={{
              height: "68px",
              width: "68px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Absent;
