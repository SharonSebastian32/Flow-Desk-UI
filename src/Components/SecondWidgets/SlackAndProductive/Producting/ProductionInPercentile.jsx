import "./ProductionInPercentile.scss";
import { MdOutlineTrendingUp } from "react-icons/md";
import Nav from "../../../../assets/Navigator.png";
import Bar from "../../../../assets/BarIcon.png";
function ProductionInPercentile() {
  return (
    <div className="production-in-percentile">
      <div className="ppercentile-details">
        <div className="icon-content-percentile">
          <div>
            <span
              id="productivity-icon"
              style={{ color: "#4F45B6" }}
              class="material-symbols-outlined"
            >
              avg_time
            </span>
          </div>
          <div className="ppercentile-content">Productive</div>
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
            color: "#4F45B6",
          }}
        >
          30%
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
            src={Bar}
            alt=""
            style={{
              height: "33px",
              width: "30px",
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

export default ProductionInPercentile;
