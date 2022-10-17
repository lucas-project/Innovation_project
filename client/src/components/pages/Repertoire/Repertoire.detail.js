import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";
import {useLocation, useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import pieces from "../../img/piece.png";

const firstRow = {
    height:'600px',

    background:'#a0ebde',
    width:'100%'
};
const firstLeft = {
    height: '600px',
    background: '#a7b0a0',
    width: '50%'
}
const firstRight = {
    height: '150px',
    background: '#d89581',
    width: '104.5%'
}
const firstRight2 = {
    height: '150px',
    background: '#aeb435',
    width: '104.5%'
}
const thirdRow = {
    height: '150px',
    background:'#a2348a',
    width:'100%'
}
const down ={
    height:'100px',
    background:'#e99469',
    width:'100%'
}
const downLeft ={
    height:'100px',
    background:'#34a48c',
    width:'50%'
}
const imgWrapper ={
    display:'flex',
    justifyContent:'center',
    marginTop: '30%'
}
const imgStyle ={
    width:'350px',
    height:'auto'
}

const Profile = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const { _id } = useParams();
    const location = useLocation();
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch(`http://localhost:3000/api/pieces/`);
            const resultJson = await result.json();

            setAlbums(resultJson);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div>
            {isLoading && (
                <div className="loading">
                    <p>...loading</p>
                </div>
            )}
            <Container>
                <br/><br/><br/><br/>
                <Row style={firstRow}>
                    <div><h3>Piece details  - {Object.values(location.state.name)}</h3></div>
                    <Col md={6} style={firstLeft}>
                        {/*<div>image: {Object.values(location.state.image)}</div>*/}
                        <div style={imgWrapper}><img src={pieces} alt="Repertoire picture not available" style={imgStyle}/></div>
                    </Col>
                    <Col md="auto" style={firstLeft}>
                        <Row style={firstRight}>
                            <Col style={firstRight}><h4>Name: </h4><br/><p>{Object.values(location.state.name)}</p></Col>
                            <Col style={firstRight}><h5>Publish year:</h5> <br/><p>{Object.values(location.state.publishyear)}</p></Col>
                        </Row>
                        <Row style={firstRight2}><h4>Instruments: </h4><br/><p>{Object.values(location.state.instruments)}</p></Row>
                        <Row style={firstRight2}><h4>Publisher:</h4><br/><p>{Object.values(location.state.publisher)}</p></Row>
                        <Row style={firstRight2}><h4>Composer:</h4> <br/><p>{Object.values(location.state.composer)}</p></Row>
                    </Col>
                </Row>
                {/*<Row style={thirdRow}>*/}
                {/*    Biography: {Object.values(location.state.scorelink)}*/}
                {/*</Row>*/}
                <Row style={thirdRow}>
                    <Col style={firstRight}><h4>Score link:</h4> <br/><p>{Object.values(location.state.name)}</p></Col>
                </Row>
                <Row style={down}>
                    <Col md="auto" style={downLeft}><h4>Recording link: </h4><br/><p>{Object.values(location.state.links)}</p></Col>
                    <Col md="auto" style={downLeft}><h4>Duration:</h4><br/><p> {Object.values(location.state.duration)} min</p></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;