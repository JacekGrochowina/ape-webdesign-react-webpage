import React from 'react';
import { storiesOf } from '@storybook/react';
import PriceList from './PriceList';
import data from 'data';

storiesOf('Organisms/PriceList', module)
    .add('Normal', () => <PriceList>{data.prices[2]}</PriceList>);