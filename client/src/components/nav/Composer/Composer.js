
import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client"
import Axios from "axios"
import CreateNewForm from "../../CreateNewForm";
import AnimalCard from "../../AnimalCard";


const Composer = () => {
    // const [animals, setAnimals] = useState([])
    const animals = [
        {name:"aaa", species: "cat"},
        {name:"bbb", species: "dog"},
        {name:"vvv", species: "cat"}
    ]
    const [isopen, setisopen] = useState(false);
    const toggle = () => {
        setisopen(!isopen);
    };

    useEffect(() => {
        async function go() {
            const response = await Axios.get("/api/animals")
            // setAnimals(response.data)
        }
        go()
    }, [])
    return (

        <div className="container">
            <p>
                <a href="/">&laquo; Back to public homepage</a>
            </p>
            {/*<CreateNewForm setAnimals={setAnimals} />*/}
            <div className="animal-grid">
                {animals.map(function (animal) {
                    return <AnimalCard key={animal._id} name={animal.name} species={animal.species} photo={animal.photo} id={animal._id}  />
                })}
            </div>
        </div>
    );
};

export default Composer;