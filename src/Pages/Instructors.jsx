import React from "react";
import "./Instructors.css";
import Hero from "../Components/Hero";
import HeroImg from "../assets/Hero_Section/Team.jpg";
import TeamImg from "../assets/Team/Empty.png";
import Abdul_Sattar from "../assets/Team/Abdul_Sattar.jpg";
import Sir_Yasir from "../assets/Team/Sir_Yasir_Bashir.jpg";
import Sir_Naveed from "../assets/Team/Sir_Naveed.jpg";
import Sir_Wahid from "../assets/Team/Sir_Wahid.jpg";
import Sir_Tahir from "../assets/Team/Sir_Tahir_imran.jpg";
import Sir_Zohaib from "../assets/Team/Sir_Zohaib.jpg";
import Sir_Yasir_Shabbir from "../assets/Team/Sir_Yasir_Shabir.jpg";
import Sir_Sajid_Javaid from "../assets/Team/Sir_Sajid_Javaid.jpg";
import Sir_Sajid_Ali from "../assets/Team/Sir_Sajid_Ali.jpg";
import Sir_Rizwan from "../assets/Team/Sir_Rizwan.jpg";

const TeamData = [
  {
    Image: TeamImg,
    Name: "ABC...",
    Title: "Head Master",
  },
  {
    Image: Abdul_Sattar,
    Name: "Abdul Sattar",
    Title: "SSE (Sc) M.Sc(Phy)",
  },
  {
    Image: Sir_Yasir,
    Name: "Yasir Bashir",
    Title: "SST & M.Sc(Com.Sc)",
  },
  {
    Image: Sir_Naveed,
    Name: "Naveed Fiaz",
    Title: "SST(Bio) B.Ed",
  },
  {
    Image: Sir_Wahid,
    Name: "Wahid Iqbal",
    Title: "SSE(Eng.) M.A(Eng.)",
  },
  {
    Image: Sir_Yasir_Shabbir,
    Name: "Yasir Shabbir",
    Title: "SSE(Eng.)",
  },
  {
    Image: Sir_Zohaib,
    Name: "Zohaib Ayub",
    Title: "SESE",
  },
  {
    Image: Sir_Tahir,
    Name: "Tahir Imran",
    Title: "SSE(Eng.)",
  },
  {
    Image: Sir_Sajid_Javaid,
    Name: "Sajid Javaid",
    Title: "EST(G)",
  },
  {
    Image: Sir_Sajid_Ali,
    Name: "Sajid Ali Naseem",
    Title: "SSE(Urdu)",
  },
  {
    Image: Sir_Rizwan,
    Name: "Rizwan Khalid",
    Title: "EST(Math) M.Phil(Phy)",
  },
  {
    Image: TeamImg,
    Name: "Shehzad SB",
    Title: "SSE",
  },
  {
    Image: TeamImg,
    Name: "Muddassar Hayat",
    Title: "EST(G) M.A(Urdu)",
  },
  {
    Image: TeamImg,
    Name: "Ghazanfar Ali",
    Title: "EST(Eng.) M.A(Econ.)",
  },
];
function Instructors() {
  return (
    <div className="Team_wrapper">
      <Hero
        title="𝙶𝚘𝚟𝚝 𝚉𝚊𝚖𝚒𝚗𝚍𝚊𝚛𝚊 𝙸𝚜𝚕𝚊𝚖𝚒𝚊 𝙷𝚒𝚐𝚑 𝚂𝚌𝚑𝚘𝚘𝚕"
        disc="Team Page"
        HeroImg={HeroImg}
        path="/"
        Name="Home"
      />
      <div className="Heading">
        <h1>Meet with Team</h1>
        <p>Our School Honour</p>
      </div>
      <div className="Card_d">
        {TeamData.map((list, idx) => (
          <div className="Box_wrapper">
            <div key={idx} className="Team_Card">
              <div className="Card">
                <div className="bg">
                  <img src={list.Image} alt="" />
                </div>
                <div className="Card_overlay">
                  <h5>{list.Name}</h5>
                  <span>{list.Title}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Instructors;
