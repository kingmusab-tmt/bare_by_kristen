"use client";
import { useEffect, useRef } from "react";

interface ServiceItem {
  name: string;
  price: number;
}

const ServiceItem = ({ name, price }) => {
  const serviceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-float");
        } else {
          entry.target.classList.remove("animate-float");
        }
      },
      { threshold: 0.1 }
    );

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={serviceRef}
      className="bg-white p-4 rounded-lg shadow-lg transition-transform transform"
    >
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">${price}</p>
    </div>
  );
};

export default ServiceItem;
