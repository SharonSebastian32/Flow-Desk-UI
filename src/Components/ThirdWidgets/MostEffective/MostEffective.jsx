import "../../MostLogged/MostLogged.scss";
import Navi from "../../../assets/Navigator.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import "../DeskTime/DeksTime.scss";
function MostEffective() {
  const MostEffectivePersons = [
    {
      id: 1,
      fname: "Shibin",
      time: "9h 15m",
      avatarColor: "#c3c3fd",
      avatar: "S",
    },
    {
      id: 2,
      fname: "Awsinjith",
      time: "9h 00m",
      avatarColor: "#b6ffc8",
      avatar: "A",
    },
  ];
  return (
    <>
      <div className="most-log-container">
        <div>
          <span className="title-desk">Most Effctive</span>
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
        {MostEffectivePersons.map((item) => (
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

export default MostEffective;
