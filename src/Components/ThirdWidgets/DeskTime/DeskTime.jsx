import "../../MostLogged/MostLogged.scss";
import Navi from "../../../assets/Navigator.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import "./DeksTime.scss";
function DeskTime() {
  const DESK_TIME = [
    {
      id: 1,
      fname: "Amrutha",
      time: "8h 15m",
      avatarColor: "#ad7af5",
      avatar: "A",
    },
    {
      id: 2,
      fname: "Sharon",
      time: "5h 15m",
      avatarColor: "#c7e566",
      avatar: "S",
    },
  ];
  return (
    <>
      <div className="most-log-container">
        <div>
          <span className="title-desk">Total DeskTime</span>
          <div className="arrow-container">
            <span>
              <FaArrowTrendUp className="arrow-down-icon" />
            </span>
            <span>+3% Increase than yesterday</span>
          </div>
        </div>
        <div>
          <img src={Navi} alt="" />
        </div>
      </div>
      <div className="desk-bar">
        {DESK_TIME.map((item) => (
          <div className="desk-bar-container" key={item.id}>
            <div className="user-info">
              <div
                className="avatar"
                style={{ backgroundColor: item.avatarColor }}
              >
                <span className="name-avatar">{item.avatar}</span>
              </div>
              <div className="user-name">{item.fname}</div>
            </div>
            <div className="desk-time">{item.time}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default DeskTime;
