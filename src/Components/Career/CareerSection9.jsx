import React, { useEffect, useRef } from "react";
import data from "./CareerTestimonal.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "fill-[#facc15]" : "fill-[#CED5D8]"}`}
    viewBox="0 0 14 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
  </svg>
);

const Testimonials = () => {
  const testimonialRefs = useRef([]);

  useEffect(() => {
    testimonialRefs.current.forEach((ref) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        }
      );
    });
  }, []);

  return (
    <div className="my-12 relative z-10">
      <div className="text-center max-w-3xl mx-auto flex flex-col gap-2">
        <h2 className="font-extrabold text-2xl md:text-4xl lg:text-4xl sm:text-4xl text-black p-3">
          {data.title}
        </h2>
        {/* <p className="mt-4 leading-relaxed text-black">{data.description}</p> */}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl relative mx-auto mt-20 px-4">
        {data.testimonials.map((testimonial, index) => (
          <div
            key={index}
            ref={(el) => (testimonialRefs.current[index] = el)}
            className="relative w-full mb-6 p-6 rounded-lg shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white"
          >
            {/* Profile Image */}
            <img
              src={testimonial.image}
              className="w-14 h-14 rounded-full absolute -top-7 left-1/2 transform -translate-x-1/2"
              alt={testimonial.name}
            />
            {/* Testimonial Quote */}
            <div className="mt-8 text-center">
              <p className="lg:text-sm md:text-xs sm:text-xs text-xs text-gray-800 leading-relaxed">
                {testimonial.quote}
              </p>
            </div>
            {/* Star Rating */}
            <div className="mt-4 flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < testimonial.rating} />
              ))}
            </div>
            {/* Name */}
            <div className="mt-2 text-center">
              <h4 className="lg:text-sm md:text-xs sm:text-xs text-xs font-bold text-gray-900">
                {testimonial.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
