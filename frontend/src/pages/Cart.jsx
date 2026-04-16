import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { FiTrash2, FiMinus, FiPlus, FiArrowRight } from 'react-icons/fi';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!user) {
      navigate('/login');
    } else {
      alert('Checkout flow to be implemented!');
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-text-main mb-4">Your cart is empty</h2>
        <p className="text-text-muted mb-8 max-w-md">Looks like you haven't added anything to your cart yet. Explore our products and find something you love.</p>
        <Link to="/products" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-4">
      <h1 className="text-3xl font-bold text-text-main mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items List */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.product._id} className="bg-surface border border-border rounded-xl p-4 flex gap-4 md:gap-6 items-center shadow-sm">
              {/* Product Image */}
              <div className="w-24 h-24 shrink-0 bg-background rounded-lg overflow-hidden">
                <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              
              {/* Details */}
              <div className="flex-grow flex flex-col">
                <Link to={`/products/${item.product._id}`} className="font-semibold text-text-main hover:text-primary transition-colors line-clamp-1">
                  {item.product.name}
                </Link>
                <span className="text-sm text-text-muted mb-2">{item.product.category}</span>
                <span className="font-bold text-text-main">₹{item.product.price.toFixed(2)}</span>
              </div>

              {/* Quantity controls */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => updateQuantity(item.product._id, item.quantity - 1)}
                  className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                  disabled={item.quantity <= 1}
                >
                  <FiMinus />
                </button>
                <span className="font-medium w-4 text-center">{item.quantity}</span>
                <button 
                  onClick={() => updateQuantity(item.product._id, item.quantity + 1)}
                  className="w-8 h-8 rounded-md border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors disabled:opacity-50"
                  disabled={item.quantity >= item.product.stock}
                >
                  <FiPlus />
                </button>
              </div>

              {/* Price total & Remove */}
              <div className="flex flex-col items-end gap-2 shrink-0 w-24">
                <span className="font-bold text-lg text-text-main">₹{(item.product.price * item.quantity).toFixed(2)}</span>
                <button 
                  onClick={() => removeFromCart(item.product._id)}
                  className="text-sm text-red-500 hover:text-red-700 flex items-center gap-1 transition-colors"
                >
                  <FiTrash2 /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-surface border border-border rounded-xl p-6 sticky top-24 shadow-sm">
            <h2 className="text-xl font-bold text-text-main mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-text-muted">
                <span>Subtotal</span>
                <span className="text-text-main font-medium">₹{cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-text-muted">
                <span>Tax</span>
                <span className="text-text-main font-medium">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-4 mb-8 flex justify-between items-center">
              <span className="font-bold text-lg text-text-main">Total</span>
              <span className="font-bold text-2xl text-text-main">₹{cartTotal.toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              className="w-full btn-primary py-4 text-lg flex items-center justify-center gap-2"
            >
              Checkout <FiArrowRight />
            </button>
            {!user && (
              <p className="text-sm text-center text-text-muted mt-4">
                You will be asked to log in to complete your purchase.
              </p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
