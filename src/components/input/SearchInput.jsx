import React from 'react';
import searchIcon from '../../assets/svg/search-icon.svg';
import removeIcon from '../../assets/svg/remove-icon.svg';

const SearchInput = ({ licenseType, val, name,  handleChange, showExitOne, handleToggleExitOne }) => {
  return (
    <div className='w-full'>
        <h4 className='my-4'>lincense { licenseType }</h4>
        <div className='relative'>
            <span className='absolute left-3 top-3'><img src={removeIcon} alt="" /></span>
            <input 
                className='w-full outline-0 border border-[#585858] py-2 px-10 rounded-[0.5rem]'
                type="text"
                placeholder='seach license'
                value={val}
                name={name}
                onChange={handleChange}
            />
            <span 
            onClick={handleToggleExitOne}
            className={`absolute right-3 top-2 cursor-pointer ${showExitOne && 'hidden'}`}><img src={searchIcon} alt="" /></span>
        </div>
    </div>
  )
}

export default SearchInput