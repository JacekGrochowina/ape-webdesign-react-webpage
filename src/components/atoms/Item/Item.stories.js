import React from 'react';
import { storiesOf } from '@storybook/react';
import Item from './Item';
import iconMapMarker from 'assets/icons/iconMapMarker.svg';

storiesOf('Atoms/Item', module)
  .add('Normal', () => <Item>Hello World</Item>)
  .add('Unique', () => <Item icon={iconMapMarker} iconSize={50} fontSize={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Item>)
  .add('Card', () => <Item card>Lorem ipsum dolor sit amet</Item>)
  .add('Numbering', () => <Item numbering>Lorem ipsum dolor sit amet</Item>)
  .add('Circle', () => <Item circle>Lorem ipsum dolor sit amet</Item>);