import React from 'react'

const Button = ({ children, hasRadius, bgColor, ...props }) => {
  return (
    <button {...props}
    className={`w-full py-1 px-3 ${bgColor && ''} ${hasRadius && 'rounded-[0.5rem]' } bg-Primary text-white`}>
        { children }
    </button>
  )
}

export default Button