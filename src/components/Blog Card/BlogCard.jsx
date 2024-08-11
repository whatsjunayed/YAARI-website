import React from "react";

const BlogCard = ({ Image, Date, Description, Headline }) => {
  return (
    <>
      <div className="group rounded-xl shadow-[5px_10px_5px] overflow-hidden cursor-pointer">
        <img className="w-full" src={Image} alt="" />
        <h1 className="text-2xl py-2 font-semibold text-center duration-300 group-hover:text-white">
          {Headline}
        </h1>
        <p className="p-3 ">{Description}</p>
        <p className=" p-3 font-semibold">{Date}</p>
      </div>
    </>
  );
};

export default BlogCard;
