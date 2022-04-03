import React from "react";

const Avatar = () => {
  return (
    
    <div class="border-4 md:border-0 w-[180px] h-[180px] md:w-[350px] md:h-[220px] border-[#F0F2F5] dark:border-dark-200 flex justify-center items-center rounded-full  md:rounded-none">
      <div class="md:shadow w-[160px] h-[160px] md:w-[330px] md:h-[200px] bg-gradient-to-t from-white to-[#F0F2F5] dark:from-dark dark:to-[#414141] rounded-full md:rounded-md flex justify-center items-center overflow-hidden">
        <img class="rounded-full md:rounded-md self-end md:self-start" src={require("../../images/avatar.png")} alt="avatar" />
      </div>
    </div>
  );
};

export default Avatar;
