import React from 'react';
import { ProgressBar } from '../progress-bar';
import licenceLogoComparison from '../../assets/jpg/license-ogo-comparison.jpg'

const CompatibilityResults = () => {
  return (
    <div className='md:w-6/12 m-auto border p-5 md:p-10'>
        <div>
            <div className='flex justify-end mb-10'>
                <img src={licenceLogoComparison} alt="" />
            </div>
            <h3 className='text-sm font-normal'>Recommendation Percentage</h3>
            <span className='text-[#585858] font-light text-sm'>*Numbers are Based on Attributions.</span>
        </div>
        <ProgressBar/>
    </div>
  )
}

export default CompatibilityResults