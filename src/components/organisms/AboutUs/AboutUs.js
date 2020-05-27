import React from 'react';
import styled, { css } from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import List from 'components/atoms/List';
import Item from 'components/atoms/Item';
import Section from 'components/atoms/Section';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

// Animations
import Fade from 'react-reveal/Fade';

const StyledParagraph = styled(Paragraph)`
    ${({ marginTop }) =>
        marginTop &&
        css`
        margin-top: 40px;
    `}

    ${({ marginBottom }) =>
        marginBottom &&
        css`
        margin-bottom: 40px;
    `}
`;

const StyledItem = styled(Item)`
    margin-bottom: 10px;
`;

const AboutUs = () => {
    return (
        <Section>
            <Container>
                <Fade>
                    <Heading tone="?">Co możemy Ci zaoferować</Heading>
                </Fade>

                <Row>
                    <Col lg={6}>
                        <Fade bottom>
                            <StyledParagraph marginTop>Decydując się na nasze usługi, zyskujesz w pełni funkcjonalną, responsywną i zgodną z najnowszymi standardami stronę WWW.</StyledParagraph>
                            <StyledParagraph marginBottom>Nasze witryny prezentują się idealnie niezależnie od urządzenia, na którym są przeglądane. Z nami nie zamykasz się na użytkowników mobilnych, którzy generują aż 68% ruchu w sieci!</StyledParagraph>
                        </Fade>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <List>
                            <Fade bottom><StyledItem>Całkowicie funkcjonalna strona internetowa</StyledItem></Fade>
                            <Fade bottom><StyledItem>Strona przyjazna przeglądaniu mobilnemu</StyledItem></Fade>
                            <Fade bottom><StyledItem>Strona zgodna ze specyfiką Twojego biznesu</StyledItem></Fade>
                            <Fade bottom><StyledItem>Estetyczny i funkcjonalny design</StyledItem></Fade>
                            <Fade bottom><StyledItem>Jednorazowa opłata za wykonanie strony WWW</StyledItem></Fade>
                        </List>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default AboutUs;