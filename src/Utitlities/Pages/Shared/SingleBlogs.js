import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SingleBlogs = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    axios
      .get(`https://serene-ocean-67383.herokuapp.com/blogs/edit/${id}`)
      .then((res) => {
        // console.log("hello");
        setBlog(res.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative md:mt-24 ">
        <div className="h-96 overflow-hidden flex justify-center items-end relative">
          <img
            className="w-full"
            src={`data:image/jpeg;base64,${blog?.img}`}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#363636bd] flex justify-center items-center">
            <h2 className="text-white text-2xl border-b-2">The Blog</h2>
          </div>
        </div>
        <div className="absolute -bottom-10 left-[47%] z-10">
          <img className="rounded-full w-24 " src={blog.authorImg} alt="" />
        </div>
      </div>
      <div className="container my-24 mx-auto">
        <div className="text-center">
          <h3 className="text-5xl font-bold">{blog.title}</h3>
          <p className="mt-3 font-semibold">
            By: {blog.author} || {blog.date}
          </p>
        </div>
        <div className="mt-10 md:px-44">
          <p>{blog.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogs;
