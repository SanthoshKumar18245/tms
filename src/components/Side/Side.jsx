import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Side() {
  return (
    <div className="relative top-0">
      <nav className="w-[17vw] h-[100vh] bg-bgBlack border-r-bgGray border-t-bgGray border-r-[1px] border-t-[1px] ">
        <div className="text-name ml-16 mt-14 font-poppins flex flex-col justify-center items-center gap-6">
          <Link>
            <div className="flex w-[20vw] p-3 items-center justify-start">
              <div className="flex justify-center items-center mr-7">
                <FontAwesomeIcon icon={faHouse} className="text-xl" />
              </div>
              <div className="text-lg">Dashboard</div>
            </div>
          </Link>
          <Link>
            <div className="flex w-[20vw] p-3 items-center justify-start">
              <div className="flex justify-center items-center mr-7">
                <FontAwesomeIcon icon={faListCheck} className="text-xl" />
              </div>
              <div className="text-lg">New Tickets</div>
            </div>
          </Link>
          <Link to="/analytics">
            <div className="flex w-[20vw] p-3 items-center justify-start">
              {" "}
              {/* Replace "/analytics" with your desired route */}
              <div className="flex justify-center items-center mr-7">
                <FontAwesomeIcon icon={faChartSimple} className="text-xl" />
              </div>
              <div className="text-lg">Analytics</div>
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Side;
