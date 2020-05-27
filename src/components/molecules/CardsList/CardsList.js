import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Section from 'components/atoms/Section';
import Item from 'components/atoms/Item';
import Card from 'components/molecules/Card';

// Animations
import Pulse from 'react-reveal/Pulse';

const CardsList = ({ children }) => {

    const Cards = children.cards.map(element =>
        <Col lg={4}>
            <Pulse>
                <Card focus={element.focus ? true : null} offertName={element.title} price={element.price}>
                    {element.services.map(element => 
                        <Item card>{element}</Item>
                    )}
                </Card>
            </Pulse>
        </Col>
    );

    return (
        <Section>
            <Row>
                {Cards}
            </Row>
        </Section>
    );
};

export default CardsList;