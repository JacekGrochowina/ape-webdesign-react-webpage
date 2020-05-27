import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Slide from './Slide';
import Image from 'assets/bg/tworzenie-stron.jpg';

storiesOf('Molecules/Slide', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => 
        <Slide
            title="Hello World"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id libero eget elit malesuada bibendum ut quis nisi. Sed odio nisl, rhoncus at vulputate vitae, pretium vitae arcu. Sed vel erat ut ante eleifend dictum. Proin at tristique urna. "
            bgImg={Image}
        />
    )