import React from 'react'
import { star } from '../assets/icons'

const PopularProduct = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
            <div className='flex  justify-start gap-2.5 mt-8'>
                <img src={star} alt="rating" className='w-[24px] h-[24 px]'  />
                <p className=' font-montserrat text-slate-gray text-xl leading-normal'>(4.5)</p>
            </div>
            <h3 className='mt-2 text-2xl font-palanquin font-semibold leading-normal'>{name}</h3>
            <p className=' font-montserrat text-2xl mt-2 font-semibold text-coral-red'>{price}</p>
        </div>
    )
}

export default PopularProduct