import React from 'react';

function Button({label,iconURL,textColor,borderColor,backgroundColor,fullWidth}) {
    return (
        <button className= {
        `flex justifiy-center items-center gap-2 px-7 
        py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidth && "w-full"}
        ${
            backgroundColor 
            ? `${backgroundColor} ${textColor} ${borderColor}` 
            : "bg-coral-red text-white border-coral-red"
        } `}>
        
            {label}
            {iconURL && <img src={iconURL} alt="arrow right icon" 
            className='w-5 h-5 rounded-full ml-2'/>}
        </button>
    );
}

export default Button;