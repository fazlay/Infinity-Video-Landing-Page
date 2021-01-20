import React, {useState} from 'react'
import { Button } from '../buttonElemnt'
import Video from '../../video/video.mp4'
import {HeroContainer, HeroBG, VideoBG , HeroContent, 
    HeroH1, HeroP,HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElement'


export const HeroSection = () => {
const[hover, setHover] = useState(false)

const onHover= ()=> {
    setHover(!hover)
}

    return (
        <HeroContainer>
            <HeroBG>
                <VideoBG autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBG>
            <HeroContent>
                <HeroH1>
                Virtual Banking made Easy
                </HeroH1>
                <HeroP> Signup for a New account and recive  dolllar cerdit ewoards your next payment</HeroP>
         <HeroBtnWrapper>
              <Button to ='signup 'onMouseEnter={hover}
             onMouseLeave={onHover}>
                 Get Started {hover?<ArrowForward/>: <ArrowRight/>}
             </Button>
         </HeroBtnWrapper>
            </HeroContent>
            
        </HeroContainer>
    )
}

export default HeroSection;