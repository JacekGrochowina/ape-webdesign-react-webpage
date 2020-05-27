import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

// Animations
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    min-height: calc(50vh - 70px);
    padding-bottom: 50px;
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

const Baner = ({
    title,
    description,
    bgImg,
    to
}) => {
    return (
        <Wrapper style={{backgroundImage: `url(${bgImg})`}}>
            <Content>
                <Fade top><Heading>{title}</Heading></Fade>
                <Fade><StyledParagraph>{description}</StyledParagraph></Fade>
                <Fade bottom><StyledButton as={Link} to={to}>Wstecz</StyledButton></Fade>
            </Content>
        </Wrapper>
    );
};

export default Baner;