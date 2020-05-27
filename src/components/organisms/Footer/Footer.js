import React from 'react';
import routes from 'routes';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Paragraph from 'components/atoms/Paragraph';
import Brand from 'components/atoms/Brand';
import { Link } from 'components/atoms/Link';

// Animations
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
    padding-top: 50px;
    padding-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSize.xs};
    border-top: 1px solid ${({ theme }) => theme.color.light};
`;

const Footer = () => {
    return (
        <Fade>
            <Wrapper>
                <Container>
                    <Brand logotype width={225} />
                    <br/>
                    <Row>
                        <Col lg={6} xs={12}>
                            <Link to={routes.rodo}>Polityka prywatności</Link>
                        </Col>
                        <Col lg={6} xs={12}>
                            <Paragraph>Copyright © 2020 APE WebDesign - Projektowanie stron www</Paragraph>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </Fade>
    );
};

export default Footer;