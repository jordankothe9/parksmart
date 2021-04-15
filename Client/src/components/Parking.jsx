import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import ParkingList from "./ParkingList"
import Navigation from "./Navigation"

function Parking() {
  return (
    <div className="parking">
      <Navigation />
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">Parking</h1>
            <p>
              This page will hold information available to students about parking. You need to create:
              1. Parking spots available
              2. Timeline of available parking spots
              3. Percentage of available parking spots
            </p>
            <br></br><h1>Parking Lot A</h1>
           <ProgressBar now= {60} label={`${60}%`} />
          </div>
          <ParkingList></ParkingList>
        </div>
      </div>
    </div>
  );
}

export default Parking;