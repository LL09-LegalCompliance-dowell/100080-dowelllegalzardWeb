import React from 'react';
import { LicenseSlider } from '../components/slider-items';
import { CompatibilitySearch } from '../components/search-field';

const OpenSourceLicenseCompatibility = () => {
  return (
    <div>
      <LicenseSlider />
      <CompatibilitySearch/>
    </div>
  )
}

export default OpenSourceLicenseCompatibility
