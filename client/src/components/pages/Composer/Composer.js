import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Composer.css";

const Composer = () => {
    const [albums, setAlbums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            const result = await fetch("https://jsonplaceholder.typicode.com/albums");
            const resultJson = await result.json();
            const sliceResult = resultJson.slice(0, 10);
            setAlbums(sliceResult);
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
                {albums.map(album => (
                    <Link
                        to={`/${album.id}/photos`}
                        key={album.id}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card className="albums-card">
                            <img
                                src={"https://via.placeholder.com/168x118.png"}
                                alt={`data thumbnail`}
                            />
                            <h5>Composer {album.id}</h5>
                            <h6>Composer {album.title}</h6>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Composer;
