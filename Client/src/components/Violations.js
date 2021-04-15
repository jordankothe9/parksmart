import app from "../base";
import React, {Component} from "react";
import { Link } from "react-router-dom";
import CurrentVehicleList from "./CurrentVehiclesList"
import VehicleHistory from "./vehicleHistoryList"
import Navigation from "./Navigation"


class Violations extends Component {

  constructor() {
    super();
    this.state = {
      name: "React",
      showVehicleList: false,
      showVehicleHistory: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showVehicleList":
        this.setState({ showVehicleList: !this.state.showVehicleList });
        break;
      case "showVehicleHistory":
        this.setState({ showVehicleHistory: !this.state.showVehicleHistory });
        break;
      default:
        // eslint-disable-next-line no-unused-expressions
        null;
    }
  }
 
  render(){
    const { showVehicleList, showVehicleHistory } = this.state;
  return (
    
    <div>
      <Navigation />
      <div>
        {showVehicleList && <CurrentVehicleList />}
        <hr />
        {showVehicleHistory && <VehicleHistory />}
        <hr />
        <div>
          <button onClick={() => this.hideComponent("showVehicleList")}>
            Click to show current vehicles
          </button>
          <button onClick={() => this.hideComponent("showVehicleHistory")}>
            Click to show vehicle history
          </button>
        </div>
      </div>
    <Link to='/home'>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      </Link>
      </div> 
  );
};
}


export default Violations;