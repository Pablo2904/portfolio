import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <Navigation />
            <Switch>
              <Route exact path ="/" component={Home}/>
              <Route path ="/Projects" component={Projects} />
              <Route path ="/Resume" component={Resume} />
              <Route path ="/Contact" component={Contact} />
              <Route component={Error} />
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
