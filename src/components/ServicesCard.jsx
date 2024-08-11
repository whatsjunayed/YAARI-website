import React from "react";
import { TfiRulerPencil } from "react-icons/tfi";
import { BsBroadcastPin } from "react-icons/bs";
import { SlBulb } from "react-icons/sl";
import { Link } from "react-router-dom";
const ServicesCard = () => {
  return (
    <>
      <div className="h-full w-full py-32 bg-[#636163]">
        <div>
          <p className="text-center text-lg  uppercase text-white">
            What We Do
          </p>
          <h1 className="text-center text-3xl font-bold my-8">
            Our Cool Services
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-[85%] mx-auto ">
            <Link
              to={"/services"}
              className=" group m-8 flex items-center justify-center flex-col text-center  cursor-pointer "
            >
              <TfiRulerPencil className="text-[50px] my-4 duration-300 group-hover:text-white" />
              <h1 className="text-lg font-bold py-2">UI/UX Design</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                inventore similique ea odit porro quisquam.
              </p>
            </Link>
            <Link
              to={"/services"}
              className=" group m-8 flex items-center justify-center flex-col text-center cursor-pointer"
            >
              <BsBroadcastPin className="text-[50px] my-4 duration-300 group-hover:text-white" />
              <h1 className="text-lg font-semibold py-2">Branding Identity</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                inventore similique ea odit porro quisquam.
              </p>
            </Link>
            <Link
              to={"/services"}
              className=" group m-8 flex items-center justify-center flex-col text-center  cursor-pointer "
            >
              <SlBulb className="text-[50px] my-4 duration-300 group-hover:text-white" />
              <h1 className="text-lg font-semibold py-2">UI/UX Design</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                inventore similique ea odit porro quisquam.
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
