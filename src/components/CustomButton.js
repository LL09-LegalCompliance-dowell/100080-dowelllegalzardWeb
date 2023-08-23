import React from 'react'

const CustomButton = ({className,content,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} text-white w-60 h-10 bg-Primary rounded-lg text-l font-medium`}>{content}</button>
  )
}

export default CustomButton