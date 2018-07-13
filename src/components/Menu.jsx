import React, { Component } from "react";
import hamburger from "../images/hamburger.svg";
import close from "../images/close.svg";
import posed from "react-pose";
import { tween } from "popmotion";

const FullMenu = posed.div({
  hide: {
    height: 0,
    transition: tween
  },
  show: {
    height: "90vh",
    transition: tween
  }
});

class Menu extends Component {
  state = {
    closed: true
  };
  toggleMenu() {
    this.setState({ closed: !this.state.closed });
  }
  render() {
    return (
      <div className="menuContainer" onClick={this.toggleMenu.bind(this)}>
        {this.state.closed ? (
          <div className="hamburgOrClose">
            <img src={hamburger} alt="menu" />
          </div>
        ) : (
          <div>
            <div className="hamburgOrClose" style={{backgroundColor: '#005397'}}>
              <img src={close} alt="close" />
            </div>
            <FullMenu
              pose={this.state.closed ? "hide" : "show"}
              className="dropMenuContainer"
            >
              <div className="dropMenu">
                <div className="dropItem">Vegan Burger</div>
                <div className="dropItem">Vegan Ice Cream</div>
                <div className="dropItem">Crumpets</div>
                <div className="dropItem">Hungarian Goulash</div>
                <div className="dropItem">Chai, Honey and Oat Milk</div>
              </div>
            </FullMenu>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
