import styled, { css } from 'styled-components';

const Button = styled.button`
    padding: 14px 40px;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fontFamily.leading};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.leading};
    letter-spacing: 2px;
    border: 3px solid ${({ theme }) => theme.color.leading};
    cursor: pointer;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0);
    transition-property: box-shadow;
    transition-duration: 0.25s;

    ${({ secondary }) =>
        secondary &&
        css`
        color: ${({ theme }) => theme.color.leading};
        background-color: transparent;
        border: 3px solid ${({ theme }) => theme.color.leading};
    `}

    :hover {
        box-shadow: 0 1px 15px rgba(0, 0, 0, 0.5);
    }
`;

export default Button;
