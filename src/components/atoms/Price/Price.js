import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.color.superLight};
    padding: 30px 20px;
    text-align: center;
`;

const Span = styled.span`
    color: ${({ theme }) => theme.color.gray};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    margin: 0 5px;

    ${({ color }) =>
        color &&
        css`
            color: ${({ theme }) => theme.color.leading};
    `}

    ${({ price }) =>
        price &&
        css`
            color: ${({ theme }) => theme.color.dark};
            font-family: ${({ theme }) => theme.fontFamily.secondary};
            font-size: ${({ theme }) => theme.fontSize.xl};
    `}

    ${({ info }) =>
        info &&
        css`
            display: block;
            color: ${({ theme }) => theme.color.gray};
            font-family: ${({ theme }) => theme.fontFamily.secondary};
            font-weight: ${({ theme }) => theme.fontWeight.regular};
            font-size: ${({ theme }) => theme.fontSize.xs};
            letter-spacing: 1px;
    `}
`;

const Price = ({ children }) => {
    return (
        <Wrapper>
            <Span color>od</Span>
            <Span price>{children}</Span>
            <Span>zł</Span>
            <Span info>(cena netto)</Span>
        </Wrapper>
    );
};

export default Price;