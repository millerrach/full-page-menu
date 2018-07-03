import React, { Component } from 'react';
import hamburger from '../images/hamburger.svg';

class Menu extends Component {
    render() {
        return (
            <div className="menuContainer">
                <img src={hamburger} alt="menu"/>
            </div>
        );
    }
}

export default Menu;