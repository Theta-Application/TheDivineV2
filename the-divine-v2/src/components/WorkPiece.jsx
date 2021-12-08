import React from "react";
import { motion } from "framer-motion";

export default function WorkPiece(props) {
  // variants for word animation
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -55 },
  };
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="imgBlock"
    >
      <img width="300" src={props.piece.imagelink} alt={props.index} />
      <div className="overlay" style={{ backgroundColor: props.piece.color }}>
        {props.piece.website ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.piece.website}
            className="website"
          >
            <i className="far fa-browser"></i>
          </a>
        ) : null}
        {props.piece.github ? (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={props.piece.github}
            className="github"
          >
            <i className="fab fa-github"></i>
          </a>
        ) : null}
        <div className="pieceInfo">
          <h4 className="workTitle">{props.piece.name}</h4>
          <h5 className="workDesc">{props.piece.description}</h5>
        </div>
        <div className="frameworks">
          <h6 className="frameworksTitle">Frameworks:</h6>
          {props.piece.frameworks.map((fw, index) => {
            return <h6 key={index}>{fw}</h6>;
          })}
        </div>
      </div>
    </motion.div>
  );
}
