import React from 'react'
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImGoogle3 } from "react-icons/im";
const TeamCardDesign = ({Image,Name,Title}) => {
  return (
    <>
      <div className="group flex items-center justify-center flex-col gap-2 shadow-[5px_5px_15px]  p-6">
        <div className="w-44 h-44 overflow-hidden rounded-full ring-4 ring-white">
          <img
            className="w-full h-full bg-cover object-cover"
            src={Image}
            alt=""
          />
        </div>
        <h3 className="text-lg font-semibold duration-300 group-hover:text-white">{Name}</h3>
        <p className="text-white duration-300 group-hover:font-semibold group-hover:text-black">{Title}</p>
        <p className="pt-4 text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente,
          adipisci. Lorem ipsum dolor sit amet.
        </p>
        <div className="icon flex gap-4">
          <BsFacebook className='cursor-pointer' size={25}/>
          <AiFillTwitterCircle className='cursor-pointer' size={28}/>
          <ImGoogle3 className='cursor-pointer' size={25}/>
        </div>
      </div>
    </>
  );
}

export default TeamCardDesign
