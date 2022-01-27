import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleRequestedPost from "./SingleRequestedPost";

const RequestedPosts = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/blogs/status`)
      .then((res) => setBlogs(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl   font-medium mb-5">All Requested Blogs :</h1>
      <div className="overflow-x-scroll md:overflow-x-hidden">
        <table className=" table-auto bg-white w-full shadow-md ">
          <thead className="h-10 ">
            <tr className="bg-neutral-800 text-white border-2 border-white ">
              <th className="border-2 border-white">Email</th>
              <th className="border-2 border-white">Blog Title</th>
              <th className="border-2 border-white">Requested Date</th>
              <th className="border-2 border-white">Status</th>
              <th className="border-2 border-white">Action</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {blogs.map((blog) => (
              <SingleRequestedPost key={blog._id} blog={blog} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedPosts;
