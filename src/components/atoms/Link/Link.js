import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SyledLink = styled(Link)`
    font-family: ${({ theme }) => theme.fontFamily.leading};
    color: ${({ theme }) => theme.color.gray};
    text-decoration: none;
    :hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.color.gray};
    }
`;

const ComponentLink = ({ children, to }) => {
    return (
        <SyledLink to={to}>{children}</SyledLink>
    );
};

export default ComponentLink;