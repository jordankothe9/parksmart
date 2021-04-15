import React, {useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function VehicleList(){
    const [vehicles, setVehicles] = useState([]);
    

    const getCurrentVehicleData = async () => {
      try {
        const currentVehicleData = await axios.get("http://www.landerparking.com:3002/api/getcurrent")
          setVehicles(currentVehicleData.data)
        }catch (err) {
          console.error(err.message);
        }
        }
        useEffect(()=>{
    
          getCurrentVehicleData()
          const interval=setInterval(()=>{
            getCurrentVehicleData()
           },5000)     
             
           return()=>clearInterval(interval)
      },[])
      
  
      return(
        <div className = "container-fluid" id = "currentVehiclesContainer">
        <div className="row">
          {vehicles.map((val) => {
            if(val.entry == "true"){
              return <div key = {val.id}>
              {" "}
              <p>The value of this boy is -{val.id}- yay</p>
              <div id = "currentVehicles">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                    <Accordion>
                      <Card>
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          License Number: {val.licenseNumber}  <br></br>
                          Valid Pass: {val.validPass} <br></br>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Confidence: {val.confidence} <br></br>
                            Time: {val.stamp}
                            <br></br>
                            Make: {val.make} <br></br>
                            Model: {val.model} <br></br>
                            Color: {val.color} <br></br>
                            Status: {val.entry} <br></br>
                            Region: {val.licenseState} <br></br>
                            id: {val.id}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                 
                </Card.Body>
              </Card>
            </div>
          
          </div>
          }
        }
        )}
          
        </div>
        </div>

      )
   
}
