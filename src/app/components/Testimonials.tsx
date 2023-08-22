"use client";

import React, { useState, useEffect } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { TestimonialType } from "../types/TestimonialTypes";
import Loader from "./Loader";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Retrieve all client testimonials
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const testimonialsData = await response.json();

        setTestimonials(testimonialsData.testimonials);
      } catch (error) {
        console.error(
          "Error attemping to fetch testimonials from MongoDB",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div className="testimonials-container">
        <h2 className="text-4xl font-bold p-5 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.length > 0 &&
            testimonials.map((testimonial) => (
              <div
                key={testimonial["_id"]}
                className="border border-gray-400 p-5"
              >
                <div className="border border-gray-400 p-2 rounded-xl mb-5 text-center md:text-left">
                  <BsPersonCircle className="text-2xl text-green-400 inline" />
                  <h2 className="inline ml-2">{testimonial.name}</h2>
                </div>
                <p>{testimonial.testimony}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
