import React from 'react';
import Slide from 'components/molecules/Slide';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const SwiperComponent = ({ children }) => {

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

    const Slides = children.map(element =>
        <div key={element.key}>
            <Slide
                title={element.title}
                description={element.description}
                bgImg={element.bgImg}
                to={element.to}
            /> 
        </div>
    );

    return (
        <Swiper {...params}>
            {Slides}
        </Swiper> 
    );
};

export default SwiperComponent;