import React from 'react'
import { Link } from 'react-router-dom'
const ProductsServicesCard = ({title, subTitle,Image}) => {
  return (
    <div className="flex-none flex flex-col justify-center items-center rounded-xl w-52 h-72 sm:w-80 sm:h-96 bg-gradient-to-br from-green-400 to-green-200">
              <img
                className="mr-2 sm:w-32 sm:h-32 w-16 h-16"
                src={Image}
                alt=""
               
              />
              <p className="text-lg  sm:text-2xl font-medium">{title}</p>
              <p className="text-sm sm:text-xl font-light text-center my-2">
               {subTitle}
              </p>
              <button className="bg-black text-white rounded-md w-36 h-8 mt-12 ">
                <Link to="/">Explore Now</Link>
              </button>
            </div>
  )
}

export default ProductsServicesCard