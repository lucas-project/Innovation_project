import React ,{useEffect}from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Ailis from '../../../img/ailis.jpg';
import Nicola from '../../../img/Nicola.jpg';
import "./Recommendation.css";
// import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useState from 'react-usestateref';

//the button to be added (for search related piece of the author)

const Recommendation = () => {
    let navigate = useNavigate(); 
    const AilisRoute = () =>{ 
    let path = '/recommendation/ailis'; 
    navigate(path);
    }
    const [recommendation,setRecommendation,recommendationRef] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/recommends");
            const resultJson = await result.json();
            // const sliceResult = resultJson.slice(0, 10);
            setRecommendation(resultJson);
        };
        fetchData();
    }, []);
    
    return (
    <Container style={{ position: "absolute", marginTop: "120px", fontSize: "20px" }}>
      <Row class="d-flex row">
      {recommendationRef.current.map(item => (
    <>
        <div class="col col-4 d-flex justify-content-center">
            {/* <div style={{ position: "absolute", margin: "170px", fontSize: "20px" }}> */}
                <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body class="card-body">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.body}<br></br>
                        Publish date: {item.date}
                    </Card.Text>
                    {/* <Link to='/recommendation/ailis'> */}
                    {/* <Button variant="primary" class="mt-auto btn" onClick={onClickHandler}>View more details.</Button> */}
                    {/* </Link> */}
                </Card.Body>
                </Card>
            {/* </div> */}
        </div>
       
    </>
      ))}
      </Row><br></br>
    </Container>
        
    );
};

export default Recommendation;