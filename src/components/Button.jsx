import React from 'react'

const Button = (props) => {

    return (
        <button type="text" className="text-gray-500 outline-none font-bold rounded-full sm:w-  [80px] sm:h-[65px] w-[70px] h-[35px] text-center bg-gray-800 
         focus:bg-orange-500 focus:border focus:border-orange-600 hover:bg-gray-500 hover:text-white focus:text-white" value={props.text} onClick={props.onClick}>{props.text}
        </button>
    )
}

export default Button