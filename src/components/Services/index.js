import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from "./ServicesElements";
import Icon1 from "../../images/space.svg";
import Icon2 from "../../images/launchview.svg";
import Icon3 from "../../images/launchsite.svg";


const Services = props => {
    return (
        <ServicesContainer id='faq'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Cheap Flights</ServicesH2>
                    <ServicesP>We give you cheap af flights to space.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Great Views</ServicesH2>
                    <ServicesP>We give you cheap af flights to space.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Membership</ServicesH2>
                    <ServicesP>Go to space elite style.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
