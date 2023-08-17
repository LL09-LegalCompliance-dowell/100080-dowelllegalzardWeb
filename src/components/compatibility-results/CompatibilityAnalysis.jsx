import React, { useState, useEffect } from 'react';
import { ProgressBar } from '../progress-bar';
import licenceLogoComparison from '../../assets/jpg/license-ogo-comparison.jpg';
import { useGetLicense } from '../../hooks/useGetLicense';
import { useCheckLicnse } from '../../hooks/useCheckLicnse';
import { CompatibilityTable } from './';

const CompatibilityAnalysis = () => {
  const [licenses, setLicenses] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLicense = useGetLicense();


  
  


  useEffect(()=>{
    async function getAllLicense(){
      try {
        setLoading(true);
        const { data } = await getLicense();
        if(data.isSuccess===true){
          setLicenses({ data:data.data });
        }
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false);
      }
    }
    getAllLicense()
  }, []);


  return (
    <div className='md:w-6/12 m-auto p-5 md:p-10 my-10'>
        <div>
            <div className='flex justify-end mb-10'>
                <img src={licenceLogoComparison} alt="" />
            </div>
            <h3 className='text-sm font-normal'>Recommendation Percentage</h3>
            <span className='text-[#585858] font-light text-sm'>*Numbers are Based on Attributions.</span>
        </div>
        <ProgressBar/>
        <CompatibilityTable />
    </div>
  )
}

export default CompatibilityAnalysis