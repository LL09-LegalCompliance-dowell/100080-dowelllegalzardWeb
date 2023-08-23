import React from 'react';
import spinnerIcon from '../assets/png/spinner-icon.png';

export const Loader = () => {
  return (
    // <div className='h-screen w-full grid grid-cols place-items-center absolute top-0'>
    //     <div className='w-full m-auto'>
    //       <img src={spinnerIcon} alt="" className='animate-spin w-24 h-24' />
    //     </div>
    //   </div>
    <div className='h-screen flex justify-center items-center'>
        <img src={spinnerIcon} alt="" className='animate-spin w-24 h-24' />
    </div>
  )
}

