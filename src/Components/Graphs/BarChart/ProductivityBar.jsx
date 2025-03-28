import React from "react";
import "./ProductivityBar.scss";
import BarChart from "../../BarGraph/BarChart";
function ProductivityBar() {
  return (
    <>
      <div>
        <div
          className="productivity-bar-container"
          style={{
             margin: "30px 20px",
          }}
        >
          <BarChart />
        </div>
      </div>
    </>
  );
}

export default ProductivityBar;
