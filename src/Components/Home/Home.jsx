import React from "react";
import "../../Styles/Home.css";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import SectionOne from "../Widget/SectionOne";
import SectionTwo from "../Widget/SectionTwo";
import SectionThree from "../Widget/SectionThree";
import SectionFour from "../Widget/SectionFour";
function Home() {
  return (
    <div className="home">
      <SideBar />
      <div id="DataInformation">
        {/* Header info */}
        <Header />
        {/* DashBoard Section One */}
        <div
          style={{
            margin: "10px",
          }}
        >
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
        </div>
      </div>
    </div>
  );
}

export default Home;
