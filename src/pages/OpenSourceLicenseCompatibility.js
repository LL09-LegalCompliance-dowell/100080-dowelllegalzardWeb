import React from 'react';
import { LicenseSlider } from '../components/slider-items';
import { CompatibilitySearch } from '../components/search-field';


const OpenSourceLicenseCompatibility = ({setIsMenuOpen}) => {
  return (
    <>
      <LicenseSlider/>
      <CompatibilitySearch/>
    </>
  )
}

export default OpenSourceLicenseCompatibility
