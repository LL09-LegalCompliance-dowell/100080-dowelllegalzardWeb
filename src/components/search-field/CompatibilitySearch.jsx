import React, { useState } from 'react';
import { SearchInput } from '../input';
import searchSeperator from '../../assets/png/search-seperator.png';
import { Button } from '../button';

const CompatibilitySearch = () => {
    const [licenseOneInput, setLicenseOneInput] = useState({ licenseOneVlaue:'' });
    const [licenseTwoInput, setLicenseTwoInput] = useState({ licenseTwoVlaue:'' });
    const [showExitOne, setShowExitOne] = useState(false);
    const [showExitTwo, setShowExitTwo] = useState(false);

    const licenseOneHandleChange = (e)=>{
        const { name, value } = e.target;
        setLicenseOneInput({ ...licenseOneInput, [name]:value })
    }
    const licenseTwoHandleChange = (e)=>{
        const { name, value } = e.target;
        setLicenseTwoInput({ ...licenseTwoInput, [name]:value })
    }

    const handleToggleExitOne = ()=>{
        setShowExitOne(!showExitOne);
    }

    const compatibilityCheck = ()=>{
        console.log(licenseOneInput.licenseOneVlaue, '********************')
        console.log(licenseOneInput.licenseOneVlaue.length, '********************')
        if(licenseOneInput.licenseOneVlaue.length >= 1){
            alert('yes')
        }
    }
  return (
    <div className='w-full h-screen px-10'>
        <h3 className='text-sm font-normal my-10'>Check License Compatibility</h3>
        <div className='md:w-9/12 flex flex-col md:flex-row items-center md:gap-5 m-auto'>
            <SearchInput 
                licenseType='1'
                name='licenseOneVlaue'
                val={licenseOneInput.licenseOneVlaue}
                handleChange={licenseOneHandleChange}
                showExitOne={showExitOne}
                handleToggleExitOne={handleToggleExitOne}
             />
            <img className='md:translate-y-10' src={searchSeperator} alt="" />
            <SearchInput 
                licenseType='2'
                name='licenseTwoVlaue'
                val={licenseTwoInput.licenseTwoVlaue}
                handleChange={licenseTwoHandleChange}
             />
        </div>
        <div className='w-3/12 m-auto mt-10'>
            <Button onClick={compatibilityCheck}>Check Compatibility</Button>
        </div>
    </div>
  )
}

export default CompatibilitySearch