import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Navbar from './Navbar';
import data from 'data';

storiesOf('Organisms/Navbar', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <Navbar>{data.nav}</Navbar>);