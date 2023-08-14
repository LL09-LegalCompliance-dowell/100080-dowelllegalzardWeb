import React from 'react';
import SliderWidget from './SliderWidget';
import licenseImage from '../../assets/png/slider-child-bg.png'

const SliderItems = () => {
  return (
    <div className='h-full flex justify-center items-center'>
            <SliderWidget 
                licenseImage={licenseImage}
                title='Apache vs MIT'
                content='“Highly recommended and Can be used together in a project.”'
            />
    </div>
  )
}

export default SliderItems