import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class Header extends Component {
  render() {
  const header = {
    position: 'fixed',
    zIndex: '5',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, .7)',
    color: 'white',
  }

  const logo = {
    float: 'left',
  }

  const nav = {
    textAlign: 'center',
  }

  const navColor = {
    color: 'white',
    textDecoration: 'none',
    padding: '2em ',
    display: 'inline-block',
  }

    return (
    	<header style={header}>
        <h1 style={logo}>TAKE220</h1>
        <nav style={nav}>
          <NavLink style={navColor} to="/">Home</NavLink>
          <NavLink style={navColor} to="/About">About Us</NavLink>
          <NavLink style={navColor} to="/Investment">Investment</NavLink>
          <NavLink style={navColor} to="/Gallery">Gallery</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
