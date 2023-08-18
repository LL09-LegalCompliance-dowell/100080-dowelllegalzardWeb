import React from 'react'

const Button = ({ children, hasRadius, bgColor, ...props }) => {
  return (
    <button {...props}
    className={`w-full py-3 px-3 ${bgColor && ''} ${hasRadius && 'rounded-[0.5rem]' } bg-Primary text-white hover:bg-[#0000]/80 ease-in duration-300`}>
        { children }
    </button>
  )
}

export default Button