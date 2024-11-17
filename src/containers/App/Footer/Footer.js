import React from "react";
import { Wrapper, IconsWrapper, VerticalLine, LogoWrapper, StyledText, IconBase } from "./Footer.styled";
import Icon, {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined,
    AliwangwangOutlined
} from "@ant-design/icons";

const Footer = () => {
    return (
        <Wrapper>
            <LogoWrapper>
                <IconBase component={AliwangwangOutlined} />
                <h1>Films.com</h1>
            </LogoWrapper>
            <p>Films are popular <br />aesthetic expression at a particular time, place and in a specific context, especially in <br />filming, footwear, lifestyle, accessories, makeup.</p>
            <VerticalLine />
            <IconsWrapper>
                <IconBase component={YoutubeOutlined} color='#FF0000' />
                <IconBase component={TwitterOutlined} color='#03A9F4' />
                <IconBase component={LinkedinOutlined} color='#007AB9' />
                <IconBase component={InstagramOutlined} color='#3A9F4' />
            </IconsWrapper>
            <VerticalLine />
            <StyledText>© Clay Shop all rights reserved</StyledText>
        </Wrapper>
    );
};

export default Footer;