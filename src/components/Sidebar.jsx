import { HomeIcon } from "./icons/HomeIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { Link, useLocation } from "react-router-dom"; 

 const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="w-64 h-full bg-[#000046] p-4 flex flex-col">
      <ul className="space-y-6">
        <li>
          <Link
            to="/"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/"
                ? "bg-white text-[#000046]" 
                : "text-white hover:bg-[#64648c]" 
            }`}
          >
            <HomeIcon className="w-6 h-6 mr-3" />
            <span className="font-semibold">Home</span>
          </Link>
        </li>

        
        <li>
          <Link
            to="/profile"
            className={`flex items-center p-3 rounded-lg transition-colors duration-300 ${
              location.pathname === "/profile"
                ? "bg-white text-[#000046]" 
                : "text-white hover:bg-[#64648c]" 
            }`}
          >
            <ProfileIcon className="w-6 h-6 mr-3" />
            <span className="font-semibold">Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar