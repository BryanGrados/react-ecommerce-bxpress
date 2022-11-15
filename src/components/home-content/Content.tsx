import React from 'react'
import BannerSlider from '../slider/BannerSlider'
import PageInfo from './PageInfo'

const Content = () => {
    return (
        <div className='container my-20'>
            <PageInfo />
            <BannerSlider />
        </div>
    )
}

export default Content