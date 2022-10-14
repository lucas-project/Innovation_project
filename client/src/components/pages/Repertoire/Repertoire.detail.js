import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../Card";
import "./Repertoire.css";
import {useLocation, useParams} from "react-router";

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
            <div className="albums-container">
                {/*{albums.map(album => (*/}

                    <Card className="albums-card">
                        <img
                            src={"https://via.placeholder.com/168x118.png"}
                            // src={album.image}
                            alt={`data thumbnail`}
                        />
                        <h5>piece {albums._id}</h5>
                        {/*<h6>Composer {album.nationality}</h6>*/}
                    </Card>
                {/*))}*/}
            </div>
        </div>
    );
};

export default Profile;