import React, { Component } from 'react';
import {Link, Outlet} from 'react-router-dom';

class Headerr extends Component {
    state = {  } 
    render() { 
        return (
        <>
            <div className="header">
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to={{ pathname:'/settings', state:{name:"settings"}}}>Settings</Link>
            </div>
            <Outlet />
        </>
        );
    }
}
 
export default Headerr;