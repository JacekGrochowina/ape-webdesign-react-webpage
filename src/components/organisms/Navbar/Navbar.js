import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { HamburgerSpin } from 'react-animated-burgers';
import gsap from 'gsap';
import Brand from 'components/atoms/Brand';
import List from 'components/atoms/List';

const NAV_SETTINGS = {
    height: '80px',
};

const Nav = styled.nav`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: ${() => NAV_SETTINGS.height};
    width: 100%;
    padding: 10px 0;
    box-shadow: 0 1px 5px rgba(0,0,0,0.3);
    background-color: ${({ theme }) => theme.color.white};
    z-index: 9999;
`;

const NavWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0 15px;
`;

const StyledList = styled(List)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0;

    @media(max-width: 1024px) {
        position: absolute;
        top: calc(${() => NAV_SETTINGS.height} - 10px);
        left: 0;
        width: 100%;
        min-height: calc(100vh - ${() => NAV_SETTINGS.height});
        background-color: ${({ theme }) => theme.color.white};
        flex-direction: column;
        justify-content: center;
    }
`;

const StyledNavLink = styled(NavLink)`
    position: relative;
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.gray};
    padding: 10px 20px;
    z-index: 0;
    transition-property: color;
    transition-duration: 0.25s;
    ::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 0;
        background-color: ${({ theme }) => theme.color.leading};
        z-index: -1;
        transition-property: height;
        transition-duration: 0.25s;
    }
    :hover {
        color: ${({ theme }) => theme.color.white} !important;
        text-decoration: none;
    }
    :hover::before {
        height: 100%;
    }
    &.active {
        color: ${({ theme }) => theme.color.leading};
        @media(max-width: 1024px) {
            :hover {
                color: ${({ theme }) => theme.color.leading} !important;
            }
        }
    }

    @media(max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        height: 70px;
        text-align: center;
        border-bottom: 1px solid ${({ theme }) => theme.color.light};
        :nth-last-of-type(1) {
            border-bottom: none;
        }
        ::before {
            content: none;
        }
        :hover {
            color: ${({ theme }) => theme.color.gray} !important;
        }
    }
`;

const StyledHamburgerSpin = styled(HamburgerSpin)`
    display: none;

    @media(max-width: 1024px) {
        display: block;
    }
`;

const Navbar = ({ children }) => {

    const [isActive, setIsActive] = useState(false);
    
    let list = useRef(null);
    useEffect(() => {
        const showNavbar = () => {
            setIsActive(true);
            gsap.set(list, {autoAlpha: 1});
        };
        if(window.innerWidth >= 1024) {
            showNavbar();
        }
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 1024) {
                showNavbar();
            } else {
                setIsActive(false)
            }
        });

        if(!isActive) {
            gsap.from(list, {duration: 0.25, autoAlpha: 1});
            gsap.to(list, {duration: 0.25, autoAlpha: 0});
        } else {
            gsap.from(list, {duration: 0.25, autoAlpha: 0});
            gsap.to(list, {duration: 0.25, autoAlpha: 1});
        }
    }, [isActive])

    const handlerClick = () => {
        setIsActive(!isActive);
    }

    const NavLinks = children.map(element => 
        <StyledNavLink exact key={element.key} to={element.to} onClick={handlerClick}>
            {element.name}
        </StyledNavLink>
    );

    return (
        <Nav>
            <NavWrapper>
                <Brand logotype width={210}/>
                <StyledHamburgerSpin
                    isActive={isActive}
                    onClick={() => setIsActive(!isActive)}
                    barColor="#9B556E"
                />
                <StyledList
                    ref={el => (list = el)}
                    isActive={isActive}
                    className={isActive ? "active" : null}
                >
                    {NavLinks}
                </StyledList>
            </NavWrapper>
        </Nav>
    );
};

export default Navbar;