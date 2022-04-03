import React from "react";

const ButtonLink = ({ children, href, className}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${className} flex justify-center items-center hover:opacity-60`}
    >
     { children }
    </a>
  );
};

export default ButtonLink;
