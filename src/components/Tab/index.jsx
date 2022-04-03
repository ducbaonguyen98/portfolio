import React from "react";
import useToggle from "../../hook/useToggle";
import Button from "./Button";
import Project from "./Project";
import Skill from "./Skill";

const Tab = () => {
  const { toggle, set } = useToggle();
  return (
    <div className="space-y-5">
      <div className="p-2 bg-[#F0F2F5] dark:bg-dark-200 rounded-md flex justify-between md:w-96 md:m-auto">
        <Button onClick={set} toggle={toggle} title="Projects" />
        <Button onClick={set} toggle={!toggle} title="Skills" /> 
      </div> 
      {
        toggle ? <Project /> : <Skill />
      } 
    </div>
  );
};

export default Tab;
