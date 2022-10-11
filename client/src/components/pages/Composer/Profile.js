import React, { useState, useEffect, useRef } from "react";
import {Link, Route, useParams} from "react-router-dom";
import Card from "../../Card";
import "./Profile.css";
import Forum from "../Forum/Forum";
import Profile from "../Profile/Profile";

const AlbumItemsPage = () => {
    // const displayItem = 20;
    // const itemFound = useRef();
    const [itemFound, setItemFound] = useState();
    const selectedCardIndex = useRef();

    const [items, setItems] = useState([]);
    // const [pages, setPages] = useState([]);
    // const [startNum, setStartNum] = useState(0);
    // const [endNum, setEndNum] = useState(displayItem);
    const [isLoading, setIsLoading] = useState(false);
    const [isShowing, setIsShowing] = useState(false);

    const { albumId } = useParams();

    useEffect(() => {
        // if (items.length > 0) {
        //   setIsLoading(false);
        // } else {
        //   setIsLoading(true);
        // }
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch(
                `https://jsonplaceholder.typicode.com/photos`
            );
            const resultJson = await result.json();
            setItems(resultJson);
            setIsLoading(false);
        };
        fetchData();
    }, [itemFound, albumId]);

    // const pageHandler = event => {
    //   event.preventDefault();
    //   const value = event.target.value;

    //   if (value === "previous") {
    //     if (startNum !== 0 && endNum !== displayItem) {
    //       setStartNum(startNum - displayItem);
    //       setEndNum(endNum - displayItem);
    //     } else {
    //       return;
    //     }
    //   } else if (value === "next") {
    //     setStartNum(startNum + displayItem);
    //     setEndNum(endNum + displayItem);
    //   }
    // };

    const onItemHandler = (value, index) => {
        // console.log(value);
        // itemFound.current = items.find(item => item.id === value);
        setItemFound(items.find(item => item.id === value));
        // console.log(itemFound.current);
        selectedCardIndex.current = index;
        console.log("on", selectedCardIndex.current);
        setIsShowing(true);
    };

    const forwardHandler = () => {
        console.log("init forward", selectedCardIndex.current);
        selectedCardIndex.current += 1;
        console.log("after forward", selectedCardIndex.current);

        if (selectedCardIndex.current < items.length) {
            // itemFound.current = items.find(
            //   (item, index) => index === selectedCardIndex.current
            // );
            setItemFound(
                items.find((item, index) => index === selectedCardIndex.current)
            );
            console.log("get forward item", itemFound);
        } else {
            setIsShowing(false);
            return;
        }
    };

    const backwardHandler = () => {
        console.log("init backward", selectedCardIndex.current);
        selectedCardIndex.current -= 1;
        console.log("after backward", selectedCardIndex.current);

        if (selectedCardIndex.current >= 0) {
            // itemFound.current = items.find(
            //   (item, index) => index === selectedCardIndex.current
            // );
            setItemFound(
                items.find((item, index) => index === selectedCardIndex.current)
            );
            console.log("get backward item", itemFound);
        } else {
            setIsShowing(false);
            return;
        }
    };

    const offItemHandler = () => {
        setIsShowing(false);
    };

    return (
        <div>
            <div className="controller-button-container">
                <Link to="/">
                    <button className="controller-button" value="home">
                        All Albums
                    </button>
                </Link>

                {/* <button
          className="controller-button"
          value="previous"
          onClick={pageHandler}
        >
          previous
        </button>
        <button
          className="controller-button"
          value="next"
          onClick={pageHandler}
        >
          next
        </button> */}
            </div>
            {isLoading && (
                <div className="loading">
                    <p>...loading</p>
                </div>
            )}
            <p className="page-title-message">
                You have chosen <span>Album {albumId}</span>. Total of {items.length}{" "}
                photos to explore. Enjoy!
            </p>
            <div className="items-container">
                <p>Composer Name: {albumId}</p>
                <p>Nationality:</p>
                <p>Introduction:</p>
                <br/>
                <h3>Featured works:</h3>
                <br/>
                <br/>
                {items.map((item, index) => (
                    <div>
                    <Card key={item.id} onClick={() => onItemHandler(item.id, index)}>
                        <img
                            src={"https://via.placeholder.com/100x70.png"}
                            alt={`data thumbnail`}
                        />
                        <h6>#{item.id}</h6>
                        <p>some titles</p>
                        <p>Some Description</p>
                        <p>Some extra info</p>
                        <Link to="/Profile">Profile</Link>

                    </Card>

                    </div>

                ))}
            </div>
            {isShowing && (
                <div className="loading">
                    <button className="backwardButton" onClick={backwardHandler}>
                        &#60;
                    </button>
                    <div className="item-container">
                        <button className="offItemButton" onClick={offItemHandler}>
                            X
                        </button>
                        <img
                            src={"https://via.placeholder.com/760x452.png"}
                            alt={`data pic`}
                        />
                        <div>
                            <h1>Repertoire{itemFound.id}</h1>
                            <h3>{itemFound.title}</h3>
                        </div>

                    </div>
                    <button className="forwardButton" onClick={forwardHandler}>
                        &#62;
                    </button>
                </div>
            )}
        </div>
    );
};

export default AlbumItemsPage;
