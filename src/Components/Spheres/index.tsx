import {useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/mousewheel';
import {Mousewheel, A11y, Controller} from 'swiper';

import {functionalOptions} from './constants';
import {Title} from '../common/Title';
import {PopUp} from '../common/PopUp';

import './styles.scss';

export const Spheres = () => {
    // @ts-ignore
    const [firstSwiper, setFirstSwiper] = useState<Swiper>(Swiper);
    // @ts-ignore
    const [secondSwiper, setSecondSwiper] = useState<Swiper>(Swiper);
    const [imageIsOpen, setImageIsOpen] = useState(false);
    const [imageId, setImageId] = useState(0);

    const imageClickHandler = (id: number) => {
        setImageIsOpen(!imageIsOpen);
        setImageId(id)
    }

    return (
        <div className='container'>
            <div className='titleWrapper'>
                <Title
                    title='Решайте любую задачу с системой мониторинга объектов Wialon'/>
            </div>
            <Swiper
                loop={true}
                onSwiper={setFirstSwiper}
                direction={"horizontal"}
                breakpoints={{
                    320: {
                        slidesPerView: 1.5,
                    },
                    768: {
                        slidesPerView: 2.5,
                    },
                    1120: {
                        slidesPerView: 3.5,
                    },
                    1230: {
                        slidesPerView: 4.5,
                    },
                }}
                centeredSlidesBounds={true}
                slideToClickedSlide={true}
                spaceBetween={10}
                mousewheel={true}
                controller={{control: secondSwiper}}
                modules={[Mousewheel, A11y, Controller]}
                className="mySwiper">
                {functionalOptions.map(({title, id}, index) => (
                    <SwiperSlide key={index}
                    >
                        {({isActive}) => (
                            <div className={isActive ? 'activeThumb' : 'thumb'}>
                                {title}
                            </div>
                        )}

                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                loop={true}
                onSwiper={setSecondSwiper}
                controller={{control: firstSwiper}}
                direction={"horizontal"}
                mousewheel={true}
                modules={[Mousewheel, Controller]}>
                {functionalOptions.map(({image, id}, index) => (
                    <SwiperSlide key={index}
                    >
                        <img src={image}
                             className='image' onClick={() => imageClickHandler(id)}/>
                    </SwiperSlide>
                ))}
            </Swiper>
            {imageIsOpen && <div><PopUp onClick={() => setImageIsOpen(!imageIsOpen)}><img
                src={functionalOptions[imageId].image}/></PopUp></div>}
        </div>
    )
}
