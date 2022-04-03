import React, { useEffect } from "react";
import { RiMoonLine, RiSunLine } from "react-icons/ri";
import useToggle from "../../hook/useToggle";

const ChangeTheme = () => {
  const { toggle, set } = useToggle();
  useEffect(() => { 
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [toggle]);

  return (
    <div className="absolute right-0 top-0">
      <button
        onClick={() => {
          localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
          set(!toggle);
        }}
      >
        {localStorage.theme === "light" ? (
          <RiMoonLine className="text-xl" />
        ) : (
          <RiSunLine className="text-xl" />
        )}
      </button>
    </div>
  );
};

export default ChangeTheme;
