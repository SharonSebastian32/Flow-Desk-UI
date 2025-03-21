import React from "react";
import "../Productivity/ProductivityHigh.scss";
import { IoMdTrendingUp } from "react-icons/io";
import Navi from "../../../../assets/Navigator.png";
import ArrivedImage from "../../../../assets/arrived.png";
import ArrivedReChart from "../../../Graphs/ReaGradienntCharts/ArrivedReChart/ArrivedReChart";
function Arrived() {
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
              src={ArrivedImage}
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
          <div className="productivity-text" style={{}}>
            Arrived
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            paddingTop: "7px",
            color: "#4F45B6",
          }}
          className="productivity-percentage"
        >
          30
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "30px",
            flexDirection: "column",
            margin: "5px",
            color: "black",
          }}
        >
          <div
            style={{
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: 16,
              lineHeight: "100%",
              letterSpacing: 0,
              padding: "3px",
              color: "#252C58",
            }}
          >
            On Time
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "3px",
              gap: "5px",
            }}
          >
            <div>
              <IoMdTrendingUp
                style={{
                  color: "#43900C",
                  backgroundColor: "#e5ffd8",
                  height: "20px",
                  width: "20px",
                  padding: "5px",
                  borderRadius: "50px",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "Lexend",
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#252C58",
              }}
            >
              -10% Less than yesterday
            </div>
          </div>
        </div>
      </div>
      <div className="productivity-high-right">
        <ArrivedReChart
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
            // backgroundColor: "yellow",
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

export default Arrived;
