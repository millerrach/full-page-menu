import React, { Component } from "react";
import Menu from "./components/Menu";

class App extends Component {
  state = {
    hidden: false
  };

  render() {
    return (
      <div className="app">
        <Menu />
        <div className="historyContainer">
          <p className="history">
            Since 2010 or so, a gastronomic revolution has been taking place in
            Budapest. New ingredients, inventive recipes, and international
            dishes are entering the mainstream that was previously dominated by
            carbs- and meat-heavy Hungarian staples like beef stew. Four
            Michelin-starred restaurants in Budapest (more than in Prague and
            Warsaw) are proof of this development. But those who're looking to
            taste traditional Hungarian dishes or find the most buzzing
            restaurants have also plenty to choose from.
          </p>
          <p>offbeatbudapest.com</p>
        </div>
      </div>
    );
  }
}

export default App;
