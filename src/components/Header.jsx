import React from 'react'
import pageLogo from '../assets/images/svg/logo.svg'
import heroSectionBg from '../assets/images/webp/hero-bg.png'
import dottedArrow from '../assets/images/webp/dotted-arrow.png'

const Header = () => {
  const heroBg = {
    backgroundImage: `url(${heroSectionBg})`,
  }
  return (
    <div>
      <div className='container'>
        <div className='flex justify-between items-center py-4'>
          <div>
            <img src={pageLogo} alt="pageLogo" />
          </div>
          <div className='flex gap-8 items-center'>
            <ul className='flex items-center gap-7'>
              <li className='font-normal text-base leading-6 text-gray'>Home</li>
              <li className='font-normal text-base leading-6 text-gray'>Label</li>
              <li className='font-normal text-base leading-6 text-gray'>About Us</li>
              <li className='font-normal text-base leading-6 text-gray'>How It Works</li>
              <li className='font-normal text-base leading-6 text-gray'>Team</li>
              <li className='font-normal text-base leading-6 text-gray'>FAQs</li>
            </ul>
            <div className='flex items-center gap-3'>
              <button className='font-normal text-base leading-7 text-black w-[116px] h-[55px] rounded-[100px] border-black border-[1px] border-solid'>Sign Up</button>
              <button className='font-normal text-lg leading-7 text-white w-[148px] h-[55px] bg-blue rounded-[100px] shadow-buttonShadow'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-center bg-cover bg-no-repeat max-w-[1440px]' style={heroBg}>
        <div className="container">
          <div className='flex items-center justify-center gap-4'>
            <div className='w-[43px]'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
            <div className='text-base font-normal leading-6 text-blue'>AI Solutions</div>
            <div className='w-[43px] rotate-180'>
              <img src={dottedArrow} className='w-full' alt="dottedArrow" />
            </div>
          </div>
          <div className='pt-6 max-w-[834px] mx-auto'>
            <div className='flex items-center gap-6'>
              <div className='text-base font-normal leading-6 text-blue w-[121px] h-[44px] border-[0.5px] border-blue border-solid bg-[#EBEBFD] rounded-[122px] flex justify-center items-center'>Accurate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header