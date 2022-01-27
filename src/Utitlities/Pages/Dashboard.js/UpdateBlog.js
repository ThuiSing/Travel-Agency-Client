import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const UpdateBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  //   console.log(blog);
  useEffect(() => {
    let cancel = false;

    setLoader(true);
    axios
      .get(`https://serene-ocean-67383.herokuapp.com/blogs/edit/${id}`)
      .then((res) => {
        if (cancel) return;

        setBlog(res.data);
        setLoader(false);
      })
      .finally(() => setLoader(false));

    return () => {
      cancel = true;
    };
  }, [id]);

  const onSubmit = async (data) => {
    // console.log(data);
    const file = data.img[0];

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("image", file);
    formData.append("description", data.description);
    formData.append("email", blog.email);
    formData.append("author", blog.author);
    formData.append("authorImg", blog.authorImg);
    formData.append("date", blog.date);
    formData.append("status", blog.status);
    axios
      .put(`https://serene-ocean-67383.herokuapp.com/blogs/${id}`, formData)
      .then((res) => {
        // console.log(res);
        if (res.data.modifiedCount > 0) {
          alert("changed successfully");
        }
      });
  };

  return (
    <div>
      <div className="flex  items-center mb-6 ">
        <svg
          onClick={() => navigate(-1)}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-5 cursor-pointer hover:text-green-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>

        <h2 className="text-3xl font-medium ">Update Blogs</h2>
      </div>

      {loader ? (
        <div className="w-full flex justify-center items-center">
          <img
            className="w-20"
            src="https://i0.wp.com/www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row  justify-between">
          <div className="md:w-1/2 overflow-hidden">
            <img src={`data:image/jpeg;base64,${blog?.img}`} alt={blog.title} />
            <div className="mt-4">
              <h4 className="text-3xl font-medium">Title: {blog.title}</h4>
              <h5>By: {blog.author}</h5>
              <h4>{blog.description}</h4>
            </div>
          </div>
          <div className="md:w-1/2 ml-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  className="w-full p-3"
                  {...register("title", { required: true })}
                  placeholder="Enter Title"
                />
              </div>
              <div>
                <input
                  type="file"
                  className="w-full bg-white p-3"
                  {...register("img", { required: true })}
                />
              </div>

              <div>
                <textarea
                  rows="8"
                  className="w-full p-3"
                  {...register("description", { required: true })}
                  placeholder="Enter Description here"
                />
              </div>

              <input
                className="px-6 py-2 bg-neutral-800 text-white cursor-pointer hover:text-neutral-800 hover:bg-white transition-all"
                type="submit"
                value="Update"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateBlog;
