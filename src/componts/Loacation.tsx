import React from 'react';

function Location() {
  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-white-800 dark:text-white">
        Visit Maruti Petroleum
      </h2>

      <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl border-4 border-neutral-700 shadow-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.0658976732193!2d72.00807281021348!3d21.62892756681336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f550025bc1753%3A0x8e5c98921f485858!2sMaruti%20Petroleum!5e1!3m2!1sen!2sin!4v1747328854505!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Location;
