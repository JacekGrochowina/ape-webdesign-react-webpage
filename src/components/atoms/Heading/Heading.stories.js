import React from 'react';
import { storiesOf } from '@storybook/react';
import Heading from './index';

storiesOf('Atoms/Heading', module)
  .add('Normal', () => <Heading>Hello World</Heading>)
  .add('Secondary', () => <Heading secondary>Hello World</Heading>);