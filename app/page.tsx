import {
  Carousel,
  GoogleReview,
  QualityServices,
  Note,
  StarRatingDisplay,
} from "../components";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Note />
      <StarRatingDisplay />
      <GoogleReview />
      <QualityServices />
    </main>
  );
}
