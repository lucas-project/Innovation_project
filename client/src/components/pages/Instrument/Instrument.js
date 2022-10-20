import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import FluteImg from '../../../img/flute.jpg';
import ClarinetImg from '../../../img/clarinet.jpg';
import "./Instrument.css";
import { useNavigate } from "react-router-dom";
import InstrumentChild from "../../pages/Instrument/InstrumentChild";

const Instrument = () => {

        let navigate = useNavigate(); 
        // const FluteRoute = () =>{ 
        // let path = '/instrument/flute'; 
        // navigate(path);
        // }
        const [URL,setURL] = useState([]);
        // const [info,setInfo] = useState([]);

        const onClickBrowseHandler= (e) =>{
            // setInfo(e.target.value);
            const URL = `${e.target.value}`;
            setURL(URL);
            //console.log(URL);
            navigate(`/instrument/${URL}`,{state:{URL}});
            
            // return(
            //     <div>
            //          <InstrumentChild data={URL}/>
                     {/* <div style={{ position: "absolute", marginTop: "70px", fontSize: "20px" }}>
                     {
                    info.map((item) =>{
                        console.log(item,"mapped items");
                        return(
                            <div>
                                {item.name}
                            </div>
                        )
                    })
                }
                <br/><br/>
            </div> */}
            //     </div>
            // )
        }
        return (
        <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
          <Row class="d-flex row">
            <div class="col col-3 d-flex justify-content-center">
                {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                    <Card>
                    <Card.Img variant="top" src={FluteImg} alt="https://www.classical-music.com/features/works/the-best-flute-solos-in-orchestral-works/"/>
                    <Card.Body class="card-body">
                        <Card.Title>Flute</Card.Title>
                        <Card.Text>
                        Flute information.
                        </Card.Text>
                        {/* <Link to='/recommendation/ailis'> */}
                        <Button variant="primary" class="mt-auto btn" value="flute" onClick={onClickBrowseHandler}>View more details.</Button>
                        {/* </Link> */}
                    </Card.Body>
                    </Card>
                {/* </div> */}
            </div>
            <div class="col col-3 d-flex justify-content-center">
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                    <Card>
                    <Card.Img variant="top" src={ClarinetImg} alt="https://www.thoughtco.com/history-of-the-clarinet-1991464" />
                    <Card.Body class="card-body">
                        <Card.Title>CLarinet</Card.Title>
                        <Card.Text>
                        Clarinet information.
                        </Card.Text>
                        <Button variant="primary" class="mt-auto btn" value="clarinet" onClick={onClickBrowseHandler}>View related pieces.</Button>
                    </Card.Body>
                    </Card>
                {/* </div> */}
            </div>
            <div class="col col-3 d-flex justify-content-center">
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
            <div class="col col-3 d-flex justify-content-center">
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
            <div class="col col-3 d-flex justify-content-center">            
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
            <div class="col col-3 d-flex justify-content-center">            
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
            <div class="col col-3 d-flex justify-content-center">            
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
    

export default Instrument;