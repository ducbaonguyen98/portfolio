import React from "react";
import { RiDownload2Line } from "react-icons/ri";  

const Info = () => {
  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">Nguyễn Đức Bão</h2>
      <span className="text-muted">Frontend Developer</span>
      <p className="text-sm text-muted md:w-96">
        I have more than 2.5 years of experience in website development. In the near future, I want to become a professional programmer, a good leader.
      </p>
      <div className="flex justify-center items-center gap-3">
        <a  href={require("../../pdf/NGUYEN-DUC-BAO-CV.pdf")}
        download
          className="py-3 px-10 text-white bg-info rounded-md text-sm font-semibold flex justify-center items-center"
        >
          Download CV <RiDownload2Line className="ml-2 text-xl" />
        </a> 
      </div>
    </div>
  );
};

export default Info;
