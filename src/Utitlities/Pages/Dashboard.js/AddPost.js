import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      900,
      500,
      "png",
      60,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

const dataURIToBlob = (dataURI) => {
  const splitDataURI = dataURI.split(",");
  const byteString =
    splitDataURI[0].indexOf("base64") >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(":")[1].split(";")[0];
  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], { type: mimeString });
};

const AddPost = () => {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const onSubmit = async (data) => {
    const file = data.img[0];
    const image = await resizeFile(file);
    const newFile = dataURIToBlob(image);

    const pImage = user?.photoURL
      ? user.photoURL
      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", newFile);
    formData.append("description", data.description);
    formData.append("email", user.email);
    formData.append("author", user.displayName);
    formData.append("authorImg", pImage);
    formData.append("date", data.date);
    formData.append("status", "pending");

    //post
    axios
      .post("https://serene-ocean-67383.herokuapp.com/blogs", formData)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          alert("product added");
          setMessage("successfully added product");
          reset("");
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl mb-5 font-semibold">
        Post your travel experience
      </h2>
      {message.length > 1 && (
        <h3 className="bg-green-300 p-2 flex items-center">
          <svg
            className="mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          {message}
        </h3>
      )}

      <form className="mt-2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("title", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="img">Image</label>
          <input
            id="img"
            type="file"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("img", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("date", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            rows="10"
            id="description"
            type="text"
            className="border p-4 bg-gray-100 rounded w-full outline-none"
            {...register("description", { required: true })}
          />
          {errors.exampleRequired && <span>This field is required</span>}
        </div>

        <input
          className="bg-neutral-700 px-12 py-2 text-white"
          type="submit"
          value="Post"
        />
      </form>
    </div>
  );
};

export default AddPost;
