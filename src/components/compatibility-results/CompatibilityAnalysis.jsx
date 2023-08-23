import React from 'react';
import { ProgressBar } from '../progress-bar';
import { CompatibilityTable } from './';
import { Loader } from '../../loader/Loader';

const CompatibilityAnalysis = ({ loadingLicenses, licenses }) => {

  if(loadingLicenses){
    return <Loader />
  }

  return (
    <div className='md:w-6/12 m-auto p-5 md:p-10 my-10'>
        <div>
            <div className='flex items-center justify-between gap-5 mb-10'>
                <div>
                    <img src={licenses?.license_1?.logo_detail?.url} className='h-24 w-24' alt="" />
                </div>
                <span>vs</span>
                <div>
                    <img src={licenses?.license_2?.logo_detail?.url} className='h-24 w-24' alt="" />
                </div>
            </div>
            <h3 className='text-sm font-normal'>Recommendation Percentage</h3>
            <span className='text-[#585858] font-light text-sm'>*Numbers are Based on Attributions.</span>
        </div>
        <ProgressBar licenses={licenses}/>
        <CompatibilityTable licenses={licenses} />
    </div>
  )
}

export default CompatibilityAnalysis