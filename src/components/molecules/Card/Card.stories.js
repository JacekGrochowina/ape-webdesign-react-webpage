import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Item from 'components/atoms/Item';
import Card from 'components/molecules/Card';

const Width = styled.div`
    margin: 20px 50px;
    width: 400px;
`;

storiesOf('Molecules/Card', module)
    .addDecorator(story => <Width>{story()}</Width>)
    .add('Normal', () => 
        <Card offertName="standardowa" price={799}>
            <Item card>onepage / 0 podstron</Item>
            <Item card>1 płatna grafika</Item>
            <Item card>Responsywny layout</Item>
            <Item card>Nowoczesny design</Item>
            <Item card>Mapa Google Maps</Item>
            <Item card>Galeria obsługująca swipe</Item>
            <Item card>Hosting & domena gratis</Item>
        </Card>
    )
    .add('Focus', () => 
        <Card focus offertName="standardowa" price={799}>
            <Item card>onepage / 0 podstron</Item>
            <Item card>1 płatna grafika</Item>
            <Item card>Responsywny layout</Item>
            <Item card>Nowoczesny design</Item>
            <Item card>Mapa Google Maps</Item>
            <Item card>Galeria obsługująca swipe</Item>
            <Item card>Hosting & domena gratis</Item>
        </Card>
    );