import Link from "next/link";
import '../../styles/header.scss';
import svg from '../../public/icons/arrow.png';
import Image from "next/image";
import HamSvg from "../../public/icons/ham.svg"

const Header = () => {
  return (
    <div className="header min-h-24 border flex flex-row justify-between items-center px-8.25 fixed top-[20px] left-[20px] bg-white z-50 " style={{width: 'calc(100% - 40px)'}}>
      <div className="header__items flex items-center gap-5">
        <Link href="/">About</Link>
        <Link href="/">News</Link>
        <Link href="/">Services</Link>
        <Link href="/">Our Team</Link>
        <Link href="/">Make Enquiry</Link>
      </div>

      <div className="header__ham cursor-pointer hidden">
        <Image alt="" src={HamSvg}/>
      </div>

      <button>
        Contact us
        <Image alt="" src={svg}/>
      </button>
    </div>
  );
}
 
export default Header;