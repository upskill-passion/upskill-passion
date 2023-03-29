import { useState } from "react";

import { close, logo, menu } from "../assets";
import Nav from "./Nav";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const content = (
    <header>
      <nav className="w-full flex py-6 justify-between items-center">
        <img
          src={logo}
          alt="upskill-passion-logo"
          className="w-[124px] h-[32px]"
        />
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          <Nav />
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-[#333] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-center flex-col flex-1">
              <Nav toggle={toggle} />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );

  return content;
};
export default Header;
