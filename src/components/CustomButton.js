import React from 'react'

const CustomButton = ({className,content}) => {
  return (
    <button className={`${className} text-white w-60 h-10 bg-Primary rounded-lg text-l font-medium`}>{content}</button>
  )
}

export default CustomButton