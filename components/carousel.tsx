"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";

import slide1 from "../public/images/slide-1.jpg";
import slide2 from "../public/images/slide-2.jpg";
import slide3 from "../public/images/slide-3.jpg";
import logo from "../public/images/mainLogo.png";

const images = [slide1, slide2, slide3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-svh overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
        <h1 className="text-3xl md:text-5xl font-bold mt-24">
          WELCOME TO BARE BY KRISTEN
        </h1>
        <Image src={logo} alt="Logo" className="mb-4 mt-8 w-24 h-24" />
        <p className="mt-2 text-lg md:text-2xl">
          The Best Waxing Services in New Jersy (NJ).
        </p>
        <div className="mt-10 flex flex-wrap justify-around ">
          <Link href="/services">
            <h3 className="btn">My Services</h3>
          </Link>
          <Link href="/about">
            <h3 className="btn">About Me</h3>
          </Link>
          <Link href="https://www.google.com/maps/place/BARE+by+Kristen/@40.894809,-73.976772,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2f6fb1daad08d:0x5f51ba263038f799!8m2!3d40.894809!4d-73.976772!9m1!1b1!16s%2Fg%2F1yg6d443k?entry=ttu">
            <h3 className="btn">Google Review</h3>
          </Link>
          <Link href="/appointment">
            <h3 className="btn mt-8">Book an Appointment</h3>
          </Link>
        </div>
        <div className="flex flex-row justify-around space-x-6 pt-4 items-center cursor-pointer">
          <Link href="https://www.instagram.com/barebykristen/?hl=en">
            <AiOutlineInstagram size={30} />
          </Link>
          <Link href="https://web.facebook.com/barebykristen/?_rdc=1&_rdr">
            <AiOutlineFacebook size={30} />
          </Link>
          <Link href="https://www.google.com/maps/place/BARE+by+Kristen/@40.894809,-73.976772,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2f6fb1daad08d:0x5f51ba263038f799!8m2!3d40.894809!4d-73.976772!9m1!1b1!16s%2Fg%2F1yg6d443k?entry=ttu">
            <AiOutlineGoogle size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
