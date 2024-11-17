import React, { useState } from "react";
// import Filter from "./Filter";
// import ButtonCatalog from "./ButtonCatalog";
// import ModelPicture from "../../Icons/model.png";
import ImageModel1 from "../../Icons/image-model1.png";
// import ImageModel2 from "../../Icons/image_model.png";
// import ImageModel3 from "../../Icons/image-model3.png";
import FilterMenu from "./FilterMenu";
import {
    // SectionWrapper,
    // StyledText,
    // StyledButton,
    CardWrapper,
} from "./Catalog.styled";
import CardItem2 from "../../components/CardItem/CardItem2";



export const allFilms = [
    { id: 1, title: "Winter Bliss", image: ImageModel1, duration: "60", reviews: "reviews: 100" },
    { id: 2, title: "Summer Vibes", image: ImageModel1, duration: "120", reviews: "reviews: 120" },
    { id: 3, title: "Autumn Dreams", image: ImageModel1, duration: "90", reviews: "reviews: 80" },
    { id: 4, title: "Spring Awakening", image: ImageModel1, duration: "130", reviews: "reviews: 150" }
];

const FilmsList = () => {
    const [filteredFilms, setFilteredFilms] = useState(allFilms);  

    const handleApplyFilters = (filters) => {
        const { durationFilter } = filters;

        const filtered = allFilms.filter(film => {
            const duration = parseInt(film.duration, 10);  

            if (durationFilter === 'under60') {
                return duration < 60;
            }
            if (durationFilter === 'under120') {
                return duration >= 60 && duration < 120;
            }
            if (durationFilter === 'over120') {
                return duration >= 120;
            }
            return true;  
        });

        setFilteredFilms(filtered);
    };

    return (
        <div>
            <FilterMenu onApply={handleApplyFilters} />
            <CardWrapper>
                {filteredFilms.map((film, idx) => (
                    <CardItem2
                        id = {film.id}
                        key={idx}
                        
                        title={film.title}
                        imageSrc={film.image}
                        duration={`Duration: ${film.duration} min`}
                        reviews={film.reviews}
                    />
                ))}
            </CardWrapper>
        </div>
    );
};

export default FilmsList;