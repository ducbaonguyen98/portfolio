import React from "react";

const Avatar = () => {
  return (
    <div className="border-4 w-[180px] h-[180px] border-[#F0F2F5] dark:border-dark-200 flex justify-center items-center rounded-full">
      <div className="w-[160px] h-[160px] bg-gradient-to-t from-white to-[#F0F2F5] dark:from-dark dark:to-[#414141] rounded-full flex justify-center items-center overflow-hidden">
        <img
          className="rounded-full self-end"
          src={require("../../images/avatar.png")}
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Avatar;
