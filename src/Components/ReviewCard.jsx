import React from 'react'
import { star } from '../assets/icons'
const ReviewCard = ({ imgURL, cusName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={imgURL}
                alt="customer"
                width={120}
                height={120}
                className='rounded-full object-contain' />
            <p className='mt-6 max-w-sm info-text text-center'>{feedback}</p>
            <div className='flex mt-3 gap-2.5 justify-center items-center '>
                <img src={star} alt="" width={24} height={24} className='object-contain m-0' />
                <p className='info-text'>({rating})</p>
            </div>
            <h3 className='mt-1 text-3xl font-palanquin font-bold'>{cusName}</h3>
        </div>
    )
}

export default ReviewCard