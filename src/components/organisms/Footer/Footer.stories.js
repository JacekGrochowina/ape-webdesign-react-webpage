import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';

import Footer from './Footer';

storiesOf('Organisms/Footer', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => <Footer />);