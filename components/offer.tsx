"use client";
import React, { useEffect, useState } from "react";

const QualityServices = () => {
  const qualities = [
    "Professionalism",
    "No Ingrown Hairs",
    "Very Sanitary",
    "Painless",
    "Extremely Thorough",
    "Satin Smooth Results",
    "No Double Dipping",
    "Excellent for Sensitive Skin",
    "Organic Hard and Gel Wax",
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("qualities");
      if (element) {
        const scrollPosition = window.scrollY + window.innerHeight;
        const elementPosition = element.offsetTop;

        if (scrollPosition >= elementPosition) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-2 p-10 shadow-lg rounded-lg" id="qualities">
      <h2 className="text-3xl font-bold text-center mb-6">
        Quality I Offer In My Services
      </h2>
      <ul className="space-y-4">
        {qualities.map((quality, index) => (
          <li
            key={index}
            className={`flex items-center text-lg transition-transform duration-700 ease-in-out ${
              animate
                ? index % 2 === 0
                  ? "translate-x-0"
                  : "translate-x-0"
                : index % 2 === 0
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
          >
            <span className="inline-block py-2 px-4 bg-purple-500 text-white rounded-full shadow-md">
              {quality}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QualityServices;
