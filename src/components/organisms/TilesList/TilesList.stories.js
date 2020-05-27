import React from 'react';
import { storiesOf } from '@storybook/react';
import TilesList from './TilesList';

storiesOf('Organisms/TilesList', module)
    .add('Normal', () => <TilesList/>);
