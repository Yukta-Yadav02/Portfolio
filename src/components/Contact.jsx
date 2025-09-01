import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks! Message sent (demo). I'll integrate a real backend on request.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-16">
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-white via-purple-50 to-purple-100 rounded-3xl shadow-lg p-8 md:p-12">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Get In Touch</h2>
        <p className="text-gray-800 mb-6">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and development.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Name"
          />
          <input
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            type="email"
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Email"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows="5"
            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Your Message"
          ></textarea>

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg shadow-md transition"
            >
              Send Message
            </button>
            <a
              href="mailto:yuktay.bca2023@ssism.org"
              className="px-5 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 text-white shadow-md transition"
            >
              Email Me
            </a>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-700">
          <p>
            Email:{" "}
            <a className="text-purple-600" href="mailto:yuktay.bca2023@ssism.org">
              yuktay.bca2023@ssism.org
            </a>{" "}
            |{" "}
            <a className="text-purple-600" href="mailto:pariy8517@gmail.com">
              pariy8517@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a className="text-purple-600" href="tel:+919111683301">
              +91 9111683301
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
