import React from 'react';
import { storiesOf } from '@storybook/react';
import Slide from 'components/molecules/Slide';
import StoryRouter from 'storybook-react-router';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import Image1 from 'assets/bg/opieka-nad-stronami.jpg';
import Image2 from 'assets/bg/tworzenie-grafiki.jpg';
import Image3 from 'assets/bg/tworzenie-stron.jpg';

const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next.swiper-button-leading',
      prevEl: '.swiper-button-prev.swiper-button-leading'
    },
    spaceBetween: 0,
    loop: true,
}

storiesOf('Organisms/Swiper', module)
    .addDecorator(StoryRouter())
    .add('Normal', () => 
        <Swiper {...params}>
            <div>
                <Slide
                    key="1"
                    title="Hello World 1"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus aliquet hendrerit."
                    bgImg={Image1}
                    to="/"
                /> 
            </div>
            <div>
                <Slide
                    key="1"
                    title="Hello World 2"
                    description="In bibendum justo at tempus congue. Mauris nec mauris eu sapien aliquam mollis fermentum sed elit."
                    bgImg={Image2}
                    to="/"
                /> 
            </div>
            <div>
                <Slide
                    key="1"
                    title="Hello World 3"
                    description="Nullam placerat semper pharetra. Quisque ornare libero sem, sed vulputate justo iaculis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                    bgImg={Image3}
                    to="/"
                /> 
            </div>
        </Swiper> 
    );