import React, { useState, useEffect } from 'react';
import { useGetLicense } from '../../hooks/useGetLicense';
import { useCheckLicense } from '../../hooks/useCheckLicense';
import { SearchInput } from '../input';
import searchSeperator from '../../assets/png/search-seperator.png';
import { Button } from '../button';

import { CompatibilityAnalysis } from '../compatibility-results';

const CompatibilitySearch = () => {
    const [licenseOneInput, setLicenseOneInput] = useState({ licenseOneValue:'' });
    const [licenseTwoInput, setLicenseTwoInput] = useState({ licenseTwoValue:'' });
    const [showExitOne, setShowExitOne] = useState(false);
    const [showExitTwo, setShowExitTwo] = useState(false);

    const [getlicenses, setGetLicenses] = useState([]);
    const [licenses, setLicences] = useState([])
    const [loading, setLoading] = useState(false);

    const getLicense = useGetLicense();
    const checkLicense = useCheckLicense()

    const [selectedLicenseOne, setSelectedLicenseOne] = useState(null);
    const [selectedLicenseTwo, setSelectedLicenseTwo] = useState(null);

    useEffect(()=>{
        
        async function getAllLicense(){
          try {
            setLoading(true);
            const { data } = await getLicense();
            if(data.isSuccess===true){
              setGetLicenses(data.data);
            }
          } catch (error) {
            console.log(error)
          }finally{
            setLoading(false);
          }
        }
        getAllLicense()
      }, []);
    
    

    const licenseOneHandleChange = (e)=>{
        const { name, value } = e.target;
        setLicenseOneInput({ ...licenseOneInput, [name]:value })
    }
    const licenseTwoHandleChange = (e)=>{
        const { name, value } = e.target;
        setLicenseTwoInput({ ...licenseTwoInput, [name]:value })
    }

    const handleToggleExitOne = ()=>{
        setLicenseOneInput({ licenseOneValue:'' })
        setShowExitOne(showExitOne);
    }
    const handleToggleExitTwo = ()=>{
        setShowExitTwo(showExitTwo);
        setLicenseTwoInput({ licenseTwoValue:'' })
    }

    const compatibilityCheck = async()=>{
        const payload = {
            license_event_id_one:selectedLicenseOne.eventId,
            license_event_id_two:selectedLicenseTwo.eventId,
            action_type:'check-compatibility',
        }
        try {
            setLoading(true)
            const response = await checkLicense(payload);
            console.log(response);
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }


    let inputOneSearchedItems = []
    let inputOneItemToSearch = licenseOneInput.licenseOneValue

    let inputTwoSearchedItems = []
    let inputTwoItemToSearch = licenseTwoInput.licenseTwoValue

    function handleSelectedLicenseOne(val){
        setSelectedLicenseOne(val)
        licenseOneInput.licenseOneValue = val.softwarelicense.license_name
    }
    function handleSelectedLicenseTwo(val){
        setSelectedLicenseTwo(val)
        licenseTwoInput.licenseTwoValue = val.softwarelicense.license_name
    }

    getlicenses?.filter((val)=>{
        if(val.softwarelicense.license_name.toLowerCase().includes(inputOneItemToSearch.toLowerCase())){
            inputOneSearchedItems.push(val)
        }
    })

    getlicenses?.filter((val)=>{
        if(val.softwarelicense.license_name.toLowerCase().includes(inputTwoItemToSearch.toLowerCase())){
            inputTwoSearchedItems.push(val)
        }
    })

  return (
    <div className='w-full h-auto px-10'>
        <h3 className='text-sm font-normal my-10'>Check License Compatibility</h3>
        <div className='md:w-9/12 flex flex-col md:flex-row items-center md:gap-5 m-auto'>
            <div className='w-full relative'>
                <SearchInput 
                    licenseType='1'
                    name='licenseOneValue'
                    val={licenseOneInput.licenseOneValue}
                    handleChange={licenseOneHandleChange}
                    showExit={showExitOne}
                    handleToggleExit={handleToggleExitOne}
                />
                <div className='w-full bg-gray-100 mt-2 absolute'>
                    {inputOneSearchedItems.slice(0, 5).map((val, index)=>(
                        <p key={index} onClick={()=>handleSelectedLicenseOne(val)}
                            className='cursor-pointer px-1 py-1 border-b'
                        >{val?.softwarelicense?.license_name}</p>
                    ))}
                </div>
            </div>
            <img className='md:translate-y-10 w-24 h-24 md:w-64 md:h-64' src={searchSeperator} alt="" />
            <div className='w-full relative'>
                <SearchInput 
                    licenseType='2'
                    name='licenseTwoValue'
                    val={licenseTwoInput.licenseTwoValue}
                    handleChange={licenseTwoHandleChange}
                    showExit={showExitTwo}
                    handleToggleExit={handleToggleExitTwo}
                />
                <div className='w-full bg-gray-100 mt-2 absolute'>
                    {inputTwoSearchedItems.slice(0, 5).map((val, index)=>(
                        <p key={index} onClick={()=>handleSelectedLicenseTwo(val)}
                            className='cursor-pointer px-1 py-1 border-b'
                        >{val?.softwarelicense?.license_name}</p>
                    ))}
                </div>
            </div>
        </div>
        <div className='md:w-3/12 m-auto mt-10'>
            <Button onClick={compatibilityCheck}>Check Compatibility</Button>
        </div>

        <CompatibilityAnalysis />
    </div>
  )
}

export default CompatibilitySearch