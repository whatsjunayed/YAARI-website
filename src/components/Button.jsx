import React from 'react'

const Button = ({ buttonName, className}) => {
  return (
    <>
      <div className={`btn flex items-center justify-center px-6 py-3 rounded-full text-white bg-gray-600 duration-300 border-2 cursor-pointer font-semibold tracking-widest hover:bg-transparent ${className}`}>
        {buttonName}
      </div>
    </>
  );
}

export default Button
