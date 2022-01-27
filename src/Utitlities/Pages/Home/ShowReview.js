import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";

const ShowReview = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/reviews`).then((res) => {
      setReviews(res.data);
    });
  }, []);
  console.log(reviews);
  return (
    <div className="container mx-auto py-20 overflow-hidden">
      <div className="text-center">
        <h2 className="text-center text-2xl border-b-2 border-black inline-block mb-8 font-semibold">
          User Reviews
        </h2>
      </div>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review._id} className="p-1">
            <div className="shadow-lg p-5">
              <div className="flex items-center">
                <img
                  className="w-16 rounded-full"
                  src={review.userImg}
                  alt=""
                />
                <div className="ml-4">
                  <h4 className="font-bold">{review.name}</h4>
                  <h4 className="text-neutral-600 font-semibold">
                    {review.companyName}
                  </h4>
                </div>
              </div>
              <p className="mt-5 px-5 text-gray-500">{review.textarea}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ShowReview;
