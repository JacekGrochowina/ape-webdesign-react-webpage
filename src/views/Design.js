import React from 'react';
import data from 'data';
import Baner from 'components/organisms/Baner';
import PriceList from 'components/organisms/PriceList';
import routes from 'routes';

const Design = () => {
    return (
        <div className="design">
            <Baner 
                key={data.swiper[2].key}
                title={data.swiper[2].title}
                description={data.swiper[2].description}
                bgImg={data.swiper[2].bgImg}
                to={routes.home}
            >{data.swiper}</Baner>

            <PriceList>{data.prices[2]}</PriceList>
        </div>
    )
};

export default Design;