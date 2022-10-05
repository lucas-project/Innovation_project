import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Ailis from '../../../img/ailis.jpg';
import Nicola from '../../../img/Nicola.jpg';
import "./Recommendation.css";
// import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Recommendation = () => {
    let navigate = useNavigate(); 
    const AilisRoute = () =>{ 
    let path = '/recommendation/ailis'; 
    navigate(path);
    }
    
    return (
    <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
      <Row class="d-flex row">
        <div class="col col-4 d-flex justify-content-center">
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src={Ailis} alt="ailis"/>
                <Card.Body class="card-body">
                    <Card.Title>Ailís Ní Ríain</Card.Title>
                    <Card.Text>
                     She is a contemporary classical composer and published writer for stage who aims to produce work that challenges, provokes and engages.
                    </Card.Text>
                    {/* <Link to='/recommendation/ailis'> */}
                    <Button variant="primary" class="mt-auto btn" onClick={AilisRoute}>View more details.</Button>
                    {/* </Link> */}
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src={Nicola} alt="Nicola" />
                <Card.Body class="card-body">
                    <Card.Title>Nicola LeFanu</Card.Title>
                    <Card.Text>
                    Her catalogue includes a number of works for string ensemble, and chamber music for a wide variety of mediums, often including voice. She has a particular affinity for vocal music and has composed eight operas.
                    </Card.Text>
                    <Button variant="primary" class="mt-auto btn">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top"  src="holder.js/100px180" />
                <Card.Body class="card-body">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" class="mt-auto btn">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
      </Row><br></br>
      <Row>
        <div class="col col-4 d-flex justify-content-center">            
         {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body  class="card-body">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"  class="mt-auto btn">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">            
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body  class="card-body">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary"  class="mt-auto btn">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">            
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card  class="card">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body class="card-body">
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary" class="mt-auto btn">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
      </Row>
    </Container>
        
    );
};

export default Recommendation;