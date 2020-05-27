import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

const Wrapper = styled.div`
    min-height: calc(100vh - 70px);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const Content = styled.div`
    padding: 80px 30px 15px;
    width: 100%;
    max-width: 1400px;
    margin: auto;
`;

const StyledParagraph = styled(Paragraph)`
    max-width: 450px;
    margin-top: 20px;
    margin-left: 20px;
`;

const StyledButton = styled(Button)`
    display: inline-block;
    margin-top: 40px;
    :hover {
        text-decoration: none;
        color: ${({ theme }) => theme.color.white};
    }
`;

const Slide  = ({ 
    title,
    description,
    bgImg,
    to
}) => {
    return (
        <Wrapper style={{backgroundImage: `url(${bgImg})`}}>
            <Content>
                <Heading>{title}</Heading>
                <StyledParagraph>{description}</StyledParagraph>
                <StyledButton as={Link} to={to}>Dowiedz się więcej</StyledButton>
            </Content>
        </Wrapper>
    );
};

export default Slide;