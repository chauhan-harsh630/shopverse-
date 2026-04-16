import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary flex items-center gap-2 mb-4">
              🛒 ShopVerse
            </Link>
            <p className="text-text-muted text-sm">
              A shopping universe where every category lives under one roof. Minimal, clean, and fast.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-text-main mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link to="/products" className="hover:text-primary">All Products</Link></li>
              <li><Link to="/products?category=Electronics" className="hover:text-primary">Electronics</Link></li>
              <li><Link to="/products?category=Clothing" className="hover:text-primary">Clothing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-main mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li><Link to="/terms" className="hover:text-primary">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
          <p>Built by Harsh Chauhan.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
