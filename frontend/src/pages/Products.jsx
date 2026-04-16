import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import api from '../api/axios';
import { FiFilter, FiSearch, FiLoader } from 'react-icons/fi';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialSearch = searchParams.get('search') || '';
  
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [category, setCategory] = useState(initialCategory);
  
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);

  // Sync category & search state back to URL when local inputs are used
  useEffect(() => {
    const params = new URLSearchParams();
    if (category !== 'All') params.set('category', category);
    if (searchTerm) params.set('search', searchTerm);
    
    setSearchParams(params, { replace: true });
  }, [category, searchTerm, setSearchParams]);

  // Listen to Navbar global search queries modifying URL
  useEffect(() => {
    const searchFromUrl = searchParams.get('search') || '';
    if (searchFromUrl !== searchTerm) {
      setSearchTerm(searchFromUrl);
      setIsSearching(true);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  useEffect(() => {
    if (!isSearching) return;
    const timer = setTimeout(() => setIsSearching(false), 500); // 500ms hope delay
    return () => clearTimeout(timer);
  }, [searchTerm, isSearching]);

  const categories = ['All', ...new Set(products.map(p => p.category))]; 

  const filteredProducts = products.filter(p => {
    const term = searchTerm.toLowerCase().trim();
    // Ultra robust case-insensitive matching across fields
    const matchesSearch = 
      p.name.toLowerCase().includes(term) || 
      p.category.toLowerCase().includes(term) ||
      (p.subCategory && p.subCategory.toLowerCase().includes(term));
      
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  const Skeletons = () => (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(key => (
        <div key={key} className="bg-surface border border-border rounded-xl shadow-sm p-4 h-[350px] flex flex-col animate-fade-in-up" style={{animationDelay: `${key * 0.05}s`}}>
           <div className="skeleton h-[200px] w-full mb-4"></div>
           <div className="skeleton h-4 w-1/3 mb-3"></div>
           <div className="skeleton h-6 w-3/4 mb-auto"></div>
           <div className="border-t border-border border-dashed pt-4 flex justify-between">
              <div className="skeleton h-6 w-16"></div>
              <div className="skeleton h-10 w-10 rounded-full"></div>
           </div>
        </div>
      ))}
    </>
  );

  return (
    <div className="py-4 animate-fade-in-up">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold text-text-main relative pb-2 inline-block">
          All Products
          <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
        </h1>
        {(loading || isSearching) && (
           <span className="text-primary flex items-center gap-2 animate-pulse font-medium">
             <FiLoader className="animate-spin" /> Gathering the best...
           </span>
        )}
      </div>

      <div className="bg-surface p-4 rounded-2xl border border-border flex flex-wrap gap-4 mb-8 justify-between shadow-sm">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 w-full">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                category === cat 
                  ? 'bg-primary text-white border-primary shadow-md -translate-y-0.5' 
                  : 'bg-background text-text-muted border-border hover:border-primary hover:text-primary hover:-translate-y-0.5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {loading || isSearching ? (
          <Skeletons />
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard 
              key={product._id} 
              product={product} 
              style={{ animationDelay: `${index * 0.05}s` }} 
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center flex flex-col items-center justify-center text-text-muted bg-surface rounded-2xl border border-border border-dashed">
            <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-4">
               <FiSearch className="text-2xl opacity-50" />
            </div>
            <p className="text-lg font-medium">No items found.</p>
            <p className="text-sm border-b pb-4 mb-4 border-border">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => {
                setSearchParams(new URLSearchParams()); 
                setCategory('All'); 
                setSearchTerm('');
              }} 
              className="mt-4 btn-outline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
