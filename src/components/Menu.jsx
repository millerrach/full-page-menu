import React, { Component } from "react";
import hamburger from "../images/hamburger.svg";

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
          <img src={hamburger} alt="menu" />
        ) : (
          <div className="fullMenuContainer">
            <div className="fullMenu">
              <div className="menuItem">Veggie Burger</div>
              <div className="menuItem">Vegan Ice Cream</div>
              <div className="menuItem">Oat Crumpets</div>
              <div className="menuItem">Berries and Almond Milk</div>
              <div className="menuItem">Chai, Honey and Oat Milk</div>
              <div className="menuItem">Apples and Peanut Butter</div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Menu;
