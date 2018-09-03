import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Project from './Project'
import weatherapp from '../img/weatherapp.jpg';
import recipeapp from '../img/recipeapp.jpg';
import quazzu from '../img/quazzu.jpg';
import bizland from '../img/bizland.jpg';
import madmin from '../img/madmin.jpg';


const Projects = () => {
  return (
    <div className="projectWrapper">
      <Tabs className="" forceRenderTabPanel defaultIndex={0}>
        <TabList className="d-flex flex-wrap pl-0 justify-content-center pt-3 pb-1">
          <Tab>React</Tab>
          <Tab>Materialize CSS</Tab>
        </TabList>
        <hr className="w-50"/>

        <TabPanel>
          <Tabs className=""  forceRenderTabPanel>
            <TabList className="d-flex pl-0 justify-content-center pt-1 pb-2">
              <Tab>Weather app</Tab>
              <Tab>Recipe App</Tab>
            </TabList>

            <TabPanel>
              <Project
                projectTitle="Weather App"
                projectDescription="My first Project with React Library. It using external weather API. With it u can easily check weather in your region! Just type name of your city and country in english"
                techStack={['HTML/CSS', 'Bootstrap', 'Javascript', 'Fetch API', 'React']}
                gitHub="https://github.com/Pablo2904/WeatherApp"
                liveDemo="http://pawel.koscielny.weatherapp.s3-website.eu-central-1.amazonaws.com"
                imageSource={weatherapp}
              />
            </TabPanel>

            <TabPanel>
              <Project
                projectTitle="Recipe App"
                projectDescription="My second App where React is apply. It also using React-Router Module to handle subpages. I use food2fork external API to recevie data"
                techStack={['HTML/CSS', 'Bootstrap 4', 'Javascript', 'Fetch API', 'React']}
                gitHub="https://github.com/Pablo2904/Recipe-App"
                liveDemo="http://pawel.koscielny.recipeapp.s3-website.eu-central-1.amazonaws.com"
                imageSource={recipeapp}
              />
            </TabPanel>

          </Tabs>
        </TabPanel>

        <TabPanel>
          <Tabs className=""  forceRenderTabPanel>
            <TabList className="d-flex flex-wrap pl-0 justify-content-center pt-1 pb-2">
              <Tab>First Project</Tab>
              <Tab>Second Project</Tab>
              <Tab>Third Project</Tab>
            </TabList>

            <TabPanel>
              <Project
                projectTitle="Quazzu - Cloud Hosting"
                projectDescription="Multi Page Website designed for web services company."
                techStack={['HTML/CSS', 'MaterializeCSS', 'jQuery']}
                gitHub="https://github.com/Pablo2904/MaterializeCSS-secondProject"
                liveDemo="http://pawel.koscielny.quazzu.s3-website.eu-central-1.amazonaws.com"
                imageSource={quazzu}
              />
            </TabPanel>
            <TabPanel>
              <Project
                projectTitle="Bizland - Buissnes Landing Page"
                projectDescription="Landing Page designed for widely understood buissnes company with Google Map included"
                techStack={['HTML/CSS', 'MaterializeCSS', 'jQuery', 'Google Map']}
                gitHub="https://github.com/Pablo2904/MaterializeCSS-thirdProject"
                liveDemo="http://pawel.koscielny.bizland.s3-website.eu-central-1.amazonaws.com"
                imageSource={bizland}
              />
            </TabPanel>
            <TabPanel>
              <Project
                projectTitle="Madmin - admin theme for CMS "
                projectDescription="Admin dashbord with couple subpages, which can be used in some FullStack project"
                techStack={['HTML/CSS', 'MaterializeCSS', 'jQuery', 'CKEditor']}
                gitHub="https://github.com/Pablo2904/MaterializeCSS-fourthProject"
                liveDemo="http://pawel.koscielny.myadmin.s3-website.eu-central-1.amazonaws.com"
                imageSource={madmin}
              />
            </TabPanel>

          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Projects;
