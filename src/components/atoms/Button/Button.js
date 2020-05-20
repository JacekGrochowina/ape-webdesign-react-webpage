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

    ${({ secondary }) =>
        secondary &&
        css`
        color: ${({ theme }) => theme.color.leading};
        background-color: transparent;
        border: 3px solid ${({ theme }) => theme.color.leading};
    `}
`;

export default Button;
