import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Normal', () => <Button>Hello World</Button>)
  .add('Secondary', () => <Button secondary>Hello World</Button>);
