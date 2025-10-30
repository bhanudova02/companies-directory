import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export function Header() {
  const location = useLocation();

  return (
    <div className="bg-gray-100 border-b border-gray-200 py-2.5 px-6 flex items-center justify-between">
      {/* Left: Logo */}
      <Link to="/">
        <img
          src="./logo.png"
          alt="logo"
          className="w-20 h-auto"
        />
      </Link>

      {/* Right: Navigation */}
      <nav className="md:flex items-center gap-6 text-sm font-medium text-gray-700 hidden">
        <Link
          to="/"
          className={`hover:text-black ${
            location.pathname === "/" ? "underline text-black" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-black ${
            location.pathname === "/about" ? "underline text-black" : ""
          }`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`hover:text-black ${
            location.pathname === "/contact" ? "underline text-black" : ""
          }`}
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Sidebar */}
      <div className="block md:hidden">
        <Sidebar />
      </div>
    </div>
  );
}
