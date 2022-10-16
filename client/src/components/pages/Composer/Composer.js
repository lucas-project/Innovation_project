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
            const result = await fetch("http://localhost:3000/api/composers");
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
                        to={{pathname:`/api/composers/${album._id}`}}
                        state={{
                            _id:album._id,
                            name: album.name,
                            nationality:album.nationality,
                            DOB:album.DOB,
                            website:album.website,
                            biography:album.biography,
                            image:album.image

                        }}
                        key={album.name}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <Card className="albums-card">
                            <img
                                // src={"https://via.placeholder.com/168x118.png"}
                                src={album.image}
                                alt={`data thumbnail`}
                            />
                            <h5>{album.name}</h5>
                            <h6>{album.nationality}</h6>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Composer;