import React from 'react';

const Education = props => {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <p>{props.startYear} - {props.endYear}</p>
          </div>
          <div className="col-8">
            <h4>{props.schoolName}</h4>
            <p>{props.schoolDescription}</p>
          </div>
        </div>
      </div>
    )
};

export default Education;
