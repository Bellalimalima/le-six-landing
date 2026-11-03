"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#f5f3ef]/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-light tracking-widest text-gray-800">
          LE SIX
        </h1>

        {/* Links */}
        <ul className="flex space-x-8 text-gray-700 font-light">
          <li>
            <a href="#projeto" className="hover:text-yellow-600 transition-colors">
              Projeto
            </a>
          </li>
          <li>
            <a href="#video" className="hover:text-yellow-600 transition-colors">
              Vídeo
            </a>
          </li>
          <li>
            <a href="#localizacao" className="hover:text-yellow-600 transition-colors">
              Localização
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-yellow-600 transition-colors">
              Contato
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
