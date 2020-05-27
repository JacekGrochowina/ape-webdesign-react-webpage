import React from 'react';
import Section from 'components/atoms/Section';
import { Container, Row, Col } from 'react-bootstrap';
import Tile from 'components/molecules/Tile';
import Icon1 from 'assets/icons/strzala.png';
import Icon2 from 'assets/icons/tablica.png';
import Icon3 from 'assets/icons/terminowosc.png';
import Icon4 from 'assets/icons/szampan.png';

// Animations
import Flip from 'react-reveal/Flip';

const TilesList = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Col md={6}>
                        <Flip top>
                            <Tile
                                icon={Icon1}
                                title="Profesjonalizm"
                                description="Znamy się na tym co robimy."
                            />
                        </Flip>
                    </Col>
                    <Col md={6}>
                        <Flip top>
                            <Tile
                                icon={Icon2}
                                title="Nowoczesny wygląd"
                                description="Wiemy jak tworzyć strony 
                                które zachęcą klientów."
                            />
                        </Flip>
                    </Col>
                    <Col md={6}>
                        <Flip top>
                            <Tile
                                icon={Icon3}
                                title="Terminowość"
                                description="Czas to pieniądz."
                            />
                        </Flip>
                    </Col>
                    <Col md={6}>
                        <Flip top>
                            <Tile
                                icon={Icon4}
                                title="Dbamy o twój sukces"
                                description="Dla nas każdy projekt 
                                jest najważniejszy."
                            />
                        </Flip>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
};

export default TilesList;