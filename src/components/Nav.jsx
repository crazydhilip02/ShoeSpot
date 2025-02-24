import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="flex justify-between items-center py-4 px-6 max-container">
        
        {/* Logo */}
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"
            width={70}
            height={70}
            className="w-[70px] h-[70px]"
          />
        </a>
        <div className="py-4 px-6 flex-shrink-0">
          <span className="text-[35px] lg:text-[40px] font-extrabold text-orange-500">Shoe</span>
          <span className="text-[35px] lg:text-[40px] font-extrabold text-black">Spot</span>
        </div>


        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-lg text-slate-gray hover:text-orange-500 transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-6 text-lg font-medium font-montserrat">
          <a href="/" className="text-gray-700 hover:text-orange-500 transition">Sign in</a>
          <span className="text-gray-500">/</span>
          <a href="/" className="text-gray-700 hover:text-orange-500 transition">Explore now</a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="lg:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
            <img src={hamburger} alt="hamburger icon" width={30} height={30} />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-700 hover:text-orange-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-gray-300" />
              <a href="/" className="text-gray-700 hover:text-orange-500 transition">Sign in</a>
              <a href="/" className="text-gray-700 hover:text-orange-500 transition">Explore now</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
