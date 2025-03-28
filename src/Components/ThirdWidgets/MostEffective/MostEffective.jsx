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
      profileImage:
        "https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=M-NZRrneQfo~k9Na4uKOYU2-3T3k8csQoRGLg1eDizrS3OgUxK5pUExhsRudT8~q7q-vUL2Xsw-ZtbiFQ2hZrXF~Gdr8CCsz2fbUtWTb~ZDl3NWZ7R5RU~dJP-W95nPTtSZMbMKw6sKOWZaAG1MWH4McjQvuUC5qm4hECayEjzdgM-B15iJNHkoUQEPGtSwfPbM6GGQxgm~DPBTJew2tA0Ol8VHIq7PXIRWj69YsLQlyPMIGP03J9yNk9S-SAdcRn~TMqEi3AuLd4noEIdeVAXrPuJ1ZgzsMP8DHIgg9iA~xz7OGPlnQSmBWE-o0ApWHJk2uVck0U10BzEN5LDr5-A__",
    },
    {
      id: 2,
      fname: "Awsinjith",
      time: "9h 00m",
      avatarColor: "#b6ffc8",
      avatar: "A",
      profileImage:
        "https://i.pinimg.com/736x/48/c2/54/48c254bf8bad137eee5ae413cc91978b.jpg",
    },
  ];

  return (
    <>
      <div className="most-log-container">
        <div>
          <span className="title-desk">Most Effective</span>
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
                style={{
                  backgroundColor: item.avatarColor,
                  backgroundImage: item.profileImage
                    ? `url(${item.profileImage})`
                    : null,
                  backgroundSize: item.profileImage ? "cover" : null,
                  backgroundPosition: item.profileImage ? "center" : null,
                }}
              >
                {!item?.profileImage && (
                  <span className="name-avatar">{item.avatar}</span>
                )}
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
