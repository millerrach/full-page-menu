import React, { Component } from "react";
import hamburger from "../images/hamburger.svg";
import posed from "react-pose";
import { tween } from "popmotion";


const FullMenu = posed.div({
    hide: { 
        height: 0,
        transition: tween

    },
    show: { 
        height: '100vh',
        transition: tween
    }
  });

class Menu extends Component {
  state = {
    closed: true,
  };
  toggleMenu() {
    this.setState({ closed: !this.state.closed });
    this.props.hide;
  }
  render() {
    return (
      <div className="menuContainer" onClick={this.toggleMenu.bind(this)}>
        {this.state.closed ? (
          <img src={hamburger} alt="menu" />
        ) : (
          <FullMenu
            pose={this.state.closed ? "hide" : "show"}
            className="fullMenuContainer"
          >
            <div className="fullMenu">
              <div className="menuItem">Vegan Burger</div>
              <div className="menuItem">Vegan Ice Cream</div>
              <div className="menuItem">Crumpets</div>
              <div className="menuItem">Hungarian Goulash</div>
              <div className="menuItem">Chai, Honey and Oat Milk</div>
            </div>
          </FullMenu>
        )}
      </div>
    );
  }
}

export default Menu;
