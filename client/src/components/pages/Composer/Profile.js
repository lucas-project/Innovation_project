// import React, { useState, useEffect, useRef } from "react";
// import {Link, Route, useParams} from "react-router-dom";
// import Card from "../../Card";
// import "./Profile.css";
//
// const AlbumItemsPage = () => {
//     const [itemFound, setItemFound] = useState();
//     const selectedCardIndex = useRef();
//
//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isShowing, setIsShowing] = useState(false);
//
//     const { albumId } = useParams();
//
//     useEffect(() => {
//         setIsLoading(true);
//         const fetchData = async () => {
//             const result = await fetch(
//                 `https://jsonplaceholder.typicode.com/photos`
//             );
//             const resultJson = await result.json();
//             setItems(resultJson);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [itemFound, albumId]);
//
//     const onItemHandler = (value, index) => {
//         setItemFound(items.find(item => item.id === value));
//         // console.log(itemFound.current);
//         selectedCardIndex.current = index;
//         console.log("on", selectedCardIndex.current);
//         setIsShowing(true);
//     };
//
//     const forwardHandler = () => {
//         console.log("init forward", selectedCardIndex.current);
//         selectedCardIndex.current += 1;
//         console.log("after forward", selectedCardIndex.current);
//
//         if (selectedCardIndex.current < items.length) {
//             setItemFound(
//                 items.find((item, index) => index === selectedCardIndex.current)
//             );
//             console.log("get forward item", itemFound);
//         } else {
//             setIsShowing(false);
//             return;
//         }
//     };
//
//     const backwardHandler = () => {
//         console.log("init backward", selectedCardIndex.current);
//         selectedCardIndex.current -= 1;
//         console.log("after backward", selectedCardIndex.current);
//
//         if (selectedCardIndex.current >= 0) {
//             setItemFound(
//                 items.find((item, index) => index === selectedCardIndex.current)
//             );
//             console.log("get backward item", itemFound);
//         } else {
//             setIsShowing(false);
//             return;
//         }
//     };
//
//     const offItemHandler = () => {
//         setIsShowing(false);
//     };
//
//     return (
//         <div>
//             <div className="controller-button-container">
//                 <Link to="/">
//                     <button className="controller-button" value="home">
//                         All Albums
//                     </button>
//                 </Link>
//             </div>
//             {isLoading && (
//                 <div className="loading">
//                     <p>...loading</p>
//                 </div>
//             )}
//             <p className="page-title-message">
//                 You have chosen <span>Album {albumId}</span>. Total of {items.length}{" "}
//                 photos to explore. Enjoy!
//             </p>
//             <div className="items-container">
//                 <p>Profile Name: {albumId}</p>
//                 <p>Nationality:</p>
//                 <p>Introduction:</p>
//                 <br/>
//                 <h3>Featured works:</h3>
//                 <br/>
//                 <br/>
//                 {items.map((item, index) => (
//                     <div>
//                     <Card key={item.id} onClick={() => onItemHandler(item.id, index)}>
//                         <img
//                             src={"https://via.placeholder.com/100x70.png"}
//                             alt={`data thumbnail`}
//                         />
//                         <h6>#{item.id}</h6>
//                         <p>some titles</p>
//                         <p>Some Description</p>
//                         <p>Some extra info</p>
//                         <Link to="/Profile">Profile</Link>
//
//                     </Card>
//
//                     </div>
//
//                 ))}
//             </div>
//             {isShowing && (
//                 <div className="loading">
//                     <button className="backwardButton" onClick={backwardHandler}>
//                         &#60;
//                     </button>
//                     <div className="item-container">
//                         <button className="offItemButton" onClick={offItemHandler}>
//                             X
//                         </button>
//                         <img
//                             src={"https://via.placeholder.com/760x452.png"}
//                             alt={`data pic`}
//                         />
//                         <div>
//                             <h1>Repertoire{itemFound.id}</h1>
//                             <h3>{itemFound.title}</h3>
//                         </div>
//
//                     </div>
//                     <button className="forwardButton" onClick={forwardHandler}>
//                         &#62;
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };
//
// export default AlbumItemsPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";

import {useLocation, useParams} from "react-router";
import {Container, Col, Row} from 'react-bootstrap';
import "./Composer.css";

const firstRow = {
    height:'100px',
    background:'#a0cbde',
    width:'100%'
};
const secondRow = {
    height: '600px',
    background: '#87b0a0',
    width: '100%'
}
const secondLeft = {
    height: '600px',
    background: '#689581',
    width: '50%'
}
const secondRight = {
    height: '200px',
    background:'#acbc8a',
    width:'100%'
}
const down ={
    height:'300px',
    background:'#f2b476',
    width:'100%'
}

const Profile = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const { _id } = useParams();
    const location = useLocation();

   useEffect(() => {
       setIsLoading(true);
       const fetchData = async () => {
           const result = await fetch(`http://localhost:3000/api/composers/`);
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
                    <Col>Name: {Object.values(location.state.name)}</Col>
                </Row>
                <Row style={secondRow}>
                    <Col md={6} style={secondLeft}>image: {Object.values(location.state.image)}</Col>
                    <Col md="auto" style={secondLeft}>
                        <Row style={secondRight}>Country: {Object.values(location.state.nationality)}</Row>
                        <Row style={secondRight}>DOB: {Object.values(location.state.DOB)}</Row>
                        <Row style={secondRight}>Website: {Object.values(location.state.website)}</Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto" style={down}>Biography: {Object.values(location.state.biography)}</Col>
                </Row>
            </Container>

        </div>
    );
};

export default Profile;
