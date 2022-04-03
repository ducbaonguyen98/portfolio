import React from "react";
import CardImage from "./CardImage";

const data = [
  {
    title: "Tools Marketing Online",
    subTitle: "Web",
    link: "https://admin.fff.com.vn/account/",
    img: require("../../images/fff.png"),
    skill: "PHP - HTML - CSS - JavaScript",
    numberOfMembers: 4,
  },
  {
    title: "Truyen E",
    subTitle: "Web",
    link: "https://truyene.com/",
    img: require("../../images/truyene.png"),
    skill: "PHP - HTML - CSS - JavaScript",
    numberOfMembers: 3
  },
  {
    title: "Truyen E",
    subTitle: "Mobile",
    link: "https://truyene.com/",
    img: require("../../images/truyeneapp.png"),
    skill: "React Native",
    numberOfMembers: 2
  },
  {
    title: "Blockchain Nut Token",
    subTitle: "Web",
    link: "https://nut.money/",
    img: require("../../images/nut.png"),
    skill: "React JS",
    numberOfMembers: 5,
  },
  {
    title: "Blockchain MoonShip Token",
    subTitle: "Web",
    link: "https://moonship.finance/",
    img: require("../../images/moonship.png"),
    skill: "React JS",
    numberOfMembers: 4,
  },
  {
    title: "Blockchain Give Token",
    subTitle: "Web",
    link: "https://givetoken.co/",
    img: require("../../images/givetoken.png"),
    skill: "React JS",
    numberOfMembers: 3,
  },
  {
    title: "Blockchain Favo Swap",
    subTitle: "Web",
    link: "https://swap.favofi.com/",
    img: require("../../images/favoswap.png"),
    skill: "Node JS - React JS",
    numberOfMembers: 3,
  },
  {
    title: "Blockchain Favo Airdrop",
    subTitle: "Web",
    link: "https://favodrop.com/",
    img: require("../../images/favoairdrop.png"),
    skill: "Node JS - React JS",
    numberOfMembers: 3,
  },
  {
    title: "Blockchain FAVO Token",
    subTitle: "Web",
    link: "https://favofi.com/",
    img: require("../../images/favofi.png"),
    skill: "Node JS - Next JS",
    numberOfMembers: 1,
  }
]

const Project = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {
        data.map((item, index) => <CardImage key={index.toString()} title={item.title} subTitle={item.subTitle} link={item.link} src={item.img} skill={item.skill} numberOfMembers={item.numberOfMembers}/> )
      } 
    </div>
  );
};

export default Project;
