import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import api from '../api/axios';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await api.get('/products');
        // Get just the first 4 for the hero
        setFeaturedProducts(response.data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching featured products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="flex flex-col gap-16 pb-10">
      {/* Hero Section */}
      <section className="relative bg-primary/10 rounded-2xl overflow-hidden -mt-4 min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container relative z-10 px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-3 rounded-full bg-white text-primary text-sm font-semibold tracking-wide mb-4 shadow-sm border border-primary/20">
              New Collection 2026
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-text-main leading-tight mb-6 tracking-tight">
              Curated <span className="text-primary">essentials</span> <br/> for modern life.
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-lg">
              Limitless choices, refined design. One clean space, infinite possibilities. Welcome to the ultimate shopping experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2 group text-lg px-8 py-3">
                Explore Catalog <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-text-main relative pb-2 inline-block">
            Trending Now
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary rounded-full"></span>
          </h2>
          <Link to="/products" className="text-primary font-medium hover:text-primary-dark flex items-center gap-1">
            View All <FiArrowRight />
          </Link>
        </div>
        
        {loading ? (
          <div className="text-center py-10 text-text-muted">Loading featured products...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {featuredProducts.length > 0 ? (
               featuredProducts.map(product => (
                 <ProductCard key={product._id} product={product} />
               ))
            ) : (
               <div className="col-span-full text-center py-12 text-text-muted">No products available. Did you start the backend server?</div>
            )}
          </div>
        )}
      </section>

      {/* Value Props */}
      <section className="bg-surface border border-border rounded-2xl p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-text-main">Free Shipping</h3>
            <p className="text-text-muted text-sm">On all orders over ₹150. Fast and reliable delivery to your door.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-text-main">Secure Payments</h3>
            <p className="text-text-muted text-sm">Your data is safe with us. We use industry-standard encryption.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-text-main">30 Days Return</h3>
            <p className="text-text-muted text-sm">Not satisfied? Return your items hassle-free within 30 days.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
