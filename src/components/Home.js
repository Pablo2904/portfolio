import React from 'react';
import myAvatar from '../img/myAvatar.svg';


const Home = () => {
  return (
    <div className="aboutWrapper container-fluid pt-5">
      <div className="row">
        <div className="col"></div>
        <div className="col-12 col-sm-10 col-lg-8 mb-5 ">
          <img src={myAvatar} alt="Avatar" className="aboutWrapper__img mx-auto d-block img-fluid"/>

          <div className="aboutWrapper__info mx-auto mt-3">
            <h1 className="pt-5">Paweł Kościelny</h1>
            <h2 className="pb-5">FrontEnd Developer</h2>
            <hr className="mt-4"/>
            <p>HTML/CSS | SASS | Bootstrap | Materialize CSS | JavaScript | React | Photoshop | Npm | GitHub</p>

            <div className="aboutWrapper__social d-flex justify-content-around pb-2">
              {/*Github Social*/}
              <a href="https://github.com/Pablo2904" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              {/*Linkedin Social*/}
              <a href="https://www.linkedin.com/in/pawe%C5%82-ko%C5%9Bcielny-a73b65131/" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
};

export default Home;
