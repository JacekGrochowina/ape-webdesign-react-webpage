import React from 'react';
import data from 'data';
import Baner from 'components/organisms/Baner';
import PriceList from 'components/organisms/PriceList';
import routes from 'routes';

const Webdesign = () => {
    return (
        <div className="webdesign">
            <Baner 
                key={data.swiper[0].key}
                title={data.swiper[0].title}
                description={data.swiper[0].description}
                bgImg={data.swiper[0].bgImg}
                to={routes.home}
            >{data.swiper}</Baner>

            <PriceList>{data.prices[0]}</PriceList>
        </div>
    )
};

export default Webdesign;