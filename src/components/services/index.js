import React from 'react'
import {ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper,ServicesCard} from './servicesElements'
import Icon1 from '../../images/image01.svg';
const Services = () => {
    return (
        <ServicesContainer id='services'>
         <ServicesH1>Our Services</ServicesH1> 
         <ServicesWrapper>
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Reducer expense</ServicesH2>
            <ServicesP>We help reduce your fees ans increase your burdern</ServicesP>   
        </ServicesCard> 
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Virtual Offices</ServicesH2>
            <ServicesP>you can access nay whree from ht e anea firejj n</ServicesP>   
        </ServicesCard>  
        <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Premium benifits </ServicesH2>
            <ServicesP>uncolc our premium services for the luch ko thud s increase your burdern</ServicesP>   
        </ServicesCard>      
        </ServicesWrapper>  
        </ServicesContainer>
    )
}

export default Services;
