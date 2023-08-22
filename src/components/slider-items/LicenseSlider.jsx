import React from 'react';
import SliderItems from './SliderItems';

import sliderBg from '../../assets/jpg/slider-bg.jpg'

const LicenseSlider = () => {
  const backgroundImage = {
    backgroundImage: `url(${sliderBg})`,
  };

  return (
    <div className='h-[92vh]'>
      <div
        className="h-full w-full bg-cover bg-no-repeat"
        style={backgroundImage}
      >
        <SliderItems />
      </div>
    </div>
    
  );
}

export default LicenseSlider;
