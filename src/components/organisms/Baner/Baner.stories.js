import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import Baner from './Baner';
import data from 'data';
import routes from 'routes';

storiesOf('Organisms/Baner', module)
    .addDecorator(StoryRouter())
    .add('Webdesign', () =>
        <Baner 
            key={data.swiper[0].key}
            title={data.swiper[0].title}
            description={data.swiper[0].description}
            bgImg={data.swiper[0].bgImg}
            to={routes.home}
        >{data.swiper}</Baner>
    )
    .add('Takecare', () =>
        <Baner 
            key={data.swiper[1].key}
            title={data.swiper[1].title}
            description={data.swiper[1].description}
            bgImg={data.swiper[1].bgImg}
            to={routes.home}
        >{data.swiper}</Baner>
    )
    .add('Design', () =>
        <Baner 
            key={data.swiper[2].key}
            title={data.swiper[2].title}
            description={data.swiper[2].description}
            bgImg={data.swiper[2].bgImg}
            to={routes.home}
        >{data.swiper}</Baner>
    );