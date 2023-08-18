import React from 'react';
import { LicenseSlider } from '../components/slider-items';
import { CompatibilitySearch } from '../components/search-field';
import { CompatibilityAnalysis } from '../components/compatibility-results';

const OpenSourceLicenseCompatibility = ({setIsMenuOpen}) => {
  return (
    <>
      <LicenseSlider/>
      <CompatibilitySearch/>
      <CompatibilityAnalysis/>
    </>
  )
}

export default OpenSourceLicenseCompatibility
