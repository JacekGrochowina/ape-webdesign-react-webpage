import React from 'react';
import { storiesOf } from '@storybook/react';
import Tile from './Tile';
import Icon from 'assets/icons/strzala.png';

storiesOf('Molecules/Tile', module)
    .add('Normal', () => 
        <Tile 
            icon={Icon}
            title="Hello world"
            description="Lorem ipsul dolor et sanum."
        />);
