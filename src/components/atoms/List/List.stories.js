import React from 'react';
import { storiesOf } from '@storybook/react';
import List from './List';
import Item from 'components/atoms/Item';

storiesOf('Atoms/List', module)
    .add('Normal', () => 
        <List>
            <Item>Element 1</Item>
            <Item>Element 2</Item>
            <Item>Element 3</Item>
            <Item>Element 4</Item>
        </List>
    );