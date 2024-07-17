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
import TextCarousel from './textCarousel';

const CardsCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [previouseSlideActive, setPreviouseSlideActive] = useState(0);
  useEffect(()=> {
    console.log(activeSlide, 'activeSlide')
  }, [activeSlide])

  const handleChange = (...args) => {
    console.log(args, 'args')
    // setActiveSlide(swiper.activeIndex);
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
          cardsCarouselData.map((item, index) => (
            <SwiperSlide className="cards-carousel__swiper-slide" key={item.id}>
              {
                (slide) => {
                  console.log(slide)
                  if(slide.isActive) {
                    setActiveSlide((prevActive)=> {
                      setPreviouseSlideActive(prevActive)
                      return index
                    })
                  }
                  return <Image src={item.src} alt=''/>
                }
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* <Swiper
        loop={true}
        centeredSlides={true}
        onSlideChange={handleChange}
        // spaceBetween={2000}
      >

      </Swiper> */}
      <TextCarousel data={cardsCarouselData} activeSlide={activeSlide} previouseSlideActive={previouseSlideActive}/>
    </>
  );
}
 
export default CardsCarousel;