import React from 'react';
import { storiesOf } from '@storybook/react';
import Brand from './Brand';

storiesOf('Atoms/Brand', module)
    .add('Logo', () => <Brand logo/>)
    .add('Logotype', () => <Brand logotype/>)
    .add('Custom width', () => <Brand logotype width={300} />)