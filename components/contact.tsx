import Head from "next/head";

const ContactUs = () => {
  return (
    <div className="pt-4 p-10 shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
      <Head>
        <title>
          Contact Kristen Dillon - Waxing Specialist in Bergen County, NJ
        </title>
        <meta
          name="description"
          content="Get in touch with Kristen Dillon, a waxing specialist in Bergen County, NJ. Schedule your Brazilian wax or other waxing services."
        />
      </Head>
      <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
        Contact Me
      </h2>
      <p className="text-black text-justify">
        If you would like to make a reservation for my services, please text or
        call
        <a href="tel:+12018882050" className="font-bold">
          {" "}
          (201) 888-2050
        </a>{" "}
        and include the following:
      </p>
      <ul className="text-black mt-4 ml-4 list-disc">
        <li>Your full name</li>
        <li>Service(s) you are interested in</li>
        <li>How you heard about me</li>
        <li>The date and time that works for you</li>
      </ul>
      <p className="text-black text-justify mt-4">
        I will get back to you shortly to confirm your request. Texting is the
        best way to reach me.
      </p>
    </div>
  );
};

export default ContactUs;
