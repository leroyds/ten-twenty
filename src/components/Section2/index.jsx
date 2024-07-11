import '../../styles/section2.scss';
import CardsCarousel from '../CardsCarousel';

const Section2 = () => {
  return (
    <div className="section2">
      <div className='section2__top'>
        <h3 className=' text-center'>Quality Products</h3>
        <p className=' text-center subtitle-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <CardsCarousel/>
    </div>
  );
}
 
export default Section2;