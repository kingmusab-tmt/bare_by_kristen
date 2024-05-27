"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingDisplay from "./rating";
import Link from "next/link";

// Define review interface
interface mockReviews {
  id: number;
  name: string;
  rating: number;
  text: string;
}

const GoogleReview = () => {
  const [reviews, setReviews] = useState<mockReviews[]>([]);

  useEffect(() => {
    // Mock fetching reviews
    const fetchReviews = async () => {
      const mockReviews = [
        {
          id: 1,
          name: "Emily Mintz",
          rating: 5,
          text: "Kristen was awesome!! She made the experience very comfortable and did a great job. She also provided really good after care instructions. I will definitely be using her for my next appointment",
        },
        {
          id: 2,
          name: "Genesis Lopez",
          rating: 5,
          text: "Finally found a waxing place in NJ! I moved to NJ from NYC about 2 years ago and I couldn’t find something nearby or good until I found this place. The place is super dope and clean. This will be my go to now!",
        },
        {
          id: 3,
          name: "Victoria Rousseau",
          rating: 5,
          text: "Best wax experience! I was finished in less than 30 minutes. Kristen was quick and informative about aftercare process. Definitely recommend to book with her.",
        },
        {
          id: 4,
          name: "Kelly",
          rating: 5,
          text: "The best wax experience ever, I will definitely be returning. I came here for the first time after a friend recommended Kristen raving about the service. I decided to give waxing a shot after shaving for my entire life and can gladly say I’ll never go back to shaving. The wax was so quick and Kristen talked me through the whole process, a great service 10/10 recommend.",
        },
        {
          id: 5,
          name: "Pablo Rodriguez",
          rating: 5,
          text: "I went there for the first time and it was a great experience. Nice atmosphere. Kristen make me feel comfortable and was quick and painless. I will definitely go back and recommend to anybody. 5 stars over all.",
        },
        {
          id: 6,
          name: "Andy 369",
          rating: 5,
          text: "Professional, fast... and awesome aura in the room with the decor.",
        },
        {
          id: 7,
          name: "Imelda Simon",
          rating: 5,
          text: "Professional and knowledgeable wax expert!",
        },
        {
          id: 8,
          name: "Tamara Cooper",
          rating: 5,
          text: "This was the best wax experience that I’ve ever had. Kristen was very nice and made the experience fast and easy. And the studio is a whole vibe! It’s so clean and the decor is top notch. Kristen’s follow up is second to none. She educated me on hair and skin during my appointment and also emailed me several product recommendations and a skincare regimen to keep my skin right! I’m so glad Google led me to Kristen… I will definitely be a client for the foreseeable future and I will be recommending everyone else as well!",
        },
        {
          id: 9,
          name: "AHU GUNERI",
          rating: 5,
          text: "I found this place by google map search and Visited her for all the great reviews!! And another one from meshe gave me outstanding service, studio is very clean! scheduling is very professional! Brazilian wax was the most painless one I’ve ever had and it was quick! Bare By Kristen is my new place %100!",
        },
        {
          id: 10,
          name: "Kim Velazquez",
          rating: 5,
          text: "I went when I was 9mo pregnant lol Kristen was very accommodating and efficient! Definitely the quickest brazilian i’ve ever had! 10/10 would recommend",
        },
        {
          id: 11,
          name: "Ivy Mae Isip",
          rating: 4,
          text: "When i went in here i told her this is my first time doing the brazillian wax and she did good and im definitely going back in here!!",
        },
        {
          id: 12,
          autho: "Katherine Areche",
          rating: 5,
          text: "Amazing experience when i first got waxed. She’s very sweet and nice. Literally the best hospitality i’ve ever came across. She definitely made me feel very comfortable.",
        },
        {
          id: 13,
          name: "Glorian Cancel-Reyes",
          rating: 5,
          text: "My first time visiting I was super nervous but Kristen was super professional and made me feel comfortable. She provided all the information I needed walking out of that appointment for after care and she has me as a forever client!! Now I can’t wait until my next appointment!",
        },
        {
          id: 14,
          name: "Danielle Desser",
          rating: 4,
          text: "This was my first time getting a bikini wax. Truthfully I was TERRIFIED as I’ve heard some horror stories from friends. When I tell you Kristen made the process so easy, painless and actually enjoyable I am not kidding. She is incredibly responsive when you contact her, follows up after you’re done to make sure you’re doing okay, AND the actual waxing was quick and painless. I cannot sing her praises enough! Get waxed here!",
        },
        {
          id: 15,
          name: "Jay",
          rating: 5,
          text: "My experience with Kristen was exceptional. She was very informative about her services and provided skin care recommendations to get the best results as possible. She even followed up with me afterwards, to make sure my skin was doing well after my wax. I would definitely recommend to any looking for professional wax services.",
        },
        {
          id: 16,
          name: "Scott Riehl",
          rating: 4,
          text: "Kristen is fantastic! She truly is a professional at what she does. Even the ambience of her studio is professional & relaxing. Truly was a 5 Star Spa Experience! Thanks, Kristen! I look forward to my next treatment as well as referring you to everyone I know!",
        },
        {
          id: 17,
          name: "Maria Candelier",
          rating: 4,
          text: "I moved from NYC to New Jersey a few months ago. I have been waxing for quite some time already, but had to find a place closer to my new home. I found Kristen on google, and of course after reading the reviews I decided to try her out. I was not disappointed! The wax she uses is different from any other I have tried. It was the most painless experience! She also made me feel comfortable and welcomed.",
        },
        {
          id: 18,
          name: "Allie Calhoun",
          rating: 4,
          text: "She was amazing. Very professional, her studio was clean (she even makes sure you take off your shoes at the door), and she was personable. This Brazilian wax didn’t even hurt and I had 8 months of growth (recently gave birth). I’ll be back in 4 weeks. Don’t think about if you should try Kristen. JUST DO IT!",
        },
        {
          id: 19,
          name: "Jasmine Crespo",
          rating: 5,
          text: "Kristen was right on point with my service. The studio was clean and very well kept with so much good vibe and energy. I’ve been getting wax for years now and she is definitely the best I’ve ever had. It can be a little intimidating, to go to a new person but as soon as I walked in all of that was left at the door. She was also very fast and detailed. Loved it.",
        },
        {
          id: 20,
          name: "Stephanie Valverde",
          rating: 5,
          text: "Honestly I’m so happy I went with here! I have never had a Brazilian wax before and was so extremely scared. Kristen made me feel very comfortable and I didn’t feel pain at all! She was so extremely quick and made the entire experience a breeze! AND she provides aftercare information as well 🙌🏼 Definitely would recommend! I can’t wait until my next appointment!",
        },
      ];
      setReviews(mockReviews);
    };

    fetchReviews();
  }, []);

  // Carousel settings
  const settings = {
    infinite: true, // Loop through reviews
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1, // Scroll by one review
    autoplay: true, // Enable automatic sliding
    autoplaySpeed: 3000, // Delay between automatic slides (3 seconds)
    speed: 500, // Transition speed for slides (0.5 seconds)
    swipe: true, // Enable swipe gestures for navigation
  };

  return (
    <div className="container mx-auto p-4">
      <p className="text-center font-bold mt-0 mb-2 text-red-500">
        972{" "}
        <Link href="https://www.google.com/maps/place/BARE+by+Kristen/@40.894809,-73.976772,17z/data=!3m1!4b1!4m8!3m7!1s0x89c2f6fb1daad08d:0x5f51ba263038f799!8m2!3d40.894809!4d-73.976772!9m1!1b1!16s%2Fg%2F1yg6d443k?entry=ttu">
          Google reviews
        </Link>{" "}
      </p>
      <h2 className="text-2xl font-bold mb-4 text-center">Google Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div
            key={review?.id}
            className="p-4 bg-white rounded shadow-lg border border-gray-200"
          >
            <blockquote className="text-gray-600 italic mb-2">
              {review?.text}
            </blockquote>
            <div className="flex items-center mb-2">
              <StarRatingDisplay rating={review.rating} />
              <span className="ml-2 text-yellow-400 font-bold">
                {review?.rating}
              </span>
            </div>
            <div className="text-right text-gray-500 font-semibold">
              - {review?.name}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default GoogleReview;
