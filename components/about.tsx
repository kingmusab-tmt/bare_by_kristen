import Image from "next/image";
import profilePic from "../public/images/kristen.jpeg"; 
import { Flipcard } from "@/components";
import Head from "next/head";

const AboutMe = () => {
  return (
    <div className="mb-10 p-8 shadow-lg transform transition duration-500 hover:scale-105">
      <div className="flex flex-col items-center space-x-4">
        <div className="w-52 h-48 relative rounded-full overflow-hidden border-4 border-red-600 shadow-md">
          <Image
            src={profilePic}
            layout="fill"
            objectFit="fill"
            alt="Kristen Dillon Waxing Expert"
          />
        </div>
        <div>
          <p className="mb-6 text-center font-bold text-black">
            Kristen Dillon
          </p>
          <h2 className="text-3xl font-bold text-red-600">About Me</h2>
          <p className="text-black text-justify mt-4">
            <span className="text-3xl font-extrabold">T</span>he licensed
            aesthetician behind <b className="text-red-500">BARE by Kristen</b>{" "}
            specializes in making skin hairless and satin-smooth. I remove
            unwanted strands of hair with hard wax and gel wax that’s amazing
            for sensitive skin. My wax is free of plastic-based fillers,
            preventing issues such as ingrown hairs. I also enforce a high
            standard of cleanliness, using a brand-new wax stick each time I
            touched a client’s skin. I am extremely thorough and as painless as
            it comes! Although I can skillfully wax hair from arms, legs, chest,
            back, and other regions of the body, I specialize in the Brazilian
            bikini wax. I am a true <b>EXPERT!</b> By far, this will be the BEST
            Brazilian waxing experience of your lifetime!! <b>BEST</b> Brazilian
            Waxing Bergen County, NJ!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
