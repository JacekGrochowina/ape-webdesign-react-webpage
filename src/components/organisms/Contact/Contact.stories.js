import React from 'react';
import { storiesOf } from '@storybook/react';
import Contact from './Contact';

storiesOf('Organisms/Contact', module)
    .add('Normal', () => <Contact />);
