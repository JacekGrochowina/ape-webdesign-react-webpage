import React from 'react';
import styled, { css } from 'styled-components';
import logoSVG from 'assets/logo.svg';
import logotypeSVG from 'assets/logotype.svg';

const StyledLogo = styled.img`
    display: block;
    width: ${({ width }) => width == null ? "100%" : `${width}px` };
    /* width: 100%; */
`;

const Brand = ({ logo, logotype, width }) => {
    return(
        <StyledLogo 
            src={logo === true ? logoSVG : logotype === true ? logotypeSVG : null} 
            alt="APE WebDesign"
            width={width}
        />
    );
};

export default Brand;