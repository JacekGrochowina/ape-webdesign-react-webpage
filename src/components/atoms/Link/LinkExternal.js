import React from 'react';
import styled from 'styled-components';

const StyledLinkExternal = styled.a`
    font-family: ${({ theme }) => theme.fontFamily.leading};
    color: ${({ theme }) => theme.color.gray};
    text-decoration: none;
    :hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.gray};
    }
`;

const LinkExternal = ({ children, to, blank }) => {
    return (
        <StyledLinkExternal 
            href={to}
            target={blank === true ? "_blank" : null}
        >{children}</StyledLinkExternal>
    );
};

export default LinkExternal;