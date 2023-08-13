import React from 'react'

const OpenSourceLicenseCompatibility = ({setIsMenuOpen}) => {
  return (
    <div className="h-screen" onClick={()=>setIsMenuOpen(false)}>
      This is Open Source License Compatibility Screen
    </div>
  )
}

export default OpenSourceLicenseCompatibility
