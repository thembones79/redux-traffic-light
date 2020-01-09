import React from "react";
import ReactDOM from "react-dom";
import TrafficLight from "./TrafficLight";

const App = () => {
  return <TrafficLight />;
};

ReactDOM.render(<App />, document.querySelector("#root"));
