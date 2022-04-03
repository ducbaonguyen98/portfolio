import React from "react";
import SectionSkill from "./SectionSkill";

const data = [
  {
    title: "Frontend developer",
    data: [ "HTML", "CSS", "JavaScript", "Bootstrap", "React Js", "Next Js", "Tailwind CSS" ]
  }, {
    title: "Backend developer",
    data: [ "Node Js", "Mongo DB", "MySQL", "Elasticsearch" ]
  }
]

const Skill = () => {
  return (
    <div className="space-y-20 md:w-96 md:m-auto">
     {
       data.map((item, index) => <SectionSkill key={index.toString()} title={item.title} data={item.data} />)
     }
    </div>
  );
};

export default Skill;
