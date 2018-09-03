import React from 'react';

const Project = props => {
  return(
    <div className="projectWrapper_card py-3">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{props.projectTitle}</h2>
          <div className="projectWrapper__info">
            <p className="card-text">{props.projectDescription}</p>
            <p>Technology Stack:</p>
            <ul className="pl-0">
              {props.techStack.map(item => {
                return (
                  <li key={item}>
                    {item}
                  </li>
                )
              })}
            </ul>
            <img className="img-fluid "src={props.imageSource} alt={props.projectTitle}/>
          </div>
          <div className="projectWrapper__buttons d-flex justify-content-around flex-wrap">
            <a href={props.gitHub}>Github</a>
            <a href={props.liveDemo}>Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project;
