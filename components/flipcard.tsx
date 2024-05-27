"use client";
import { useState, useEffect } from "react";

const Flipcard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlipped((prevState) => !prevState);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div
      className="relative mt-10 w-full h-64 bg-white rounded-lg shadow-md transform transition-transform duration-700"
      style={{ perspective: "1000px" }} // Adding perspective for 3D effect
    >
      <div
        className={`absolute w-full h-full transition-transform duration-700 transform ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className={`absolute w-full h-full p-6 bg-white rounded-lg ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-center text-lg font-bold text-purple-500 mb-4">
            Testimonial
          </h3>
          <blockquote className="text-gray-700 italic h-36 overflow-hidden">
            &quot;First time going in for a wax and I was super nervous! Kristen
            made me feel super comfortable and at ease. The process was super
            quick and painless! Kristen is a true professional and knows what
            she’s doing! She has a client for life!! Even love that her studio
            is super clean, sanitary and is a whole vibe! Love that she followed
            up with after care instructions and on how I was feeling the next
            day. Kirsten takes pride in her work and cares about her clients.
            Highly recommend!!&quot;
          </blockquote>
          <p className="mt-4 text-right font-bold text-purple-500">
            - Irene Hoppas
          </p>
        </div>
        <div
          className={`absolute w-full h-full p-6 bg-white rounded-lg transform rotate-y-180 ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
          style={{ backfaceVisibility: "hidden" }}
        >
          <h3 className="text-center text-lg font-bold text-purple-500 mb-4">
            Testimonial
          </h3>
          <blockquote className="text-gray-700 italic h-36 overflow-hidden">
            &quot;My experience with Kristen was absolutely amazing and so
            comfortable!! I’ve gotten waxed before, but this was definitely my
            best experience! Kristen was so easy to talk to and so fun to be
            around!! She was so thorough, checked in with me afterwards, and
            even sent me a whole email with a step by step after care regimen
            with the exact products. Her studio is extremely clean and decor is
            just beautiful and so unique! You could tell she put her heart and
            soul into it! I highly highly highly recommend her, don’t even think
            about it!&quot;
          </blockquote>
          <p className="mt-4 text-right font-bold text-purple-500">
            - Sara Cherian
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flipcard;
