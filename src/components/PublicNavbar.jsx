import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLink = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/login", label: "Login" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#172738] backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <div className="relative">
            <img
              src="/logo.png"
              alt="logotipo site mind-hope"
              className="w-12 h-12 md:w-16 md:h-16 shadow-md"
            />
          </div>
          <div>
            <span className="text-lg font-bold text-white md:text-xl">Mind Hope</span>
            <p className="text-[10px] text-gray-300 font-medium hidden sm:block">Sistema Psicologico</p>
          </div>
        </div>
        {/* Restante... */}
  
          {/* Links desktop */}
          <div className="flex items-center space-x-3 md:space-x-4">
            {navLink.slice(0, -1).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hidden sm:block font-medium transition-colors text-sm md:text-base ${
                  isActive(link.to)
                    ? "text-accent"
                    : "text-gray-300 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/login">
              <button className="bg-gradient-to-r from-light to-accent text-white px-3 py-2 md:px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-sm md:text-base">
                <span className="hidden sm:inline">Entrar</span>
                <span className="sm:hidden">Login</span>
              </button>
            </Link>
          </div>
          {/* Menu mobile */}
          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-accent"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Menu mobile aberto isOpen = true */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="px-2 pt-2 pb-2 space-y-1 bg-[#1f324a] rounded-lg">
              {navLink.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-3 rounded-lg transition-colors ${
                    isActive(link.to)
                      ? "text-accent bg-accent/10 font-medium"
                      : "text-gray-300 hover:text-accent hover:bg-accent/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
