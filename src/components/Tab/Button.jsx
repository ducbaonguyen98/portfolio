import React from "react";

const Button = ({onClick, toggle, title }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`py-3 w-1/2 rounded-md ${toggle ? "bg-white dark:bg-dark" : "hover:opacity-60"}`}
    >
      {title}
    </button>
  );
};

export default Button;
