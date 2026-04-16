import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-text-main mb-4 text-center">Get in Touch</h1>
      <p className="text-text-muted text-center max-w-xl mx-auto mb-12">
        Have questions about an order or just want to say hi? Fill out the form below or reach us via email.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-text-main mb-2">Contact Information</h3>
            <p className="text-text-muted">We're here to help and answer any questions you might have.</p>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-text-main">Email</h4>
                <p className="text-text-muted">support@shopverse.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-text-main">Phone</h4>
                <p className="text-text-muted">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-semibold text-text-main">Address</h4>
                <p className="text-text-muted">123 Commerce St.<br/>Suite 100<br/>San Francisco, CA 94107</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-surface border border-border p-8 rounded-2xl shadow-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Name</label>
              <input type="text" className="input-field" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Email</label>
              <input type="email" className="input-field" placeholder="jane@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-main mb-2">Message</label>
              <textarea rows="4" className="input-field resize-none" placeholder="How can we help?" required></textarea>
            </div>
            <button type="button" className="btn-primary w-full py-3">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
