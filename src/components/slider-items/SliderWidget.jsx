import React from 'react';
import { Button } from '../button';

const SliderWidget = ({ licenseImage, title, content }) => {
  return (
    <div className='w-9/12 bg-white/60 m-auto px-10 py-[5rem] rounded-[0.5rem]'>
      <div className='flex justify-between px-10'>
        <div>
            <img src={licenseImage} alt="" />
        </div>
        <div className='text-right md:w-4/12'>
          <h2 className='text-clg font-bold'>{title}</h2>
          <p className='text-sm font-light my-10'>{content}</p>
          <Button 
            hasRadius
          >Learn More</Button>
        </div>
      </div>
      <h4 className='mt-10 font-normal'>T&C Apply*</h4>
    </div>
  )
}

export default SliderWidget