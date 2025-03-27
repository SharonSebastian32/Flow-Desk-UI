import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { FaCalendarDays } from "react-icons/fa6";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";

import Logo from "../../assets/Logo.png";
import "./Header.scss";

const USER_ROLE = [
  {
    id: 45,
    role: "Admin",
    name: "Muhammed Navab",
    avatar: "MN",
    avatarColor: "#F3723E",
    avatarBackground: "#FFFFFF",
    messages: true,
    notification: true,
    isLoggedIn: true,
  },
];

function Header() {
  return (
    <div>
      <div className="header">
        <div className="left-header">
          <div>
            <img className="logo-part" src={Logo} alt="" />
          </div>
          <div>
            <input id="search-bar-input" type="text" />
          </div>
        </div>
        <div className="icon-container">
          <div className="notification-wrapper">
            <BiMessageRoundedDetail className="notification-icon" />
            {USER_ROLE[0].messages && (
              <span className="notification-dot"></span>
            )}
          </div>

          <div className="notification-wrapper">
            <MdOutlineNotifications className="notification-icon" />
            {USER_ROLE[0].notification && (
              <span className="notification-dot"></span>
            )}
          </div>

          {USER_ROLE.map((ROLE) => {
            return (
              <div className="profile-container" key={ROLE.id}>
                <div id="profile-role-name">
                  <div id="role-name">{ROLE.role}</div>
                  <div id="user-name">{ROLE.name}</div>
                </div>
                <div
                  id="avatar-profile"
                  style={{
                    color: ROLE.avatarColor,
                    background: ROLE.avatarBackground,
                  }}
                >
                  {ROLE.avatar}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <span>
        <IoMdMenu id="menu-icon" />
      </span>
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
