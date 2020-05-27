import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Section from 'components/atoms/Section';
import List from 'components/atoms/List';
import Item from 'components/atoms/Item';
import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';

import iconMapMarker from 'assets/icons/iconMapMarker.svg';
import iconPhone from 'assets/icons/iconPhone.svg';
import iconEnvelope from 'assets/icons/iconEnvelope.svg';

// Animations
import Fade from 'react-reveal/Fade';

const StyledParagraph = styled(Paragraph)`
    margin-top: 45px;
    margin-bottom: 45px;
    max-width: 500px;
`;

const StyledItem = styled(Item)`
    margin-bottom: 15px;
`;

const Contact = () => {
    return (
        <Section>
            <Container>
                <Fade top><Heading>Bądźmy w kontakcie</Heading></Fade>
                <Fade><StyledParagraph>Możesz do nas napisać email, zadzwonić lub wysłać SMS. Skontaktuj się z nami, aby porozmawiać o Twoim projekcie.</StyledParagraph></Fade>
                <List>
                <Fade bottom>
                    <StyledItem
                        icon={iconMapMarker}
                        iconSize={18}
                        fontSize={18}
                    >
                        Włocławek 87-800
                        
                    </StyledItem>
                </Fade>
                <Fade bottom>
                    <StyledItem
                        icon={iconPhone}
                        iconSize={18}
                        fontSize={18}
                    >
                        796 526 375
                    </StyledItem>
                </Fade>
                <Fade bottom>
                    <StyledItem
                        icon={iconEnvelope}
                        iconSize={18}
                        fontSize={18}
                    >
                        apewebdesign@vp.pl
                    </StyledItem>
                </Fade>
                </List>
            </Container>
        </Section>
    );
};

export default Contact;