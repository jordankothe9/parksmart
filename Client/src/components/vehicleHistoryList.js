import React, {useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function VehicleHistoryList(){
    const [vehicles, setVehicles] = useState([]);

    var curVehId = 0;

    const getVehicleHistoryData = async () => {
      try {
        const vehicleHistoryData = await axios.get("http://localhost:80/api/get")
          setVehicles(vehicleHistoryData.data)
        }catch (err) {
          console.error(err.message);
        }
        }
        useEffect(()=>{
      
          getVehicleHistoryData()
          const interval=setInterval(()=>{
            getVehicleHistoryData()
           },5000)
             
             
           return()=>clearInterval(interval)
      },[])
       

          return(
            <div>
            <div className = "container-fluid" id = "vehicleHistoryContainer">
            <div className="row">
              {vehicles.map((val) => {
                if(val.entry != "true"){
                  return <div key = {val.id}>
                  {" "}
                  <div id = "vehicleHistory">
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
              })}
              
             
               </div>
              </div>
    
          </div>
          )
    }           
