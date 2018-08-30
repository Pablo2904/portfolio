import React from 'react';
import Education from "./Education";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="resumeWrapper container-fluid">
      <div className="row py-3 justify-content-center">
        <div className="col-11 col-lg-3 mr-2 resumeWrapper__left">
          <h2>Paweł Kościelny</h2>
          <h4 className="my-4">FrontEnd Developer</h4>
          <hr className="mx-0"/>
          <p className="w-75">Currently i focus on learning React/Redux library, also I start to discover Materialize CSS and get know about SASS advantages over pure CSS.</p>
          <hr className="mx-0"/>
          <h5>Adress</h5>
          <p>Włosienica ul. 1 Maja 20 </p>
          <h5>Phone</h5>
          <p>+48514719812</p>
          <h5>Email</h5>
          <p>pawel.koscielny2904@gmail.com</p>
          <hr className="mx-0"/>
        </div>

        <div className="col-11 col-lg-7 resumeWrapper__right p-3">
          <h2>Education</h2>
          <Education
            startYear={2008}
            endYear={2012}
            schoolName="PZS nr 3 in Oświęcim"
            schoolDescription="Technician degree of Logistic"
          />
          <Education
            startYear={2012}
            endYear={2018}
            schoolName="University of Science and Technology"
            schoolDescription="Bachelor degree of Mining and Geology"
          />
          <hr />
          <h2>Experience</h2>
          <Education
            startYear={2018}
            endYear="present"
            schoolName="Design and Development"
            schoolDescription="Perfecting the skills and discovering new technologies by developing own projects"
          />
          <hr />
          <h2>Skills</h2>
          <Skills
            skill = {[
              ['HTML5', 'Good', '#00e676' ],
              ['CSS3', 'Good', '#00e676' ],
              ['SASS', 'Basic', '#1de9b6'],
              ['JavaScript & ES6', 'Medium', '#00b0ff'],
              ['Bootstrap', 'Medium', '#00b0ff'],
              ['Materialize CSS', 'Basic', '#1de9b6'],
              ['GitHub', 'Medium', '#00b0ff'],
              ['React/Redux', 'Basic', '#1de9b6'],
              ['NodeJS', 'Basic', '#1de9b6'],
              ['Joomla!', 'Basic', '#1de9b6'],
              ['Photoshop', 'Basic', '#1de9b6'],
            ]}
          />

        </div>

      </div>
    </div>
  );
};

export default Resume;
