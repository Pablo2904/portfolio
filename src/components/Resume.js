import React from 'react';
import Education from './Education';
import Skills from './Skills';
import Course from './Course';
import SkillsPower from './SkillsPower';

const skill = [
  ['English', 'Fluent', '#00e676'],
  ['HTML5', 'Good', '#00e676'],
  ['CSS3', 'Good', '#00e676'],
  ['SASS', 'Medium', '#00b0ff'],
  ['JavaScript ES6+', 'Good', '#00e676'],
  ['jQuery', 'Medium', '#00b0ff'],
  ['Bootstrap', 'Medium', '#00b0ff'],
  ['Materialize CSS', 'Medium', '#00b0ff'],
  ['React', 'Good', '#00e676'],
  ['Redux', 'Medium', '#00b0ff'],
  ['Vue', 'Medium', '#00b0ff'],
  ['Vuex', 'Medium', '#00b0ff'],
  ['Nuxt', 'Basic', '#1de9b6'],
  ['NodeJS', 'Basic', '#1de9b6'],
  ['Wordpress', 'Basic', '#1de9b6'],
  ['PHP', 'Basic', '#1de9b6'],
  ['Photoshop', 'Basic', '#1de9b6'],
  ['Git', 'Medium', '#00b0ff'],
  ['NPM', 'Medium', '#00b0ff'],
  ['Yarn', 'Medium', '#00b0ff'],
  ['Webpack', 'Medium', '#00b0ff'],
  ['Jest', 'Medium', '#00b0ff']
];

const Resume = () => {
  return (
    <div className="resumeWrapper container-fluid">
      <div className="row py-3 justify-content-center">
        <div className="col-11 col-lg-3 mr-2 resumeWrapper__left">
          <h2>Paweł Kościelny</h2>
          <h4 className="my-4">FrontEnd Developer</h4>
          <hr className="mx-0" />
          <p className="w-75">
            Currently i focus on learning React/Redux library, also I start to
            discover React-Native.
          </p>
          <hr className="mx-0" />
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
          <hr className="mx-0" />
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
          <h2>Courses and Workshops</h2>
          <Course
            year="06.2018"
            courseName='Course "Front-end Developer" in Centrum Szkoleń Informatycznych Vedius'
            courseDescription="Building Landing Page with HTML5, CSS3 in RWD style, JavaScript, jQuery. Also work with PHP, Photosop, Joomla!"
          />
          <Course
            year="09.2018"
            courseName="Skylabs #3 - React workshops - vol. 2"
            courseDescription="Building CRUD App. Work with React library. Fetching data from REST API with fetch API. Work with documentation, JavaScript and ES6 + 
            "
          />
          <hr />
          <h2>Experience</h2>
          <Education
            startYear="09.2018"
            endYear="present"
            schoolName="Junior Front-end Developer at Inspire Labs Sp. z o. o."
            schoolDescription="Work with React and Woocommerce API during development of multishops app, implementation of new features, bug fixing, daily use of webpack, git, gitlab, from time to time styling with SASS, coding with VanillaJS and jQuery. After 6 months I'm still in support of React App by maintaining project and refreshing layout."
          />
          <Education
            startYear="03.2019"
            endYear="present"
            schoolName="Junior JavaScript Developer at Codest"
            schoolDescription="Working with Vue, Vuex, Nuxt during development of chrome extension in SCRUM methodology, cooperation with UI/UX Designer. Daily use of Git, Yarn, CircleCI. Work according to the rules of Code Review. Providing tested and scalable code"
          />
          <hr />
          <h2>Skills</h2>
          <div className="row">
            <div className="col-7 col-sm-4 col-md-3 col-lg-4">
              <Skills skill={skill} />
            </div>
            <div className="col-5 col-sm-8 col-md-9 col-lg-8">
              <SkillsPower skill={skill} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
