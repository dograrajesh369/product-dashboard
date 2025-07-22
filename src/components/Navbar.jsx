import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/cart', label: 'Cart' },
    ...(token ? [{ to: '/favourites', label: 'Favourites' }] : []),
  ];

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-xl font-bold flex items-center gap-2"
        >
          🛍️ <span>Shop</span>
        </NavLink>

        {/* Hamburger (small screens only) */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Nav (hidden on small screens) */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-6 text-base">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `hover:underline transition ${
                  isActive ? 'font-semibold underline' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Auth Button (right) */}
        <div className="hidden md:flex">
          {token ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 transition"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>

      {/* Mobile Menu (visible only when toggled) */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-base">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:underline"
            >
              {link.label}
            </NavLink>
          ))}

          {token ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left bg-red-500 px-4 py-1 rounded hover:bg-red-600 mt-2"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="block bg-green-500 w-full text-left px-4 py-1 rounded hover:bg-green-600 mt-2"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
