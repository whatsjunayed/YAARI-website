import React from "react";
import CardDatas from "./CardData";
import CardDesign from "./CardDesign";
const Card = () => {
  return (
    <>
      <div className="py-20 bg-[#636163]">
        <p className="text-center  uppercase">Subscription</p>
        <h1 className="text-center text-3xl font-bold">Simple Pricing</h1>
        <div className="card-parent pt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-12 max-w-[85%] mx-auto">
          {CardDatas.map((item, index) => {
            return <CardDesign key={index} Title={item.title} Price={item.price} />;
          })}
          
        </div>
      </div>
    </>
  );
};

export default Card;
