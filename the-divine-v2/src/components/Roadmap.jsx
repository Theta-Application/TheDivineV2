import React, { useState } from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import "../css/work.css";
import { motion } from "framer-motion";
import WorkPiece from "./WorkPiece";

function Roadmap() {
  const [modal, showModal] = useState(false);

  // variants for parent animation
  const parentList = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };

  const imagelinks = [
    {
      name: "TouchBase",
      color: "#131b37",
      website: "https://touch-base.us",
      github: "https://github.com/Touch-Base",
      frameworks: ["React", "Node.js", "Redux", "Express"],
      imagelink: "https://i.imgur.com/mrWcNoF.png",
      description:
        "Web and mobile app designed to take the stress out of the job application process for job-seeking professionals",
    },
    {
      name: "McGarvin Engineering Website",
      color: "#603b27",
      website: "https://thirsty-cray-709738.netlify.app/",
      github: null,
      frameworks: ["React", "AWS", "SASS"],
      imagelink: "https://i.imgur.com/ydYqINx.png",
      description:
        "Fully functional and responsive website design for McGarvin Engineering.",
    },
    {
      name: "Conway's Game of Life",
      color: "#000000",
      website: "https://zen-austin-ce6ed3.netlify.app/",
      github:
        "https://github.com/anthonyvigz/GameOfLife/tree/master/gameoflife",
      frameworks: ["React", "Python"],
      imagelink: "https://i.imgur.com/jyXGXIA.png",
      description:
        "Interpretation of Conway's Game of Life; a visual representation of an algorithmic solution.",
    },
    {
      name: "Freehold",
      color: "#6b54df",
      website: "https://freehold.dev",
      github: "https://github.com/Lambda-School-Labs/property-manager-fe",
      frameworks: ["React", "Node.js", "Redux", "Express"],
      imagelink: "https://i.imgur.com/igevTeB.png",
      description:
        "Web app designed to increase communication between property owners and tenants.",
    },
    {
      name: "Hogger",
      color: "#00cacd",
      website: null,
      github: "https://github.com/steveo-app",
      frameworks: ["React", "Node.js", "Redux", "Express"],
      imagelink: "https://i.imgur.com/VLRCfXM.png",
      description:
        "Mobile web app that keeps track of disc golf scores and courses.",
    },
    {
      name: "EAF Custom Decks",
      color: "#0b9b41",
      website: "https://eafcustomdeck.com",
      github: "https://github.com/anthonyvigz/EAFWebsite/tree/master/eaf",
      frameworks: ["React", "AWS", "SASS"],
      imagelink: "https://i.imgur.com/LxyNHq3.png",
      description:
        "Fully functional and responsive website design for EAF Custom Decks.",
    },
    {
      name: "Blue Sky Lab",
      color: "#0082d2",
      website: "https://festive-rosalind-c155c2.netlify.app/",
      github: "https://github.com/anthonyvigz/BlueSky",
      frameworks: ["React", "AWS", "SASS"],
      imagelink: "https://i.imgur.com/ZA2u5Yc.png",
      description:
        "Fully functional and responsive website design for Blue Sky Lab.",
    },
    {
      name: "Stock Market Trading Algorithm",
      color: "#b77c6b",
      website: null,
      github: null,
      frameworks: ["Python", "Polygon", "Alpaca", "WebSockets"],
      imagelink: "https://i.imgur.com/0gXCgkE.png",
      description:
        "Patented and protected multi-module trading algorithm designed to make trades in the stock market on certain conditions.",
    },
  ];

  return (
    <AbsoluteWrapper>
      <h5 className="projectsHeader">Projects</h5>
      <div className="emptyBorder"></div>
      <motion.div
        variants={parentList}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="allWork"
        onMouseEnter={() => {
          showModal(true);
        }}
      >
        <div
          onClick={() => {
            showModal(false);
          }}
          className={modal ? "modal" : null}
        ></div>
        {imagelinks.map((piece, index) => {
          return <WorkPiece piece={piece} key={index} />;
        })}
      </motion.div>
      <h5 className="projectsHeader">Demo Video</h5>
      <div className="emptyBorder"></div>
      <iframe
        title="TouchBaseDemo"
        src="https://player.vimeo.com/video/406958066"
        width="640"
        height="360"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
    </AbsoluteWrapper>
  );
}

export default Roadmap;
