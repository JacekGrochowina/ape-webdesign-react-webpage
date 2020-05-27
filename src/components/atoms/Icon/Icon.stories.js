import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';
import Image from 'assets/icons/strzala.png';

storiesOf('Atoms/Icon', module)
    .add('Normal', () => <Icon size={70} image={Image}/>);
