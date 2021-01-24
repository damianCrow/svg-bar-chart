import React, { Component } from "react";
import ClimateChart from "./components/ClimateChart";
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <ClimateChart />
      </div>
    );
  }
}

export default App;
