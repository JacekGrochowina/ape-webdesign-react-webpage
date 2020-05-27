import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Section from 'components/atoms/Section';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import CardsList from 'components/molecules/CardsList';

// Animations
import Fade from 'react-reveal/Fade';

const StyledParagraph = styled(Paragraph)`
    margin-top: 40px;
`;

const PriceList = ({ children }) => {
    return (
        <Section>
            <Container>
                <Fade top><Heading tone="cennik">Orientacyjny </Heading></Fade>
                <Fade><StyledParagraph>Podane poniżej ceny są orientacyjne. Cena końcowa może się różnić w niektórych przypadkach. Każdy klient ma inne potrzeby więc każdego traktujemy indywidualnie. Właśnie przez to zdecydowaliśmy się nazwać tę sekcję orientacyjny cennik. Prosimy o kontakt, kiedy ustalimy ogólny zarys projektu dokonamy dokładnej bezpłatnej wyceny.</StyledParagraph></Fade>
                <CardsList>{children}</CardsList>
            </Container>
        </Section>
    );
};

export default PriceList;