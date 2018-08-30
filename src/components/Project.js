import React, {Component} from 'react';

class Project extends Component{

  render()  {

    return(
      <div className="projectWrapper_card py-3">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{this.props.projectTitle}</h2>
            <div className="projectWrapper__info">
              <p className="card-text">{this.props.projectDescription}</p>
              <p>Technology Stack:</p>
              <ul className="pl-0">
                {this.props.techStack.map(item => {
                  return (
                    <li key={item}>
                      {item}
                    </li>
                  )
                })}
              </ul>
              <img className="img-fluid "src={this.props.imageSource} alt="Weather app"/>
            </div>
            <div className="projectWrapper__buttons d-flex justify-content-around flex-wrap">
              <a href={this.props.gitHub}>github</a>
              <a href={this.props.liveDemo}>Live demo</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
