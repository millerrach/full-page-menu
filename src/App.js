import React, { Component } from "react";
import "./style/css/main.css";
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="historyContainer">
          <p className="history">
            The city of Budapest was officially created on 17 November 1873 by
            the merging of the neighboring cities of Pest, Buda and Óbuda, with
            smaller outskirt towns amalgamated into Greater Budapest in 1950.
            Its origins can be traced to the Celtic people who occupied the
            plains of Hungary from the 4th century BC, until its conquest by the
            Roman Empire who established the fortress and town of Aquincum on
            the site of today's Budapest around AD 100, and the subsequent
            arrival of the Hungarian people. Their conquest of the Carpathian
            Basin started at the end of the 9th century and the Kingdom of
            Hungary established on the year 1000. From around 1300 to the
            incorporation of 1873, Buda have been the capital of the kingdom for
            five periods of less than a century each
          </p>
        </div>
      </div>
    );
  }
}

export default App;
