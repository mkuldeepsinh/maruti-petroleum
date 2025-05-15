"use client";
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    // You can handle the backend submission here
    console.log("User submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", message: "" });

    // Optional: reset success message after a few seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="max-w-xl mx-auto p-8 mt-12 bg-white dark:bg-zinc-900 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-gray-600"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Suggestion or Query"
          rows={5}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-zinc-800 dark:text-white dark:border-gray-600"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
        >
          Submit
        </button>

        {submitted && (
          <p className="text-green-600 text-center mt-4">
            ✅ Message sent successfully. We will reply soon!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
