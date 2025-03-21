import React from "react";
import "./ProductivityBar.scss";
import BarChart from "../../BarGraph/BarChart";
function ProductivityBar() {
  return (
    <>
      <div>
        <div className="productivity-bar-container">
          <BarChart />
        </div>
      </div>
    </>
  );
}

export default ProductivityBar;
