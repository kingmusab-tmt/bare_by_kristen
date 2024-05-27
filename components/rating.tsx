import { FaStar } from "react-icons/fa";

interface StarRatingDisplay {
  rating: number;
}

const StarRatingDisplay = ({ rating = 5, totalStars = 5 }) => {
  return (
    <div className="flex space-x-1 justify-center">
      {[...Array(totalStars)].map((_, index) => {
        const starRating = index + 1;
        return (
          <FaStar
            key={starRating}
            className={`w-6 h-6 ${
              starRating <= rating ? "text-yellow-400" : "text-gray-400"
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarRatingDisplay;
