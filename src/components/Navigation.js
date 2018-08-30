import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return(
    <div className="navigationBar" >
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-3 ">

      <button className="navbar-toggler" data-toggle="collapse" data-target="#collapse_target">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="collapse_target">
        <ul className="navbar-nav mr-auto font-weight-bold ">
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Resume">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">About&Contact</NavLink>
          </li>
        </ul>
      </div>

      </nav>
    </div>
  );
};
export default Navigation;
