import React from "react";
import { MdOutlineAutoStories } from "react-icons/md";
import blogData from "./BlogCardData";
import BlogCard from "./BlogCard";
const Myblogs = () => {
  return (
    <>
      <div className="py-20 bg-[#636163]">
        <div className="ico flex items-center justify-center flex-col">
          <MdOutlineAutoStories size={50} />
          <h1 className="text-3xl font-semibold">News & Stories</h1>
        </div>
        <div className="grid p-14 gap-10 md:grid-cols-2 xl:grid-cols-3 max-w-[85%] mx-auto">
          {blogData.map((item, index) => {
            return (
              <BlogCard
                key={index}
                Image={item.Imagesblog}
                Date={item.date}
                Description={item.description}
                Headline={item.headline}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Myblogs;
