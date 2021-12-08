import React from "react";
import "../css/slider.css";

export default function TierSlider(props) {
  const skillset = [
    {
      name: "UI/UX Design",
      text:
        "With a strong history in graphic design, I have a knack for producing eye-popping and user friendly interfaces.",
      icon: "far fa-object-group",
      opacity: 0.8,
    },
    {
      name: "Web Applications",
      text:
        "I can create and modify web content from the ground up using various front-end frameworks and database interfaces.",
      icon: "fa fa-laptop",
      opacity: 0.9,
    },
    {
      name: "Mobile Responsiveness",
      text:
        "Transforming new or existing pages to become fully responsive on all platforms is a staple in my process.",
      icon: "fas fa-mobile-alt",
      opacity: 1,
    },
    {
      name: "Custom Business Software",
      text:
        "I can take your business to the next level whether it's for eCommerce or for internal functions.",
      icon: "fas fa-cash-register",
      opacity: 0.9,
    },
    {
      name: "System Design Integration",
      text:
        "I take pride in my ability to lead or work with any team in designing products from prototype to user.",
      icon: "fas fa-crop-alt",
      opacity: 0.8,
    },
    {
      name: "Database Management",
      text:
        "Using the most modern migration systems, I can architect highly efficient and secure databases.",
      icon: "fas fa-layer-group",
      opacity: 0.9,
    },
    {
      name: "User Authentication",
      text:
        "I offer extremely assertive user authentication when designing database systems for businesses or apps that require verification.",
      icon: "fas fa-user-lock",
      opacity: 1,
    },
    {
      name: "Graphic / Video Production",
      text:
        "Having mastered the Adobe Creative Suite, I am a unique candidate with a history in photo and video production.",
      icon: "fas fas fa-video",
      opacity: 0.9,
    },
  ];

  return (
    <div data-aos="fade-right" className="sliderBg">
      <div className="slider">
        {skillset.map((skill, index) => {
          return (
            <div
              className="slide"
              key={index}
              style={{
                transform: `translateX(${props.x}%)`,
                background: `rgba(0, 140, 255, ${skill.opacity})`,
              }}
            >
              <div className="slideInfo">
                <i className={skill.icon}></i>
                <h2>{skill.name}</h2>
                <p>{skill.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
