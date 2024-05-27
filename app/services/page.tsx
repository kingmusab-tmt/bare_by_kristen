import Head from "next/head";
import ServiceItem from "./servicesitem";
import { WhyChooseMe } from "@/components";

const services = [
  { name: "Men's Brazilian waxing", price: 75 },
  { name: "Women's Brazilian Bikini waxing", price: 60 },
  { name: "Full Bikini", price: 55 },
  { name: "Bikini Line", price: 15 },
  { name: "Arm (Full)", price: 50 },
  { name: "Arm (Half)", price: 25 },
  { name: "Full Legs", price: 95 },
  { name: "Upper Legs (Thighs)", price: 65 },
  { name: "Lows Legs (Calves)", price: 45 },
  { name: "Butt", price: 30 },
  { name: "Stomach", price: 40 },
  { name: "Stomach (Strip)", price: 15 },
  { name: "Chest (Full)", price: 30 },
  { name: "Chest (Strip)", price: 15 },
  { name: "Back waxing (Full)", price: 70 },
  { name: "Back (Lower)", price: 25 },
  { name: "Shoulders", price: 20 },
  { name: "Underarms", price: 15 },
  { name: "Toes", price: 15 },
  { name: "Nose, Lip, Neck, Ears, Chin, Cheeks, Sideburns", price: 15 },
];

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>
          Expert Waxing Services in Bergen County (NJ) for men & women
        </title>
        <meta
          name="description"
          content="Bergen County's trusted waxing experts! I offer a variety of pain-free waxing services for men and women. Bikini, Brazilian etc"
        />
      </Head>
      <h1 className="text-3xl font-bold mb-8 mt-24 text-center text-red-500">
        Our Services
      </h1>
      <h2 className="text-center font-bold text-red-300">
        {" "}
        &quot;Achieve Perfectly Smooth Skin with Expert Waxing Services in
        Bergen County, New Jersey (NJ)&quot;
      </h2>
      <p className="text-justify m-4">
        Experience the ultimate in professional waxing services in New Jersey
        (NJ) tailored to meet your every need. As an expert I am dedicated to
        providing a comfortable and smooth waxing experience for both men and
        women. Whether you are looking for a full body treatment or targeted
        areas, I offer a wide range of services to help you achieve perfectly
        smooth skin. Trust me to deliver exceptional results, ensuring you feel
        confident and refreshed with every visit.{" "}
        <span className="text-red-600 font-bold">
          Please Find below the services and prices I Offer:
        </span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} name={service.name} price={service.price} />
        ))}
      </div>
      <WhyChooseMe />
    </div>
  );
};

export default Services;
