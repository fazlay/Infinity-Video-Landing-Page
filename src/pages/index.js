
import React, { useState} from 'react'

import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar/index'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/data.js'
import Services from '../components/services/index'
import Footer from '../components/footer'
const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle =() => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection/>
            <InfoSection{... homeObjOne}/>
            <InfoSection{...homeObjTwo}/>
            <Services/>
            <InfoSection{...homeObjThree}/>
            <Footer/>
        </>
    )
}

export default Home;
