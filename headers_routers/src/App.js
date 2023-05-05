import React, { Component } from 'react';
import Headerr from './Components/Headerr';
import Home from "./Components/Home";
import About from "./Components/About";
import Settings from "./Components/Settings";
import {Routes, Route } from 'react-router-dom';


class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className = "App">
      <Headerr></Headerr>
          <Routes>
            <Route exact path='/' element={ <Home></Home> }></Route>
            <Route exact path='/about' element={ <About></About> }></Route>
            <Route exact path='/settings' element={ <Settings></Settings> }></Route>
          </Routes>
      </div>
    );
  }
}
 
export default App;

