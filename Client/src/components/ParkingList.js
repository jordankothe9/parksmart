import React, {useEffect, useState } from "react";
import axios from "axios"
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function ParkingList(){
    const [parking, setParking] = useState([]);

    
    const getParkingData = async () => {
      try {
        const userParking = await axios.get("http://localhost:80/api/getparking")
          setParking(userParking.data)
        }catch (err) {
        console.error(err.message);
      }
      }
      useEffect(()=>{
    
        getParkingData()
        const interval=setInterval(()=>{
          getParkingData()
         },5000)
           
           
         return()=>clearInterval(interval)
    },[])

      return(
      <div>
          {parking.map((val) => {
              return <div key = {val.parkingLotKey}>
              {" "}
              <div>
              <Card style={{ width: "18rem" }} >
                <Card.Body>
                    <Accordion defaultActiveKey="0">
                      <Card>
                     
                        <Card.Header>
                          <Accordion.Toggle as={Button} variant="link" eventKey="0">
                          Number of Spots: {val.numSpots} <br></br>
                          </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Name: {val.name} <br></br>
                            Number of Spots Used: {val.numUsed}
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                 
                </Card.Body>
              </Card>
            </div>
          </div>
          })}
      </div>
        
      )
   
}
