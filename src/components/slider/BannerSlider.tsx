import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel';

const imgLinks = [
    'https://cataas.com/cat',
    'https://cataas.com/cat/cute',
    'https://cataas.com/cat/angry',
    'assets\\landing\\bg-landing.jpg'
]


const BannerSlider = () => {

    const autoPlay = useRef(Autoplay({ delay: 2000 }))

    return (
        <>
            <div className='w-full'>
                <Carousel loop
                    withControls={false}
                    withIndicators
                    plugins={[autoPlay.current]}
                    onMouseEnter={autoPlay.current.stop}
                    onMouseLeave={autoPlay.current.reset}
                    styles={{
                        indicator: {
                            backgroundColor: 'white !important',
                        },
                    }}
                    className='w-full'
                >
                    {
                        imgLinks.map((imgLink, index) => (
                            <Carousel.Slide key={index}>
                                <img src={imgLink} alt={imgLink}
                                    className='w-full h-80 md:h-[500px] object-cover' />
                            </Carousel.Slide>
                        ))
                    }
                </Carousel>
            </div>
        </>
    )
}

export default BannerSlider