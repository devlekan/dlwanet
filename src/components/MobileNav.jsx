import { useState } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

function MobileNav() {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };
  return (
    <div className="md:hidden bg-[var(--primary-color)] w-full fixed right-0 top-0 z-50 flex justify-between items-center px-14 py-2">
      <div>
        <img src="/logo.svg" alt="logo" className="w-[67px] h-[67px] p-2" />
      </div>

      <Link onClick={handleToggleNav} className="cursor-pointer">
        <div className="w-8 bg-[var(--secondary-color)] h-[4px] mb-[2px]"></div>
        <div className="w-6 bg-[var(--secondary-color)] h-[4px] mb-[2px]"></div>
        <div className="w-4 bg-[var(--secondary-color)] h-[4px]"></div>
      </Link>

      {toggleNav && (
        <div className="bg-[var(--primary-color)] flex flex-col text-center h-full fixed right-0 top-0 p-16">
          <button
            onClick={() => setToggleNav(false)}
            className="text-[var(--secondary-color)] flex justify-end mt-[-40px] mr-[-20px]"
          >
            <IoClose size={35} />
          </button>

          <div className="flex flex-col space-y-8 pt-16 text-[var(--text-color)]">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>

          <div className="flex flex-col mt-10 space-y-3 gap-6">
            <button className="px-4 py-2 rounded-md bg-[var(--text-color)] text-[var(--primary-color)]">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="px-4 py-2 border border-[var(--secondary-color)] rounded-md bg-transparent text-[var(--secondary-color)]">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
