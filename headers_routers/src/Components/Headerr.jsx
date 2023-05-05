import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Headerr extends Component {
    state = {  } 
    render() { 
        return (
            <div className="header">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/settings'>Settings</Link>
            </div>
        );
    }
}
 
export default Headerr;