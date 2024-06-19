import React from "react";
import {
  faBell,
  faGear,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="h-[10vh] bg-bgBlack w-full flex justify-between items-center">
      {/* Search Input */}
      <div className="relative flex items-center">
        <div className="flex absolute left-72 text-name bg-bgGray pt-2 pb-2 pl-5 pr-5 rounded-full w-[25vw] items-center justify-between">
          <input
            type="text"
            className="bg-transparent text-name font-poppins outline-none text-sm"
            placeholder="Search Your Asset"
          />
          <FontAwesomeIcon className="text-xl" icon={faSearch} />
        </div>
      </div>

      {/* Icons for Settings, Notifications, and User */}
      <div className="text-white flex gap-7 mr-10">
        {/* Settings */}
        <div>
          <FontAwesomeIcon icon={faGear} className="text-flo" />
        </div>
        {/* Notifications */}
        <div className="relative text-flo">
          <FontAwesomeIcon icon={faBell} />
          <p className="absolute -top-2 -right-2 bg-flo text-black rounded-full w-4 h-4 flex items-center justify-center text-xs">
            3
          </p>
        </div>
        {/* User */}
        <div>
          <FontAwesomeIcon icon={faUser} className="text-flo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
