import React, {useState, useEffect} from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, NavBtn, NavBtnLink } from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>Land</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItems>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true" offset={-80}>About</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="pricing" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Pricing</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="faq" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Our Services</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true" offset={-80}>Sign Up</NavLinks>
                        </NavItems>
                        <NavBtn>
                            <NavBtnLink to="/login">Login </NavBtnLink>
                        </NavBtn>
                        </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
}

export default Navbar
