import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar Sheet (Right side) */}
      <aside
        className={`fixed top-0 right-0 h-full w-60 z-50 bg-white shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="p-1">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 flex flex-col">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-black"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-black"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-black"
          >
            Contact
          </Link>
        </div>
      </aside>
    </div>
  );
}
