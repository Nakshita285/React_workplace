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
      <Routes>
        <Route path="/" element ={<Headerr />} >
          <Route  path ='/home' element ={<Home />} />
          <Route  path='/about' element={ <About /> } />
          <Route  path='/settings' element={<Settings />} />
        </Route>
      </Routes>
      </div>
    );
  }
}
 
export default App;

