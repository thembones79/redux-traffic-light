import React from "react";
import "./TrafficLight.css";

class TrafficLight extends React.Component {
  state = { activeLight: "RED" };

  changeLight = () => {
    if (this.state.activeLight === "RED") {
      this.setState({ activeLight: "YELLOW" });
    }
    if (this.state.activeLight === "YELLOW") {
      this.setState({ activeLight: "GREEN" });
    }
    if (this.state.activeLight === "GREEN") {
      this.setState({ activeLight: "RED" });
    }
  };

  render() {
    return (
      <div className="traffic-light">
        <div className="gasket">
          <div
            className={`light red ${
              this.state.activeLight === "RED" ? "active" : ""
            }`}
          ></div>
          <div
            className={`light yellow ${
              this.state.activeLight === "YELLOW" ? "active" : ""
            }`}
          ></div>
          <div
            className={`light green ${
              this.state.activeLight === "GREEN" ? "active" : ""
            }`}
          ></div>
        </div>
        <button onClick={this.changeLight} className="next">
          Next
        </button>
      </div>
    );
  }
}

export default TrafficLight;
