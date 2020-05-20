import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Price from './Price';

const Width = styled.div`
    width: 265px;
`;

storiesOf('Atoms/Price', module)
    .addDecorator(story => <Width>{story()}</Width>)
    .add('Normal', () => <Price>999</Price>);