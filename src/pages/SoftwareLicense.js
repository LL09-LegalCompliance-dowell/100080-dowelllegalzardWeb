import React from 'react'

const SoftwareLicense = ({setIsMenuOpen}) => {
  return (
    <div className='h-screen' onClick={()=>setIsMenuOpen(false)}>
      This is Software License  Screen
    </div>
  )
}

export default SoftwareLicense
