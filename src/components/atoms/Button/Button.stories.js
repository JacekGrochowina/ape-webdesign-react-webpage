import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .add('Normal', () => <Button>Hello Roman</Button>)
  .add('Secondary', () => <Button secondary>Hello Roman</Button>);
