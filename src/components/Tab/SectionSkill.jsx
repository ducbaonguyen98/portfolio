import React from "react";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Skill = ({ skill }) => (
    <div className="flex items-center gap-2 p-2">
        <RiCheckboxCircleLine className="text-xl text-info" />
        <span className="font-medium leading-[20px]">{ skill }</span>
    </div>
)

const SectionSkill = ({ title, data }) => {
  return (
    <div className="space-y-5">
      <h3 className="font-medium text-xl text-center">{ title }</h3>
      <div className="m-auto grid grid-cols-2 gap-3">
        {
            data.map((item, index) => <Skill key={index.toString()} skill={item} />)
        }
      </div>
    </div>
  );
};

export default SectionSkill;
