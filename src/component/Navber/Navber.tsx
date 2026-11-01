
import {
  MdGroups,
} from "react-icons/md";

import Navlink from "./Navlink";
import Navbtn from "./Navbtn";

const Navber = () => {
  return (
    <header className="w-full z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin flex items-center justify-between gap-space-md">
        {/* Logo & Main Nav */}
        <div className="flex items-center">
          <a
            className="flex items-center gap-space-xs focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
            data-path="upcoming-events"
            href="#"
          >
            <div className="w-8 h-8 rounded-lg bg-primary-container text-white flex items-center justify-center shadow-sm">
              <MdGroups className="text-[20px]" />
            </div>
            <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-bold ml-1.5">
              CommUnity
            </span>
          </a>
        </div>
        <div className="flex items-center">
          <Navlink/>
        </div>
        {/* Action CTAs & Auth Controls */}
        <div className="flex items-center">
          <Navbtn />
        </div>
      </div>
    </header>
  );
};

export default Navber;
