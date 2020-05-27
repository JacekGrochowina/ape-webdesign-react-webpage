import React from 'react';
import { storiesOf } from '@storybook/react';
import CardsList from './CardsList';
import data from 'data';

storiesOf('Molecules/CardsList', module)
    .add('Normal', () => 
        <CardsList>{data.prices[2]}</CardsList>
    );