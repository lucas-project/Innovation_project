import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recommendation = () => {
    return (
    <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
      <Row class="d-flex">
        <div class="col col-4 d-flex justify-content-center">
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="../../img/ailis.jpg" alt="ailis"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
      </Row><br></br>
      <Row>
        <div class="col col-4 d-flex justify-content-center">            
         {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">            
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
        <div class="col col-4 d-flex justify-content-center">            
        {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View more details.</Button>
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
      </Row>
    </Container>
        
    );
};

export default Recommendation;