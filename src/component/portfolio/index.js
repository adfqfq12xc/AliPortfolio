import React from "react";
import "./styles.scss";
import Header from "../pageheadercomponenet";
import { BsInfoCircleFill } from "react-icons/bs";

// Static imports for images
import socialMediaAppImage from "./assets/5.jpeg";
import gymAppImage from "./assets/gym.png";
import paris from './assets/paris.jpeg';

export default function Index() {

  const data = [
    {
      label: "Gym App",
      value: gymAppImage,
      link: "https://adfqfq12xc.github.io/GymRep/", // Add the URL for the link
    },
    {
      label: "Social Media App",
      value: socialMediaAppImage,
      link: "https://example.com/social-media-app", // Add the URL for the link
    },
    {
      label: "Tour App",
      value: paris,
      link: "https://example.com/tour-app", // Add the URL for the link
    }
  ];

  const handleClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
      <Header
        prop={{ header: "Portfolio", icon: <BsInfoCircleFill size={40} /> }}
      />
      <div className="portfoliocontainer">
        {data.map((item, index) => (
          <div 
            className="portfolio" 
            key={index} 
            onClick={() => handleClick(item.link)}
          >
            <img src={item.value} alt="" className="portfolio-image" />
            <div className="div">
              <p className="text">{item.label}</p>
              <button>Show</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
