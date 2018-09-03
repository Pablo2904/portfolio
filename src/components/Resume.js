import React from 'react';
import Education from "./Education";
import Skills from "./Skills";
import Course from "./Course";
import SkillsPower from "./SkillsPower";

const skill = [
  ['English', 'Fluently', '#00e676'],
  ['HTML5', 'Good', '#00e676'],
  ['CSS3', 'Good', '#00e676'],
  ['SASS', 'Medium', '#00b0ff'],
  ['JavaScript & ES6', 'Good', '#00e676'],
  ['jQuery', 'Medium', '#00b0ff'],
  ['Bootstrap', 'Medium', '#00b0ff'],
  ['Materialize CSS', 'Medium', '#00b0ff'],
  ['React/Redux', 'Basic', '#1de9b6'],
  ['NodeJS', 'Basic', '#1de9b6'],
  ['Joomla!', 'Basic', '#1de9b6'],
  ['PHP', 'Basic', '#1de9b6'],
  ['Photoshop', 'Basic', '#1de9b6'],
  ['GitHub', 'Medium', '#00b0ff'],
  ['NPM', 'Basic', '#1de9b6'],
];

const Resume = () => {
    return (
    <div className="resumeWrapper container-fluid">
      <div className="row py-3 justify-content-center">
        <div className="col-11 col-lg-3 mr-2 resumeWrapper__left">
          <h2>Paweł Kościelny</h2>
          <h4 className="my-4">FrontEnd Developer</h4>
          <hr className="mx-0"/>
          <p className="w-75">Currently i focus on learning React/Redux library, also I start to discover Materialize CSS.</p>
          <hr className="mx-0"/>
          <h5>Date of Brith</h5>
          <p>29.04.1992</p>
          <h5>Adress</h5>
          <p>Włosienica ul. 1 Maja 20 </p>
          <h5>Phone</h5>
          <p>+48514719812</p>
          <h5>Email</h5>
          <p>pawel.koscielny2904@gmail.com</p>
          <h5>GitHub</h5>
          <p>github.com/Pablo2904</p>
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
          <h2>Courses</h2>
          <Course
            year={2018}
            courseName="Front-end Developer"
            courseDescription="Centrum Szkoleń Informatycznych Vedius"
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
          <div className="row">
            <div className="col-7 col-sm-4 col-md-3 col-lg-4">
              <Skills
                skill = {skill}
              />
            </div>
            <div className="col-5 col-sm-8 col-md-9 col-lg-8">
              <SkillsPower
                skill= {skill}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
