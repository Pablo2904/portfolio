import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Project from './Project'
import weatherapp from '../img/weatherapp.jpg';
import recipeapp from '../img/recipeapp.jpg';


const Projects = () => (
  <div className="projectWrapper">
    <Tabs className="container-fluid">
      <TabList className="d-flex pl-0 justify-content-center pt-3 pb-5">
        <Tab>Weather App</Tab>
        <Tab>Recipe App</Tab>
      </TabList>

      <TabPanel>
        <Project
          projectTitle="Weather App"
          projectDescription="My first Project with React Library. It using external weather API. With it u can easily check weather in your region! Just type name of your city and country in english"
          techStack={['HTML/CSS', 'Bootstrap', 'Javascript', 'Fetch API', 'React']}
          gitHub=""
          liveDemo=""
          imageSource={weatherapp}
        />
      </TabPanel>
      
      <TabPanel>
        <Project
          projectTitle="Recipe App"
          projectDescription="My second App where React is apply. It also using React-Router Module to handle subpages. I use food2fork external API to recevie data"
          techStack={['HTML/CSS', 'Bootstrap 4', 'Javascript', 'Fetch API', 'React']}
          gitHub=""
          liveDemo=""
          imageSource={recipeapp}
        />
      </TabPanel>

    </Tabs>
  </div>
);

export default Projects;
