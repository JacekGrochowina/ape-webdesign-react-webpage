import styled, { css } from 'styled-components';

const Heading = styled.h1`
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xl};
    color: ${({ theme }) => theme.color.dark};

    ${({ secondary }) =>
        secondary &&
        css`
        text-transform: uppercase;
        font-size: ${({ theme }) => theme.fontSize.m};
    `}
`;

export default Heading;