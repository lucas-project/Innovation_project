// import React, { useState, useEffect, useRef } from "react";
// import { Link, useParams } from "react-router-dom";
//
// import Card from "../../Card";
//
// import "./Repertoire.css";
//
// const AlbumItemsPage = () => {
//     const [itemFound, setItemFound] = useState();
//     const selectedCardIndex = useRef();
//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [isShowing, setIsShowing] = useState(false);
//     const { name } = useParams();
//
//     useEffect(() => {
//         setIsLoading(true);
//         const fetchData = async () => {
//             const result = await fetch(
//                 // `https://jsonplaceholder.typicode.com/photos`
//                 `http://localhost:3000/api/composers`
//             );
//             const resultJson = await result.json();
//             setItems(resultJson);
//             setIsLoading(false);
//         };
//         fetchData();
//     }, [itemFound, name]);
//
//     const onItemHandler = (value, index) => {
//         setItemFound(items.find(item => item.id === value));
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
//
//             </div>
//             {isLoading && (
//                 <div className="loading">
//                     <p>...loading</p>
//                 </div>
//             )}
//             <p className="page-title-message">
//                 You have chosen <span>Album {name}</span>. Total of {items.length}{" "}
//                 photos to explore. Enjoy!
//             </p>
//             <div className="items-container">
//                 {items.map((item, index) => (
//                     <Card key={item.id} onClick={() => onItemHandler(item.biography, index)}>
//                         <img
//                             src={"https://via.placeholder.com/100x70.png"}
//                             alt={`data thumbnail`}
//                         />
//                         <h6>#{item.name}</h6>
//                         <h6>{item.nationality}</h6>
//                     </Card>
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
//                             <h1>#{itemFound.name}</h1>
//                             <h3>{itemFound.nationality}</h3>
//                         </div>
//                     </div>
//                     <button className="forwardButton" onClick={forwardHandler}>
//                         &#62;
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AlbumItemsPage;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";

const Repertoire = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch("http://localhost:3000/api/pieces/");
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
            <div className="albums-container">
                {albums.map(piece => (
                    <Link
                        to={{pathname:`/api/pieces/${piece._id}`,state:`${piece._id}`}}
                        state={{
                            _id:piece._id,
                            name: piece.name,
                            composer:piece.composer.name,
                            duration:piece.duration,
                            publishyear:piece.year,
                            instruments:piece.instruments,
                            links:piece.recordingLink,
                            publisher:piece.publisher,
                            scorelink:piece.scoreLink,
                            image:piece.image

                        }}
                        key={piece.name}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card className="albums-card">
                            <img
                                src={"https://via.placeholder.com/168x118.png"}
                                // src={album.image}
                                alt={`data thumbnail`}
                            />
                            <h5>{piece.name}</h5>
                            <p><strong>Instrument</strong>: {piece.instruments}</p>
                            <p>Name: {piece.recordingLink}</p>


                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Repertoire;
