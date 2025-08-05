"use client";
import React from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "M. Abdullah",
    rating: 5,
    review:
      "Absolutely love the quality and delivery speed! Cartify has become my go-to for all shopping needs.",
  },
  {
    id: 2,
    name: "Wali Muhammad",
    rating: 4,
    review:
      "Great service and top-notch products. I'm especially impressed with the customer support team.",
  },
  {
    id: 3,
    name: "Saim MohyudDin",
    rating: 5,
    review:
      "The site is super easy to use, and the product quality exceeded my expectations!",
  },
];

const AboutReviews = () => {
  return (
    <section className="w-full bg-blue-500 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto text-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          We're proud to have earned the trust and satisfaction of our customers.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white text-blue-700 rounded-xl shadow-lg p-6 hover:scale-105 transition"
            >
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 stroke-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-sm italic mb-4">“{review.review}”</p>
              <h4 className="font-semibold text-md">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutReviews;
