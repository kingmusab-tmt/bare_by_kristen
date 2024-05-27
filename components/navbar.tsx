"use client";
import Image from "next/image";
import logo from "../public/images/mainLogo.webp";
import Link from "next/link";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineGoogle,
} from "react-icons/ai";
import { useState } from "react";
// import { useMenuState } from "./clientsidecomponents";

const Navbar = () => {
  // const { menuOpen, handleNav } = useMenuState();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-16 shadow-xl bg-white z-10">
      <div className="flex justify-between items-center h-full w-full px-4  2xl:px-16">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="100"
            height="100"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/about">
              <li className="ml-10 uppercase hover:border-b text-xl">Why Us</li>
            </Link>
            <Link href="/appointment">
              <li className="ml-10 uppercase hover:border-b text-xl">
                Contact Us
              </li>
            </Link>
            <Link href="/Services">
              <li className="ml-10 uppercase hover:border-b text-xl">
                My Services
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left 0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-red-600 font-bold"
              >
                Home
              </li>
            </Link>
            <Link href="/about">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-red-600 font-bold"
              >
                About
              </li>
            </Link>
            <Link href="/appointment">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-red-600 font-bold"
              >
                Contact
              </li>
            </Link>
            <Link href="/services">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-red-600 font-bold"
              >
                My Services
              </li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-around pt-10 items-center cursor-pointer">
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
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width="200"
            height="100"
            className="cursor-pointer pt-10"
            priority
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
