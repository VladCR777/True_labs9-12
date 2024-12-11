import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from "../Redux/Actions";
import axios from 'axios';
import "./Film.Page.css";
import { useParams } from 'react-router-dom';  
const FilmPage = () => {
    const { id } = useParams();  
    const dispatch = useDispatch();
    const [film, setFilm] = useState(null);  
    const [loading, setLoading] = useState(true);  

    const fetchFilmData = async () => {
        try {
            const response = await axios.get(`http://localhost:1338/api/films/${id}`);
            setFilm(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching film data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFilmData();
    }, [id]); 

    const handleAddToCart = () => {
        dispatch(addToCart(film));
    };

    if (loading) {
        return <p>Loading...</p>; 
    }

    if (!film) {
        return <p>Film not found</p>;  
    }

    return (
        <div className="film-page">
            <h2>{film.name}</h2>
            <p>Duration: {film.duration} min</p>
            <p>Reviews: {film.reviews}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default FilmPage;
