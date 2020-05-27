import React from 'react';
import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import Brand from './Brand';

storiesOf('Atoms/Brand', module)
    .addDecorator(StoryRouter())
    .add('Logo', () => <Brand logo/>)
    .add('Logotype', () => <Brand logotype/>)
    .add('Custom width', () => <Brand logotype width={300} />)