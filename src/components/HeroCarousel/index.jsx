"use client";
import '../../styles/hero-carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';

import { sliderData } from './data';
import Image from 'next/image';
import NextBtn from './NextBtn';



const HeroCorousel = () => {

  const initialSlide=0;

  return (

    <Swiper
      slidesPerView={1}
      effect={'fade'}
      loop={true}
      className="hero-slider relative"
      initialSlide={initialSlide}
      modules={[EffectFade]}
    >
      {/* slides */}
      {
        sliderData.map(data => (
          <SwiperSlide key={data.id} className='hero-slider__slide relative h-screen w-screen'>
            <div className='bg-black z-10 opacity-20 absolute inset-0'></div>
            <Image className='h-screen object-cover' src={data.src} alt={data.title}/>
            <div className='hero-slider__slide__text-box absolute z-20 inset-0 flex flex-col justify-center pl-135'>
              <p className='text-base  text-white'>{data.subtitle}</p>
              <h4 className='text-64px text-white'>{data.heading}</h4>
            </div>
          </SwiperSlide>
        ))
      }

      {/* next navigation button */}
      <NextBtn data={sliderData} initialSlide={initialSlide}/>
    </Swiper>
  );
}
 
export default HeroCorousel;