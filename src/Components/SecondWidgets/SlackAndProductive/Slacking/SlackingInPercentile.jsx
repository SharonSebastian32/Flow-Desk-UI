import "./SlackingInPercentile.scss";
import { MdOutlineTrendingUp } from "react-icons/md";
import Nav from "../../../../assets/Navigator.png";
import OrangeBar from "../../../../assets/OrangeBar.png";
import Hash from "../../../../assets/hash.png";
function SlackingInPercentile() {
  return (
    <div className="production-in-percentile">
      <div className="ppercentile-details">
        <div className="icon-content-percentile">
          <div>
            <img
              src={Hash}
              alt=""
              style={{
                color: "#00A76F",
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
          <div className="ppercentile-content">Slacking</div>
        </div>
        <div
          style={{
            paddingTop: "25px",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "24px",
            lineHeight: "100%",
            letterSpacing: "0px",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            color: "#FFAB00",
          }}
        >
          5%
        </div>
        <div>
          <div
            style={{
              fontFamily: "Lexend",
              fontWeight: 300,
              fontSize: "16px",
              lineHeight: "100%",
              letterSpacing: "0px",
              paddingTop: "24px",
              color: "#252C58",
            }}
          >
            Lorem ipsum
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div>
              <MdOutlineTrendingUp id="trend-arrow-up" />
            </div>
            <div
              className="ppercentile-content-1"
              style={{
                color: "#252C58",
                fontFamily: "Lexend",
                fontWeight: 300,
                fontSize: "12px",
                lineHeight: "100%",
                letterSpacing: "0px",
              }}
            >
              -10% Less than yesterday
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div
        className="ppercentile-charts"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "45px",
        }}
      >
        <div>
          <img
            src={OrangeBar}
            alt=""
            style={{
              height: "33px",
              width: "30px",
              color: "#FFAB00",
            }}
          />
        </div>
        <div>
          <img
            style={{
              marginTop: "20px",
              height: "68px",
              width: "68px",
            }}
            src={Nav}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SlackingInPercentile;
