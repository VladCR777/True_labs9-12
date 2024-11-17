import React from "react";
import { Card, Button } from "antd";
import { Footer } from "./CardItem.styled";
// import { StyledButton } from "./CardItem.styled";
// import { IdentifyWrapper } from "./CardItem.styled";
import { ImageWrapper } from "./CardItem.styled";
import { Link } from "react-router-dom";

const { Meta } = Card;

const CardItem2 = ({ id, title = 'No title.', imageSrc, duration, reviews }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <ImageWrapper>
                
                <img style={{ borderRadius: "20px" }} alt="example" src={imageSrc} />
            </ImageWrapper>
        }
    >
        <Meta title={title} description={duration} />
        <Footer>
            <p>{reviews}</p>
            <Link to={`/film/${id}`}>
                <Button>View More</Button>
            </Link>
        </Footer>
    </Card>
);

export default CardItem2;