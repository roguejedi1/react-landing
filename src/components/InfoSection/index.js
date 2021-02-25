import React from 'react'
import { Button } from "../ButtonElements";
import { ImgWrap, Img, InfoContainer, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, InfoRow } from './InfoElements';
import ImgSpace from "../../images/space.svg";

const InfoSection = ({lightBg, id, imgStart, topline, lightText, headline, darkText, description, buttonLabel, img, alt, primary}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topline}
                                </TopLine>
                                    <Heading lightText={lightText}>
                                        {headline}
                                </Heading>
                                    <Subtitle darkText={darkText}>
                                        {description}
                                </Subtitle>
                                    <BtnWrap>
                                        <Button to="home" 
                                        smooth={true} 
                                        duration={500} 
                                        spy={true} 
                                        exact="true" 
                                        offset={-80} 
                                        darkText={darkText}
                                        primary={primary}
                                        >
                                        {buttonLabel}
                                        </Button>
                                    </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>   
        </>
    )
}


export default InfoSection
