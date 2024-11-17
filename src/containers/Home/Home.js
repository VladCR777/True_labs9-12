import React, { useState } from "react";
import ModelPicture from "../../Icons/model.png";
import ImageModel1 from "../../Icons/image-model1.png";
import ImageModel2 from "../../Icons/image_model.png";
import ImageModel3 from "../../Icons/image-model3.png";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardItem/CardItem";


const initialData = [
    {
        title: " black vest",
        text: "Slim women went to the forest",
        image: ImageModel1,
        price: 715,
    },
    {
        title: " black vest",
        text: "Slim women went to the forest",
        image: ImageModel2,
        price: 1005,
    },
    {
        title: " black vest",
        text: "Slim women went to the forest",
        image: ImageModel3,
        price: 500,
    },
];

const Home = () => {
    const [data, setData] = useState(initialData);

    const handleShowMore = () => {
        const newData = [
            ...data,
            {
                title: "New item",
                text: "This is a new random item.",
                image: ImageModel1, 
                price: 1000,
            },
            {
                title: "Another new item",
                text: "This is another random item.",
                image: ImageModel2,
                price: 1500,
            },
        ];
        setData(newData); 
    };

    return (
        <div>
            <SectionWrapper>
                <StyledText>
                    <h1>View the greatest films of all time</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                        scelerisque tristique neque, eget facilisis purus consequat sit
                        amet. Nulla iaculis felis eget rutrum blandit. Morbi volutpat sapien
                        eget odio gravida, eu placerat erat eleifend. Aliquam erat volutpat.
                        Quisque sed tincidunt felis. Sed bibendum
                    </p>
                    <StyledButton size="large" onClick={handleShowMore}>
                        Show More
                    </StyledButton>
                </StyledText>
                <img src={ModelPicture} alt="model" />
            </SectionWrapper>
            <CardWrapper>
                {data.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        key={idx}
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </div>
    );
};

export default Home;
