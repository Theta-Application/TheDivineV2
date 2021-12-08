import React from 'react';
import '../css/work.css';

function ProjectBlock(props) {

    let image = props.image;
    let link = props.link;

  return (
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <div className="mainBlock">
          <img className="projectImg" src={image} alt="test" />
          <div className="hoverBlock" style={{backgroundColor: props.color}}>
              <h1 className="projectTitle">{props.name}</h1>
              <h2 className="projectDesc">{props.description}</h2>
              <i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
          </div>
      </div>
    </a>
  );
}

export default ProjectBlock;
