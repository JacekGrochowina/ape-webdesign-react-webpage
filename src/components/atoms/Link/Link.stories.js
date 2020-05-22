import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Link from './Link';

storiesOf('Atoms/Link', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <Link>Lorem ipsum</Link>);