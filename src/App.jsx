import React from 'react';
import "./index.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import {Switch,Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Error from "./Error"
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Service" component={Service}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route component={Error}></Route>
      </Switch>
      </>
  )
}

export default App;