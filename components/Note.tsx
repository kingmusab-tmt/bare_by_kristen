import Link from "next/link";
import Image from "next/image";
import logo from "../public/images/mainLogo.webp";
const Note = () => {
  return (
    <div className="m-7">
      <h2 className="mt-6 mb-4 text-red-600 text-center font-bold text-2xl">
        {" "}
        BEST BRAZILIAN & BODY WAXING FOR WOMEN AND MEN
      </h2>
      <p className="text-justify">
        <span className="text-2xl font-extrabold text-red-600">
          Bare by Kristen
        </span>{" "}
        offers premier Brazilian and body waxing services that leave you feeling{" "}
        <em>confident, smooth, and perfectly groomed</em>. I am a true{" "}
        <b className="text-red-600">EXPERT!</b>, I am dedicated to providing
        exceptional hair removal experiences in a comfortable and welcoming
        environment. With meticulous attention to detail and the use of
        high-quality products, I ensure a pain-free and efficient waxing
        process. Beyond waxing, I also provide an amazing skin care regiment
        that will help to avoid ingrown hairs. Whether you’re looking for a{" "}
        <b className="text-red-500">
          flawless bikini line, Brazilian, half, or full-body wax
        </b>
        , as a skilled professional, I am here to deliver exceptional results
        that exceed your expectations. Experience the difference at Bare by
        Kristen and discover why I am the go-to destination for unparalleled
        waxing services. I am the best around and you will be very happy here.{" "}
        <Link href="/appointment" className="text-blue-500 font-bold">
          <span>Don’t hesitate, book your Appointment! now</span>
        </Link>
      </p>
    </div>
  );
};

export default Note;
