import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiLogOut, FiSearch } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const [globalSearch, setGlobalSearch] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (globalSearch.trim()) {
      navigate(`/products?search=${encodeURIComponent(globalSearch.trim())}`);
      setGlobalSearch('');
    }
  };

  return (
    <nav className="bg-surface border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link to="/" className="text-xl md:text-2xl font-bold text-primary flex items-center gap-2 shrink-0">
            <span className="bg-primary/10 p-1.5 md:p-2 rounded-lg">🛒</span>
            <span className="hidden sm:block">ShopVerse</span>
          </Link>

          {/* Global Search Bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="flex-grow max-w-lg hidden md:flex relative items-center group"
          >
            <input 
              type="text" 
              placeholder="Search products..." 
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              className="w-full bg-background border border-border px-4 py-2 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
            />
            <FiSearch className="absolute left-4 text-text-muted group-focus-within:text-primary transition-colors" />
            <button type="submit" className="hidden">Search</button>
          </form>

          {/* Desktop Links (Removed from center to make room for Search, pushed closer to actions) */}
          <div className="hidden lg:flex items-center gap-6 font-medium text-text-muted shrink-0 text-sm">
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/cart" className="relative text-text-main hover:text-primary transition-colors">
              <FiShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden md:flex items-center gap-2 text-sm text-text-muted">
                  <FiUser size={18} />
                  <span>{user.name}</span>
                </div>
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors"
                >
                  <FiLogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-text-main hover:text-primary font-medium transition-colors">
                  Login
                </Link>
                <Link to="/signup" className="btn-primary">
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
