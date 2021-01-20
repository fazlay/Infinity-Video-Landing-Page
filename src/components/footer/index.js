import React from 'react'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin } from 'react-icons/fa'

import {FooterContainer, FooterWrap, FooterLinkTitle, FooterLinksContainer, FooterLinksWrapper, FooterLink, FooterLinksItems, SocialIconLink, SocialLogo, SocialMedia,SocialMediaWrap, WebsiteRights,SocialIcons} from './footerElements'



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                             <FooterLink to="/signin">hOW IT WORKS</FooterLink>
                                <FooterLink to="/signin">tESTIMONIAL</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Investor</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                             <FooterLink to="/signin">hOW IT WORKS</FooterLink>
                                <FooterLink to="/signin">tESTIMONIAL</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Investor</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                             <FooterLink to="/signin">hOW IT WORKS</FooterLink>
                                <FooterLink to="/signin">tESTIMONIAL</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Investor</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                             <FooterLink to="/signin">hOW IT WORKS</FooterLink>
                                <FooterLink to="/signin">tESTIMONIAL</FooterLink>
                                <FooterLink to="/signin">Carrers</FooterLink>
                                <FooterLink to="/signin">Investor</FooterLink>
                                <FooterLink to="/signin">Terms of service</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            Dollar
                        </SocialLogo>
                        <WebsiteRights>dollar @{new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink herf="/" target= "_blank"
                            arial-label ="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink herf="/" target= "_blank"
                            arial-label ="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink herf="/" target= "_blank"
                            arial-label ="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink herf="//www.twitter.com" target= "_blank"
                            arial-label ="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink herf="/" target= "_blank"
                            arial-label ="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer
