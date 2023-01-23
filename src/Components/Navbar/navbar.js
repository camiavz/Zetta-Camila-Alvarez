//#react 
import React, { Component } from "react";

export class Navbar extends Component{
  render(){
    return{
      
    }
  }
}


import React from "react";
import { MenuItems } from "./menuItems.js";
import { Nav } from "react-bootstrap";

export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">Zetta</h1>
      <div className="menu-icon"></div>
      <ul>
        <li><a href="#"></a></li>
      </ul>
    </Nav>
  );
}

import { MenuItems } from "MenuItems"


export default function Navbar() {
  return (
    <Nav className="NavbarItems">
      <h1 className="Navbar-logo">Zetta</h1>
      <div className="menu-icon"></div>
      <ul>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.Title}
              </a>
            </li>
          );
        })}
      </ul>
    </Nav>
  );
}