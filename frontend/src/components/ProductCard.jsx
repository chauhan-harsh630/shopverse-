import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, style }) => {
  const { addToCart } = useCart();

  return (
    <div 
      className="card group overflow-hidden flex flex-col h-full bg-surface relative animate-fade-in-up" 
      style={style}
    >
      <Link to={`/products/${product._id}`} className="block relative overflow-hidden aspect-[4/5]">
        <img 
          src={product.image || 'https://via.placeholder.com/600'} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
          {product.category}
        </span>
        <Link to={`/products/${product._id}`}>
          <h3 className="font-bold text-lg text-text-main leading-tight hover:text-primary transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-border border-dashed">
          <span className="font-bold text-xl text-text-main">
            ₹{product.price.toFixed(2)}
          </span>
          <button 
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-main hover:bg-primary-dark hover:text-white hover:rotate-12 transition-all active:scale-95 shadow-sm"
            aria-label="Add to cart"
            disabled={product.stock === 0}
          >
            <FiShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
