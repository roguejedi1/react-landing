import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroH1, HeroP, HeroBtnWrapper, HeroContent, ArrowForward, ArrowRight } from "./HeroElements";
import { Button } from "../ButtonElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>

            </HeroBg>
            <HeroContent>
                <HeroH1>
                    The Future of Space Travelling
                </HeroH1>
                <HeroP>
                    Travelling to space made easy. One click and fly me to the moon!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseHover={onHover} onMouseLeave={onHover} primary='true' dark='true'>Get Started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
