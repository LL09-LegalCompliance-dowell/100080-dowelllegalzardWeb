import React, { useState } from 'react';
import SliderWidget from './SliderWidget';
import licenseImage from '../../assets/png/slider-child-bg.png';

const sliderItems = [
  {
    id:1,
    name:'slider1',
    desc:'slider 1 desc'
  },
  {
    id:2,
    name:'slider2',
    desc:'slider 2 desc'
  },
  {
    id:3,
    name:'slider3',
    desc:'slider 3 desc'
  },
]

const SliderItems = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  console.log(activeIndex, 'active index****');

  const handleNext = () => {
    if (activeIndex < sliderItems.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };
  
  return (
    <div className='h-full flex flex-col justify-center'>
            {/* <SliderWidget 
                licenseImage={licenseImage}
                title='Apache vs MIT'
                content='“Highly recommended and Can be used together in a project.”'
            /> */}
            <SliderWidget 
                licenseImage={licenseImage}
                title='windows computer series'
                content='“Highly recommended and Can be used together in a project.”'
            />


            {/* <div className='h-64 flex ml-10 gap-10'>
              {sliderItems.slice(activeIndex, activeIndex + 2).map((item) => (
                  <div key={item.id} className={`${item.id===activeIndex+1 ? 'flex-1 bg-white' : 'bg-red-500'}`}>
                    <SliderWidget 
                        licenseImage={licenseImage}
                        title={item.name}
                        content='“Highly recommended and Can be used together in a project.”'
                    />
                  </div>
                ))}
            </div>
            <div>
            <button onClick={handlePrev}>prev</button>
                <button onClick={handleNext}>next</button>
            </div> */}
            
    </div>
  )
}

export default SliderItems