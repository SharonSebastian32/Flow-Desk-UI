import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";

import Logo from "../../assets/Logo.png";
import "./Header.scss";
function Header() {
  return (
    <div>
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "6px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <div>
            <img
              src={Logo}
              alt=""
              style={{
                width: "144px",
                height: "36px",
              }}
            />
          </div>
          <div>
            <input id="search-bar-input" type="text" />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            // backgroundColor: "red",

            gap: "15px",
          }}
        >
          <div>
            <BiMessageRoundedDetail className="notification-icon" />
          </div>

          <div>
            <MdOutlineNotifications className="notification-icon" />
          </div>


          <div id="profile-role-name">
            <div>Admin</div>
            <div>Muhammed Navab</div>
          </div>
          <div id="avatar-profile">MN</div>
        </div>
      </div>

      <div className="line-seperator"></div>
      <div className="sub-header">
        <div className="text-dash">Dashboard</div>
        <div id="calendar-setup">
          <div id="date-info"> December 25 2024</div>
          <div>
            <FaCalendarDays className="calendar-icon" />
          </div>
          <div>
            <div>
              <GoChevronLeft id="left-nav" />
              <GoChevronRight id="right-nav" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
