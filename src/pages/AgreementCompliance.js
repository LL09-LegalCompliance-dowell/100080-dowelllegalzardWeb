import React from 'react'

const AgreementCompliance = ({setIsMenuOpen}) => {
  return (
    <div className='h-screen' onClick={()=>setIsMenuOpen(false)}>
      This is Agreement Compliance Screen
    </div>
  )
}

export default AgreementCompliance
