import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';

const TextCarousel = ({data, activeSlide, previouseSlideActive}) => {

  function getTextClass(index){
    return activeSlide === index ? 'active' : '';
  }

  return (
    <div className='text-carousel-container relative'>
      {
        data.map((item, index)=> {
          return(
            <div
              key={item.id}
              className='text-carousel-items text-center'
            >
              <h1 className={getTextClass(index)}>{item.title}</h1>
              <h3 className={getTextClass(index)}>{item.subTitle}</h3>
            </div>
          )
        })
      }
    </div>
  );
}
 
export default TextCarousel;