"use client";
import '../../styles/card-carousel.scss';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';
import { cardsCarouselData } from './data';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const CardsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  useEffect(()=> {
    console.log(activeSlide, 'activeSlide')
  }, [activeSlide])

  const handleChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  }

  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="cards-carousel__swiper"
        cardsEffect={{
          perSlideOffset: 120,
          perSlideRotate: 9.55,
        }}
        loop={true}
        centeredSlides={true}
        onSlideChange={handleChange}
        breakpoints={{
          768: {
            cardsEffect:{
              perSlideOffset: 150,
              perSlideRotate: 9.55,
            }
          }
        }}
        // spaceBetween={2000}
      >
        {
          cardsCarouselData.map(item => (
            <SwiperSlide className="cards-carousel__swiper-slide" key={item.id}>
              <Image src={item.src} alt=''/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
 
export default CardsCarousel;