import Image from "next/image";
import { useEffect, useState } from "react";
import { useSwiper } from 'swiper/react';

const NextBtn = ({data, initialSlide}) => {
  const [btnImageIndex, setBtnImageIndex] = useState(initialSlide+1);
  const [activeSlideNo, setActiveSlideNo] = useState(initialSlide + 1);

  useEffect(() => {
    if(activeSlideNo>data.length) setActiveSlideNo(1);
  }, [activeSlideNo, data, initialSlide])



  const swiper = useSwiper();

  const onClick = () => {
    setBtnImageIndex((prevBtnIndex) => prevBtnIndex === data.length - 1 ? 0 : prevBtnIndex + 1);
    setActiveSlideNo(activeSlideNo+1);
    swiper.slideNext();
  }

  const displayTwoDigits = (num) => {
    if(num > 9) return num
    return `0${num}`
  }
  
  return (
    <div className="hero-slider__next-btn__container absolute bottom-[90px] left-[135px] cursor-pointe z-30 flex items-center">
      <div className="hero-slider__next-btn__outline cursor-pointer">
        <div
          onClick={onClick}
          className="relative"
        >
          <p className="text-base absolute top-1/2 left-1/2 text-white translate-half">Next</p>
          <Image className="h-24 w-24" alt="" src={data[btnImageIndex || 0].src}/>
        </div>
      </div>
      <div className="hero-slider__next-btn__pagination flex items-center gap-17px text-white relative">
        <p className="slideNo">{displayTwoDigits(activeSlideNo)}</p>
        <div className="w-103 h-1px bg-white"></div>
        <p>{displayTwoDigits(data.length)}</p>
      </div>
    </div>
  );
}
 
export default NextBtn;