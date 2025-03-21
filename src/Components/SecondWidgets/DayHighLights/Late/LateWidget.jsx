import "./LateWidget.scss";
import React from "react";
import "../Productivity/ProductivityHigh.scss";
import late from "../../../../assets/laste.png";
import Navi from "../../../../assets/Navigator.png";
import LateRechart from "../../../Graphs/ReaGradienntCharts/LateRechart/LateRechart";
function LateWidget() {
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
              src={late}
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
          <div className="productivity-text">Late</div>
        </div>

        <div
          style={{
            alignItems: "center",
            display: "flex",
            paddingTop: "7px",
            color: "#F37F33",
          }}
          className="productivity-percentage"
        >
          8
        </div>

        <div
          style={{
            display: "flex",
            paddingTop: "38px",
            flexDirection: "column",
            margin: "5px",
            color: "black",
          }}
        >
          <div
            style={{
              border: "1px solid #e8e8e8",
              marginTop: "26px",
              width: "261px",
              height: "38px",
              top: "137px",
              left: "16px",
              gap: "120px",
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
                  backgroundColor: "#ff007b",
                  color: "white",
                  borderRadius: "50px",
                  height: "33px",
                  width: "33px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                N
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
                Nidha
              </div>
            </div>
            <div
              style={{
                fontFamily: "Montserrat",
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0px",
                color: "#E24C4C",
              }}
            >
              10m
            </div>
          </div>
        </div>
      </div>
      <div className="productivity-high-right">
        <LateRechart
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

export default LateWidget;
