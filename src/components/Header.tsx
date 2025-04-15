import { useTranslation } from 'react-i18next';
import { TranslationBtn } from '../features/TranslationBtn.tsx';

import logoimg from '../assets/img/CreatorLogo.png';
import bgSquaresimg from '../assets/img/HeaderBGSquares.png';
import bgGradientimg from '../assets/img/HeaderBGGradient.png';
import Headerimg from "../assets/img/HeaderIMG.png";

import './Header.css';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className='HeaderBG'>
        <img src={bgGradientimg} className='HeaderBGGradient absolute top-0 -z-5 w-full'></img>
        <img src={bgSquaresimg} className='HeaderBGSquares1 absolute top-0 -z-10'></img>
        <img src={bgSquaresimg} className='HeaderBGSquares2 absolute top-0 -z-10 rotate-y-180 right-0'></img>
      </div>
      <div className='Header w-auto h-[710px] flex flex-col px-[227px]'>
        <ul className='HeaderUl h-[60px] w-[1327px] m-[40px] flex items-center text-gray-950'>
          <div className='HeaderUl_LN mr-[60px] w-[132px] h-[37px] flex'>
            <img src={logoimg} alt=''></img>
            <h3 className='w-[92px] h-[37px] text-2xl text-center text font-semibold text-orange-500'>
              Creator
            </h3>
          </div>
          <ul className='HeaderUl_Pages h-[26px] w-[450px] flex justify-center'>
            <li className=''>
              <a href='=/some_url?'></a>{t('homepage')}
            </li>
            <li className='active'>
              {t('aboutpage')}
            </li>
            <li className=''>
              <a href='=/some_url?'></a>Portfolio
            </li>
            <li className=''>
              <a href='=/some_url?'></a>{t('blogpage')}
            </li>
            <li className=''>
              <a href='=/some_url?'></a>{t('contactpage')}
            </li>
          </ul>
          <button className="h-[60px] w-[120px] bg-orange-500 text-white font-normal text-md cursor-pointer ml-[440px] mr-[30px]">
            {t("letstalk")}
          </button>
          <TranslationBtn />
        </ul>
        <ul className="HeaderDirection h-[30px] w-[200px] text-[20px] text-gray-950 flex space-x-2 font-[400]">
          <li className="">
            <a href='=/some_url?'></a>{t('homepage')}
          </li>
          <li className="text-orange-500 font-[500]">
            {">"} {t('aboutpage')}
          </li>
        </ul>
        <div className='HeaderAbout w-auto h-[500px]'>
          <h2 className="h-[29px] w-[500px] text-[21px] text-violet-900 font-[500] mt-[100px]">{t("contentservices")}</h2>
          <h1 className="h-[122px] w-[500px] text-[40px] text-gray-950 font-[800] mt-[5px]">{t("writeprofessional")}</h1>
          <h3 className="h-[29px] w-[500px] text-[21px] text-gray-950 font-[500] mt-[15px]">{t("elementum(change)")}</h3>
          <h4 className="h-[100px] w-[500px] text-[18px] text-gray-950 font-[500] mt-[12px]">{t("feugiatscelerisque(change)")}
            <span className="font-[400]">{t("duistindicut(change)")}</span>
          </h4>
          <img src={Headerimg} alt="" className="w-auto h-auto absolute top-50 right-65"></img>
        </div>
      </div>
    </div>
  );
};

export default Header;
