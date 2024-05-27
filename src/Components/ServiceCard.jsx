import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] shadow-3xl sm:min-w-[350px]
    rounded-[20px] px-10 py-16'>
        <div className=' bg-coral-red w-11 h-11 rounded-full flex justify-center items-center'>
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
            <h3 className='text-3xl mt-5 font-palanquin leading-normal font-bold'>{label}</h3>
            <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard