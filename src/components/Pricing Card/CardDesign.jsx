import React from "react";
import Button from "../Button";

const CardDesign = ({ Price,Title }) => {
    return (
      <>
        <div className="group text-center border-2 rounded-xl py-7">
          <h3 className="text-lg font-semibold">{Title}</h3>
          <h1 className="text-4xl font-bold py-4 duration-300 group-hover:text-white">
            {Price}
          </h1>
          <p className="pb-8">per month</p>
          <p className="pb-4">
            <span>1</span> Hosting
          </p>
          <p className="pb-4">
            Upto <span>10</span> users
          </p>
          <p className="pb-4">
            <span>3</span> databases
          </p>
          <p className="pb-4">Website builder</p>
          <p className="pb-4">Free support</p>
          <div className="flex justify-center">
            <Button buttonName="Buy Now" className="bg-[#252525de] border-[1px]" />
          </div>
        </div>
      </>
    );
};

export default CardDesign;
