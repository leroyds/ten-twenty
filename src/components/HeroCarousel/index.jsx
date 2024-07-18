"use client";
import '../../styles/hero-carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay } from 'swiper/modules';

import { sliderData } from './data';
import Image from 'next/image';
import NextBtn from './NextBtn';
import { useState } from 'react';
import HeroSlide from './HeroSlide';



const HeroCorousel = () => {

  const initialSlide=0;
  const [activeSlideIndex, setActiveSlideIndex] = useState(initialSlide)

  return (

    <Swiper
      slidesPerView={1}
      effect={'fade'}
      loop={true}
      className="hero-slider relative"
      initialSlide={initialSlide}
      modules={[EffectFade, Autoplay]}
      onSlideChange={(swiperCore) => {
        const {
          activeIndex,
          snapIndex,
          previousIndex,
          realIndex,
        } = swiperCore;
        console.log({ activeIndex, snapIndex, previousIndex, realIndex });
    }}
    >
      {/* slides */}
      {
        sliderData.map((data, index) => (
          <SwiperSlide key={data.id} className='hero-slider__slide relative h-screen w-screen'>
            {
        (swiper) => {
          console.log(index, swiper, 'swiper')
          if(swiper.isActive) {
            
            setActiveSlideIndex(index)
          }
          return (
            <>
              <div className='bg-black z-10 opacity-20 absolute inset-0'></div>
              <Image className='h-screen object-cover' src={data.src} alt={data.title}/>
              <div className='hero-slider__slide__text-box absolute z-20 inset-0 flex flex-col justify-center pl-135'>
                <p className='text-base  text-white'>{data.subtitle}</p>
                <h4 className='text-64px text-white'>{data.heading}</h4>
              </div>
            </>
          )
        }
      }
          </SwiperSlide>
        ))
      }
      {/* next navigation button */}
      <NextBtn data={sliderData} initialSlide={initialSlide} activeSlideIndex={activeSlideIndex}/>
    </Swiper>
  );
}
 
export default HeroCorousel;