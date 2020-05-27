import React from 'react';
import PropTypes from 'prop-types';
import data from 'data';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import { Parallax } from 'react-parallax';
import Contact from 'components/organisms/Contact';
import Footer from 'components/organisms/Footer';
import Navbar from 'components/organisms/Navbar';
import Image from 'assets/bg/laptop-photo.jpg';
import Shape from 'assets/shapes/shape1.svg';

const MainTemplate = ({ children }) => {

    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Navbar>{data.nav}</Navbar>
                {children}
                <Parallax
                    blur={0}
                    bgImage={Image}
                    bgImageAlt="Laptop"
                    strength={500}
                >
                <div style={{ height: '50vh' }} />
                <div style={{
                    position: 'absolute',
                    top: '0',
                    bottom: '0',
                    right: '0',
                    left: '0',
                    backgroundImage: `url(${Shape})`,
                    backgroundPosition: '30%',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}/>
                </Parallax>
                <Contact />
                <Footer />
            </ThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default MainTemplate;