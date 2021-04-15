import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Header from "./Header"


export default class Home extends Component {
  render() {
    return (
     
      <>
      <Header />
        <Link to='/parking'>
          <Button variant="primary" size="lg" id="parkingbutton" block>
            Parking
              </Button>
        </Link>
        <Link to='/login'>
          <Button variant="primary" size="lg" id="parkingbutton" block>
            Administrator Login
              </Button>
        </Link>
        <div id="welcome" style={{ height: 500 }}>
          <h1>Welcome</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="about" style={{ height: 500 }}>
          <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="faq" style={{ height: 500 }}>
          <h1>FAQ</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="team" style={{ height: 500 }}>
          <h1>Meet our Team!</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" style={{ height: 500 }}>
          <h1>Contact us for help</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
      </>
    )
  }
}
