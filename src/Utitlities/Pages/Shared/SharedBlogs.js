import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SharedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("https://serene-ocean-67383.herokuapp.com/blogs").then((res) => {
      // console.log("hello");
      setBlogs(res.data);
    });
  }, []);
  return (
    <div className="container mx-auto py-12">
      <div className="text-center pb-10">
        <h3 className="text-2xl border-b-2 border-black inline-block font-semibold">
          BLOGS
        </h3>
      </div>
      <div className="grid grid-cols-3 gap-8 ">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-xl overflow-hidden shadow">
            <img
              className="w-full"
              src={`data:image/jpeg;base64,${blog?.img}`}
              alt={blog.title}
            />
            <div className="px-2 py-5  space-y-1">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <h2 className=""> Date : {blog.date}</h2>
              <h2 className=""> By: {blog.author}</h2>
              <Link to={`/blogs/${blog._id}`}>
                <button className="bg-gray-300 px-3">read blog..</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharedBlogs;
