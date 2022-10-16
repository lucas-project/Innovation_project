import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";
import {useLocation, useParams} from "react-router";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const firstRow = {
    height:'600px',
    marginTop:'10%',
    background:'#a0cbde',
    width:'100%'
};
const firstLeft = {
    height: '600px',
    background: '#87b0a0',
    width: '50%'
}
const firstRight = {
    height: '150px',
    background: '#d89581',
    width: '100%'
}
const firstRight2 = {
    height: '100px',
    background: '#aeb435',
    width: '100%'
}
const thirdRow = {
    height: '200px',
    background:'#acbc8a',
    width:'100%'
}
const down ={
    height:'200px',
    background:'#e99469',
    width:'100%'
}
const downLeft ={
    height:'200px',
    background:'#86a48c',
    width:'50%'
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
                    <Col md={6} style={firstLeft}>image: {Object.values(location.state.image)}</Col>
                    <Col md="auto" style={firstLeft}>
                        <Row style={firstRight}>
                            <Col style={firstRight}>name: {Object.values(location.state.name)}</Col>
                            <Col style={firstRight}>Publish year: {Object.values(location.state.publishyear)}</Col>
                        </Row>
                        <Row style={firstRight2}>Instruments: {Object.values(location.state.instruments)}</Row>
                        <Row style={firstRight2}>Publisher: {Object.values(location.state.publisher)}</Row>
                        <Row style={firstRight2}>Composer: {Object.values(location.state.composer)}</Row>
                    </Col>
                </Row>
                {/*<Row style={thirdRow}>*/}
                {/*    Biography: {Object.values(location.state.scorelink)}*/}
                {/*</Row>*/}
                <Row style={thirdRow}>
                    <Col style={firstRight}>Score link: {Object.values(location.state.name)}</Col>
                </Row>
                <Row style={down}>
                    <Col md="auto" style={downLeft}>Recording link: {Object.values(location.state.links)}</Col>
                    <Col md="auto" style={downLeft}>Duration: {Object.values(location.state.duration)}</Col>
                </Row>
            </Container>
        </div>
    );
};

export default Profile;