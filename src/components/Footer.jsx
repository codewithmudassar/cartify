import React from 'react'

const Footer = () => {
  return (
    <div>
      <section className="py-12 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Want to order something?</h2>
        <p className="mb-6">We'd love to hear from you! Let's shopping together.</p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </div>
  )
}

export default Footer
