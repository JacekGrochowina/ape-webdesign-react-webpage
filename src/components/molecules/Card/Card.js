import React from 'react';
import styled, { css } from 'styled-components';

// Components
    import Button from 'components/atoms/Button';
    import Heading from 'components/atoms/Heading';
    import Price from 'components/atoms/Price';

const Wrapper = styled.div`
    padding: 60px 50px;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.color.light};
    transition-property: box-shadow;
    transition-duration: 0.25s;
    :hover {
        box-shadow: 0 1px 13px rgba(0,0,0,0.2);
    }

    ${({ focus }) =>
        focus &&
        css`
        border: 1px solid ${({ theme }) => theme.color.leading};
    `}
`;

const List = styled.ul`
    margin-top: 20px;
    margin-bottom: 50px;
`;

const Card = ({ children, focus, offertName, price }) => {
    return (
        <Wrapper focus={focus ? focus : null}>
            <Heading card>{offertName}</Heading>
            <br/>
            <Price>{price}</Price>
            <List>
                {children}
            </List>
            {focus ? 
                <Button>Zamów</Button> : 
                <Button secondary>Zamów</Button>
            }
        </Wrapper>
    );
};

export default Card;