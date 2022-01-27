import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleRequestedPost from "./SingleRequestedPost";

const RequestedPosts = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get(`https://serene-ocean-67383.herokuapp.com/blogs/status`)
      .then((res) => setBlogs(res.data));
  }, []);

  const handleApprove = (id) => {
    const confirm = window.confirm("Are you sure to approve it?");
    confirm &&
      axios
        .put(`http://localhost:5000/blogs/update-status/${id}`)
        .then((res) => {
          if (res.data.matchedCount > 0) {
            alert("Successfully Approved");
            const filter = blogs.filter((blog) => blog._id !== id);
            setBlogs(filter);
          }
        });
  };
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
            {blogs.length <= 0 ? (
              <tr className="h-8">
                <td className="text-red-800 font-bold">
                  No Requested blog Found
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <SingleRequestedPost
                  key={blog._id}
                  blog={blog}
                  handleApprove={handleApprove}
                />
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedPosts;
