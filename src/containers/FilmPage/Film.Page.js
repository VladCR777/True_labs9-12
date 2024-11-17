import React from "react";
import { useParams } from "react-router-dom";
import { allFilms } from "../Catalog/Catalog";  

const FilmPage = () => {
    const { id } = useParams(); 
    const film = allFilms.find(f => f.id === parseInt(id)); 

    if (!film) {
        return <div>Film not found</div>;
    }

    return (
        <div>
            <h1>{film.title}</h1>
            <img src={film.image} alt={film.title} />
            <p>{film.description}</p>
            <p>{film.duration}</p>
            <p>{film.reviews} reviews</p>
        </div>
    );
};

export default FilmPage;
