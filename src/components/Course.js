import React from 'react';

const Course = props => {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <p>{props.year}</p>
          </div>
          <div className="col-8">
            <h4>{props.courseName}</h4>
            <p>{props.courseDescription}</p>
          </div>
        </div>
      </div>
    )
};

export default Course;
