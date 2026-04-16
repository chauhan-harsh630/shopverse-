import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import api from '../api/axios';
import { FiArrowLeft, FiShoppingCart, FiCheck } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Error fetching single product", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center py-20 text-xl text-text-muted">Loading product...</div>;
  
  if (error || !product) {
    return <div className="text-center py-20 text-2xl font-bold text-text-main">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-4">
      <Link to="/products" className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors">
        <FiArrowLeft /> Back to products
      </Link>

      <div className="bg-surface border border-border rounded-2xl overflow-hidden p-6 md:p-10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Image */}
          <div className="aspect-[4/5] bg-background rounded-xl overflow-hidden">
            <img 
              src={product.image || 'https://via.placeholder.com/600'} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wider text-primary uppercase mb-2">
              {product.category} {product.subCategory && `› ${product.subCategory}`}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-text-main mb-4 leading-tight">
              {product.name}
            </h1>
            
            <p className="text-2xl font-bold text-text-main mb-6">
              ₹{product.price.toFixed(2)}
            </p>
            
            <p className="text-text-muted leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${product.stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                {product.stock > 0 ? (
                  <><span className="w-2 h-2 rounded-full bg-emerald-500"></span> In Stock ({product.stock} available)</>
                ) : (
                  <><span className="w-2 h-2 rounded-full bg-red-500"></span> Out of Stock</>
                )}
              </span>
            </div>

            <div className="mt-auto">
              <button 
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className={`w-full md:w-auto py-3 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                  added 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary text-white hover:bg-primary-dark active:scale-95 disabled:opacity-50'
                }`}
              >
                {added ? (
                  <><FiCheck size={20} /> Added to Cart</>
                ) : (
                  <><FiShoppingCart size={20} /> Add to Cart</>
                )}
              </button>
            </div>
            
            {/* Minimal Guarantees */}
            <div className="mt-8 pt-8 border-t border-border flex items-center gap-6 text-sm text-text-muted">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                30-Day Return
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
