import React, { useState, useEffect } from "react";
import axios from "axios";
import FilterMenu from "./FilterMenu";
import {
    CardWrapper,
} from "./Catalog.styled";
import CardItem2 from "../../components/CardItem/CardItem2";
import "./Loaded.css";

const FilmsList = () => {
    const [films, setFilms] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState({
        durationFilter: "",
    });

    const [loading, setLoading] = useState(true);
    const [isSpinnerVisible, setIsSpinnerVisible] = useState(true);

    const fetchFilms = async (search = "", durationFilter = "") => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:1338/api/films", {
                params: { searchTerm: search, durationFilter }, 
            });
            setFilms(response.data);
            setLoading(false);
            setIsSpinnerVisible(false);
        } catch (error) {
            console.error("Error fetching films:", error);
        }
    };
    
    useEffect(() => {
        fetchFilms();
    }, []);

    const handleApplyFilters = (filters) => {
        setFilters(filters);
        fetchFilms(searchTerm, filters.durationFilter);
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
        fetchFilms(term, filters.durationFilter);
    };

    return (
        <div>
            <FilterMenu onApply={handleApplyFilters} onSearch={handleSearch} />
            {isSpinnerVisible && <div className="loader"></div>}
            {!isSpinnerVisible && !loading && (
                <CardWrapper>
                    {films.map((film, idx) => (
                        <CardItem2
                            id={film.id}
                            key={idx}
                            title={film.name}
                            imageSrc={film.image}
                            duration={`Duration: ${film.duration} min`}
                            reviews={film.reviews}
                        />
                    ))}
                </CardWrapper>
            )}
        </div>
    );
};

export default FilmsList;
