import React, {useState, useEffect} from 'react'
import { FaBars } from "react-icons/fa";
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'

import {Nav,
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    Navmenu, 
    NavItems, 
    NavLinks,
    NavBtn,
    NavBtnLink} from './navbarElements'
const Navbar = ({toggle}) => {

    const[scrollNav, setScrollNav] = useState(false);
    const changeNav = ()=>{
        if(window.scrollY>=80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {window.addEventListener('scroll', changeNav);},[]);

const toggleHome =() => {
    scroll.scrollToTop()
}

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>

       
        <Nav scrollNav= {scrollNav}>
            <NavbarContainer>
                <NavLogo to='/'onClick={toggleHome}> 
                    dollar
                </NavLogo >

                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon >
                <Navmenu>
                    <NavItems>
                        <NavLinks to="about" smooth={true} duration={500} spy={true}exact='true' offset={-80}>About </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="discover"  smooth={true} duration={500} spy={true}exact='true' offset={-80} > Discover </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="service"  smooth={true} duration={500} spy={true}exact='true' offset={-80} >service </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to="signup"  smooth={true} duration={500} spy={true}exact='true' offset={-80}>Sign Up </NavLinks>
                    </NavItems>
                </Navmenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
