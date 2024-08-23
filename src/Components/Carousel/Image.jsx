import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from '../../source/img/gruzovik3.jpg';
import image2 from '../../source/img/gruzovik.jpg';
import image3 from '../../source/img/gruzovik2.jpg';
import { useState } from 'react';
import 'swiper/swiper-bundle.css';
import './carousel.css';

function Image() {
    const [swiper, setSwiper] = useState(null);
    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="image-container"> {/*  Добавляем  стиль  width  в  родительский  div */}
                <Swiper
                    onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
                    onSwiper={setSwiper}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <img src={image1} alt="slider 1" className="carousel-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="slider 2" className="carousel-image" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image3} alt="slider 3" className="carousel-image" />
                    </SwiperSlide>
                </Swiper>
            </div>
            {/*<div className="carousel-buttons" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>*/}
            {/*    <span*/}
            {/*        onClick={() => {*/}
            {/*            if (swiper) {*/}
            {/*                swiper.slideTo(index - 1 < 0 ? 1 : index - 1);*/}
            {/*            }*/}
            {/*        }}*/}
            {/*        className="carousel-button"*/}
            {/*    >*/}
            {/*        Предыдущее*/}
            {/*    </span>*/}
            {/*    <span*/}
            {/*        onClick={() => {*/}
            {/*            if (swiper) {*/}
            {/*                swiper.slideTo(index + 1 > 1 ? 0 : index + 1);*/}
            {/*            }*/}
            {/*        }}*/}
            {/*        className="carousel-button"*/}
            {/*    >*/}
            {/*        Далее*/}
            {/*    </span>*/}
            {/*</div>*/}
        </>
    );
}

export default Image;