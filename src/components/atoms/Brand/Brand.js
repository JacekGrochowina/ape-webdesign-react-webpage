import React from 'react';
import routes from 'routes';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logoSVG from 'assets/logo.svg';
import logotypeSVG from 'assets/logotype.svg';

const StyledLogo = styled.img`
    display: block;
    width: ${({ width }) => width == null ? "100%" : `${width}px` };
`;

const Brand = ({ logo, logotype, width }) => {
    return(
        <Link to={routes.home}>
            <StyledLogo
                src={logo === true ? logoSVG : logotype === true ? logotypeSVG : null} 
                alt="APE WebDesign"
                width={width}
            />
        </Link>
    );
};

export default Brand;