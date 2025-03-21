import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { TbClock2 } from "react-icons/tb";
import { BsFillPersonFill } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { PiImageLight } from "react-icons/pi";
import { RiQuestionnaireLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";

function SideBar() {
  return (
    <div id="sidebar">
      <div
        className="menuIcons"
        style={{
          color: "white",
        }}
      >
        <IoMenuSharp id="menu" />
        <div className="menu-groups">
          <GrAppsRounded id="apps" />
          <TbClock2 id="clock" />
          <BsFillPersonFill id="person" />
          <MdGroups id="groups" />
          <PiImageLight id="image" />
          <RiQuestionnaireLine id="question" />
          <IoSettingsOutline id="settings" />
          <TbLogout2
            id="logout"
            onClick={() => {
              alert("Logout");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
