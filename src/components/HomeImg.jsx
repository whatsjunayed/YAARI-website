import React from "react";
import catImg from "../assets/images/cat.jpg";
import Button from "./Button";
const HomeImg = () => {
  return (
    <>
      <div className="h-screen w-full relative">
        <img
          src={catImg}
          alt=""
          className="h-full w-full bg-center bg-cover object-cover"
        />
        <div className="h-full w-full absolute bg-[rgba(0,0,0,0.32)] top-0 left-0 "></div>
        <div className="absolute flex flex-col h-full w-[50%] items-center justify-center top-0 left-0 translate-x-[50%]">
          <h1 className="text-white font-semibold text-center text-4xl">
            The Golbal Commerce Platform
          </h1>
          <p className="text-center text-white my-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi
            dolor incidunt tempora consectetur quod labore nesciunt maxime nam,
            fugiat voluptatem.
          </p>
          <Button buttonName='Learn More'/>
        </div>
      </div>
    </>
  );
};

export default HomeImg;
