import React from 'react';
import data from 'data';
import Baner from 'components/organisms/Baner';
import PriceList from 'components/organisms/PriceList';
import routes from 'routes';

const Takecare = () => {
    return (
        <div className="takecare">
            <Baner 
                key={data.swiper[1].key}
                title={data.swiper[1].title}
                description={data.swiper[1].description}
                bgImg={data.swiper[1].bgImg}
                to={routes.home}
            >{data.swiper}</Baner>

            <PriceList>{data.prices[1]}</PriceList>
        </div>
    )
};

export default Takecare;