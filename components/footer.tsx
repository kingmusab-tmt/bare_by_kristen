import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGoogle,
} from "react-icons/fa";
import Image from "next/image";
import logo from "../public/images/mainLogo.webp";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-maroon-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Image src={logo} alt="Company Logo" className="h-auto w-auto" />
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://web.facebook.com/barebykristen/?_rdc=1&_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaFacebookF className="h-6 w-6" />
            </a>
            <a
              href="https://www.instagram.com/barebykristen/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
            <a
              href="https://www.google.com/maps/place/BARE+by+Kristen/@40.894809,-73.976772,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2f6fb1daad08d:0x5f51ba263038f799!8m2!3d40.894809!4d-73.976772!9m1!1b1!16s%2Fg%2F1yg6d443k?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300"
            >
              <FaGoogle className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="flex space-x-8 mb-4 md:mb-0">
          <div>
            <ul>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/appointment" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="font-bold">Address</h3>
              <p>40 West Palisade Ave. Suite 201 Englewood, NJ 07631</p>
              <p className="font-bold">(201) 888.2050</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; {currentYear} Bare by Kristen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
