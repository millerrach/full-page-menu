import React, { Component } from "react";
import hamburger from "../images/hamburger.svg";
import close from "../images/close.svg";

class Menu extends Component {
  state = {
    closed: true
  };
  toggleMenu() {
    this.setState({ closed: !this.state.closed });
  }
  render() {
    let closed = this.state.closed;
    return (
      <div className="menuContainer" onClick={this.toggleMenu.bind(this)}>
        {closed ? (
          <div className="hamburgOrClose">
            <img src={hamburger} alt="menu" />
          </div>
        ) : null}
        <div
          className="dropMenuContainer"
          style={
            closed
              ? { transform: "translateY(-1000px)" }
              : { transform: "translateY(0)" }
          }
        >
          <div
            className="hamburgOrClose close"
          >
            <img src={close} alt="close" />
          </div>
          <div className="dropMenu">
            <div className="dropItem">Vegan Burger</div>
            <div className="dropItem">Vegan Ice Cream</div>
            <div className="dropItem">Crumpets</div>
            <div className="dropItem">Hungarian Goulash</div>
            <div className="dropItem">Chai, Honey and Oat Milk</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
