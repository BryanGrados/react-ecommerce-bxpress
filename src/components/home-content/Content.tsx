import React from 'react'
import BannerSlider from '../slider/BannerSlider'
import Categories from './Categories';
import Offers from './Offers';

const Content = () => {
    return (
        <div className=''>
            <BannerSlider />
            <Categories />
            <Offers />
        </div>
    )
}

export default Content