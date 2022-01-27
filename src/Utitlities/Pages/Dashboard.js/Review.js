import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Rating from "react-rating";
import useAuth from "../../Hooks/useAuth";

const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.rating = rating;
    // console.log(data);
    data.userImg = user.photoURL
      ? user.photoURL
      : "https://cdn-icons-png.flaticon.com/512/64/64572.png";

    axios
      .post("https://serene-ocean-67383.herokuapp.com/reviews", data)
      .then((res) => {
        console.log(res);
        if (res.data.insertedId) {
          alert("Review Submitted Successfully");
          reset("");
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-medium mb-5">Enter Your Review :</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2 space-y-5">
        <div>
          <input
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            defaultValue={user.displayName}
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-600 fot-medium">Name is Required </span>
          )}
        </div>
        <div>
          <input
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("companyName", { required: true })}
            placeholder="Enter you Company Name"
          />
          {errors.companyName && (
            <span className="text-red-600 fot-medium">
              Company is Required{" "}
            </span>
          )}
        </div>
        <div className="flex items-center ">
          <h4 className="mr-3 mb-2"> Rate : </h4>
          <Rating
            onClick={(value) => {
              setRating(value);
            }}
            initialRating={rating}
            className="text-yellow-400 text-xl"
            emptySymbol={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            }
            fullSymbol={
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="star"
                className="svg-inline--fa fa-star fa-w-18"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
                ></path>
              </svg>
            }
          />
        </div>
        <div>
          <textarea
            rows="8"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("textarea", { required: true })}
            placeholder="Write Your Review Here......"
          />
          {errors.textarea && (
            <span className="text-red-800 fot-medium">
              Textarea is Required
            </span>
          )}
        </div>
        <input
          className="bg-gray-800 text-white px-8 py-3 rounded cursor-pointer"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Review;
