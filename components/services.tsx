import Head from "next/head";
import ServiceItem from "../components/servicesitem";
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
    <div className="mx-auto px-4 mb-10">
      <h1 className="text-3xl font-bold mb-8 mt-10 text-center text-red-500">
        My Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} name={service.name} price={service.price} />
        ))}
      </div>
    </div>
  );
};

export default Services;
