import React from "react";
import Avatar from "./Avatar";
import ChangeTheme from "./ChangeTheme";
import Info from "./Info";
import Social from "./Social";

const Header = () => {
  return (
    <div className="relative text-xs flex flex-col items-center text-center space-y-2">
     <Avatar />
     <Info />
     <Social/>
     <ChangeTheme/>
    </div>
  );
};

export default Header;
