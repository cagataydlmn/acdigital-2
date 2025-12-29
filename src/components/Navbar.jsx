import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative group"
            onClick={closeMenu}
          >
            <img 
              src="/A&C@3x-8.png" 
              alt="A&C Digital" 
              className="h-14 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#004250] via-[#4DB8FF] to-[#80D4FF]  blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/hakkimizda"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Hakkımızda
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/hizmetler"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Hizmetler
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/portfoy"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Portföy
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Blog
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <Link
              to="/iletisim"
              className="px-6 py-2.5 bg-gradient-to-r  from-[#4DB8FF] to-[#80D4FF]  text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300"
            >
              İletişim
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu - Solid Background */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div 
            className="flex flex-col gap-4 py-4 px-4 rounded-2xl"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <NavLink
              to="/hakkimizda"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group py-2 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Hakkımızda
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/hizmetler"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group py-2 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Hizmetler
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/portfoy"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group py-2 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Portföy
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <NavLink
              to="/blog"
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors relative group py-2 ${
                  isActive ? 'text-white' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  Blog
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-white transition-all ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
            
            <Link
              to="/iletisim"
              onClick={closeMenu}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 text-center transition-all duration-300"
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

