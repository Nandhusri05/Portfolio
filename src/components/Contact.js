import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-[#121212]">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">
        Contact Me
      </h2>

      {submitted && (
        <p className="max-w-lg mx-auto mb-6 text-center text-green-400 font-semibold">
          Thank you for your message! I'll get back to you soon.
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6"
        noValidate
        aria-label="Contact form"
      >
        <div>
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#00ADB5] 
                       hover:ring-2 hover:ring-[#08D9D6] focus:ring-offset-0 hover:ring-offset-0 
                       transition border border-transparent focus:border-[#00ADB5]"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#00ADB5] 
                       hover:ring-2 hover:ring-[#08D9D6] focus:ring-offset-0 hover:ring-offset-0 
                       transition border border-transparent focus:border-[#00ADB5]"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded-lg bg-[#2C2C2C] text-gray-300 
                       focus:outline-none focus:ring-2 focus:ring-[#00ADB5] 
                       hover:ring-2 hover:ring-[#08D9D6] focus:ring-offset-0 hover:ring-offset-0 
                       transition border border-transparent focus:border-[#00ADB5]"
            aria-required="true"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00ADB5] hover:bg-[#08D9D6] text-white py-2 rounded-lg shadow-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
