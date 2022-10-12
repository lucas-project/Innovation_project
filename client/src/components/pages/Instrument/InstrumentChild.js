import React, { useState } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

const InstrumentChild = () => {
    const URL = useLocation();
    console.log(URL.state,"data from child element");
    const [info,setInfo] = useState([]);


    axios
    .get('https://99b782be-a96c-4d7b-9225-d8515f657ddf.mock.pstmn.io/search/instrument/'+URL.state.URL)
    .then(res =>{
        setInfo(res.data);
        console.log(res);

        console.log(res.data);
        console.log(res.data.name);  
        console.log(URL.state.URL);    
    })
    .catch(err =>{
        console.log("Error from getting data: "+err)
    })
        return (
        <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
          <Row class="d-flex row">
          {info.map((item) =>{
                    console.log("mapped items");
                    return(
                    <div class="col col-4 d-flex justify-content-center">
                            <Card>
                            <Card.Img variant="top" src={item.image} alt="Image for this piece"/>
                            <Card.Body class="card-body">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                Composer: {item.composer.name}.<br></br>
                                Duration: {item.duration} mins.<br></br>
                                Year: {item.year}<br></br>
                                Instruments: {item.instrments}.<br></br>
                                Publisher: {item.publisher}.<br></br>
                                Score Link: {item.scoreLink}.<br></br>
                                </Card.Text>
                                {/* <Link to='/recommendation/ailis'> */}
                                <a href={info.recordingLink}>
                                <Button variant="primary" class="mt-auto btn">Explore now!</Button>
                                </a>
                                {/* </Link> */}
                            </Card.Body>
                            </Card>
                    </div> 
                    )
          })}
          </Row>
        </Container>
        );
    
};

export default InstrumentChild;