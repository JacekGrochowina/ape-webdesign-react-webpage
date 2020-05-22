import React from 'react';
import { storiesOf } from '@storybook/react';
import LinkExternal from './LinkExternal';

storiesOf('Atoms/LinkExternal', module)
    .add('Normal', () => <LinkExternal to={"http://jacekcv.com/"}>Lorem ipsum</LinkExternal>)
    .add('Blank', () => <LinkExternal to={"http://jacekcv.com/"} blank>Lorem ipsum</LinkExternal>);