import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-950 text-white w-full p-4 md:p-6">
      {/* Top Section: Logo + Hamburger + Desktop Menu */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl md:text-4xl font-bold">
          Brahmastra
        </a>

        {/* Hamburger Icon (only on mobile) */}
        <div
          className="md:hidden flex flex-col justify-center items-end gap-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
          <div className="w-6 h-1 bg-white rounded" />
        </div>

        {/* Desktop Menu (hidden on mobile) */}
        <ul className="hidden md:flex items-center gap-24 text-lg">
          <li className="text-xl font-medium hover:text-lime-400">
            <a href="#home">Home</a>
          </li>
          <li className="text-xl font-medium hover:text-lime-400">
            <a href="#about">About</a>
          </li>
          <li className="text-xl font-medium hover:text-lime-400">
            <a href="#facilities">Facilities</a>
          </li>
          <li className="text-xl font-medium hover:text-lime-400">
            <a href="#trainers">Trainers</a>
          </li>
          <li className="text-xl font-medium hover:text-lime-400 text-center">
            <a href="#plans">Membership Plans</a>
          </li>
          <li>
            <a href="#contact">
              <button className="bg-lime-300 text-black px-4 py-2 rounded-xl font-semibold hover:bg-lime-400">
                Contact Us
              </button>
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (only when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 items-center">
          <a href="#home" onClick={toggleMenu} className="text-xl font-medium hover:text-lime-400">
            Home
          </a>
          <a href="#about" onClick={toggleMenu} className="text-xl font-medium hover:text-lime-400">
            About
          </a>
          <a href="#facilities" onClick={toggleMenu} className="text-xl font-medium hover:text-lime-400">
            Facilities
          </a>
          <a href="#trainers" onClick={toggleMenu} className="text-xl font-medium hover:text-lime-400">
            Trainers
          </a>
          <a href="#plans" onClick={toggleMenu} className="text-xl font-medium hover:text-lime-400">
            Membership Plans
          </a>
          <a href="#contact" onClick={toggleMenu}>
            <button className="bg-lime-300 text-black px-4 py-2 rounded-xl font-semibold hover:bg-lime-400">
              Contact Us
            </button>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
