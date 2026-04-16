import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-text-main mb-8 text-center">About ShopVerse</h1>
      
      <div className="bg-surface border border-border p-8 md:p-12 rounded-2xl shadow-sm prose prose-lg">
        <p className="text-xl text-text-muted mb-8 leading-relaxed">
          ShopVerse is a meticulously crafted e-commerce platform designed from the ground up to deliver a seamless minimalist shopping experience. Let the products shine, with zero clutter.
        </p>
        
        <h2 className="text-2xl font-bold text-text-main mb-4">Our Philosophy</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          We believe in 'less is more'. The modern shopper shouldn't be overwhelmed by chaotic interfaces and endless confusing choices. 
          By embracing a clean aesthetic combining light green, gray, and white palettes, we want shopping to feel like a breeze.
        </p>
        
        <h2 className="text-2xl font-bold text-text-main mb-4">Technology Stack</h2>
        <p className="text-text-muted mb-8 leading-relaxed">
          Built using the MERN stack (MongoDB, Express, React, Node.js) with Vite for blazing fast performance. Styled with Tailwind CSS for precise, responsive, and minimalist design systems.
        </p>

        <div className="bg-primary/10 p-6 rounded-xl border border-primary/20">
          <p className="text-text-main italic font-medium text-center">
            "A shopping universe where every category lives under one roof. Clean. Extensible. Beautiful."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
