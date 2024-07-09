import About from "@/components/about";
import {
  Carousel,
  GoogleReview,
  StarRatingDisplay,
  WhyChooseMe,
} from "../components";
import Services from "@/components/services";
import ContactUs from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Carousel />
      <About />
      <WhyChooseMe />
      <Services />
      <StarRatingDisplay />
      <GoogleReview />
      <ContactUs />
    </main>
  );
}
