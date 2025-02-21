import React from 'react'
import LandingComonent from './LandingComonent'
import Services from './Services'
import ScrollProgressBar from '../../component/ScrollProgressBar';
import Destination from './Destination';
// import { ReactComponent as YellowGradient } from '../assets/Svg/yellowGradient.svg';


const HomePage = () => {
  const screenHeight = window.outerHeight;
  console.log("Full screen height:", screenHeight);

  return (
    <div>
      <ScrollProgressBar />

      <div className='px-[20px] sm:px-[64px] xl:px-[137px] justify-center items-center'>
        <ScrollProgressBar />

        <LandingComonent />
      </div>
      <Services />
      <div className='px-[20px] sm:px-[64px] xl:px-[137px] justify-center items-center'>
        <Destination />
      </div>
    </div>
  )
}

export default HomePage