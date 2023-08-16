import React from 'react';
import { LicenseSlider } from '../components/slider-items';
import { CompatibilitySearch } from '../components/search-field';
import { CompatibilityResults } from '../components/compatibility-results';

const OpenSourceLicenseCompatibility = ({setIsMenuOpen}) => {
  return (
    <>
      <LicenseSlider/>
      <CompatibilitySearch/>
      <CompatibilityResults/>
    </>
  )
}

export default OpenSourceLicenseCompatibility
