import React from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "./icons/ProfileIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TitleHeader } from "./icons/TitleHeader";

 const Navbar = () => {
  return (
    <header className="bg-[#000046] shadow p-4 flex justify-between items-center text-white">
     

      <div className="flex items-center">
        <Link to="/" className="mr-4">
          <TitleHeader className="h-6 w-6" />
        </Link>

        

        <div className="justify-items-end w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
          IS
        </div>
      </div>
    </header>
  );
};
export default Navbar