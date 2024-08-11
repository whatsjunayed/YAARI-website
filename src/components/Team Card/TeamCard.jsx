import React from 'react'
import TeacmCardInfo from './TeamCardData';
import TeamCardDesign from './TeamCardDesign';

const TeamCard = () => {
  return (
    <>
      <div className="py-20 bg-[#636163]">
        <p className="text-center text-lg">Who we are</p>
        <h1 className="text-center text-3xl">Behind Creative Team</h1>
        <div className="grid gap-7 px-8 pt-8 md:grid-cols-2 xl:grid-cols-3 max-w-[85%] mx-auto">
          {TeacmCardInfo.map((item,index) => {
            return <TeamCardDesign key={index} Image={item.image} Name={item.name} Title={item.title} />
          })}
        </div>
      </div>
    </>
  );
}

export default TeamCard
