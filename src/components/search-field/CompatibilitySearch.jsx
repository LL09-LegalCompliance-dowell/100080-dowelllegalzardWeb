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
        setLicenseOneInput({ licenseOneVlaue:'' })
        setShowExitOne(showExitOne);
    }
    const handleToggleExitTwo = ()=>{
        setShowExitTwo(showExitTwo);
        setLicenseTwoInput({ licenseTwoVlaue:'' })
    }

    const compatibilityCheck = ()=>{
        console.log(licenseOneInput.licenseOneVlaue, '********************')
        
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
                showExit={showExitOne}
                handleToggleExit={handleToggleExitOne}
             />
            <img className='md:translate-y-10 w-24 h-24 md:w-64 md:h-64' src={searchSeperator} alt="" />
            <SearchInput 
                licenseType='2'
                name='licenseTwoVlaue'
                val={licenseTwoInput.licenseTwoVlaue}
                handleChange={licenseTwoHandleChange}
                showExit={showExitTwo}
                handleToggleExit={handleToggleExitTwo}
             />
        </div>
        <div className='md:w-3/12 m-auto mt-10'>
            <Button onClick={compatibilityCheck}>Check Compatibility</Button>
        </div>
    </div>
  )
}

export default CompatibilitySearch