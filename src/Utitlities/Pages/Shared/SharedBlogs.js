import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SharedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    setLoader(true);
    axios
      .get(
        `https://serene-ocean-67383.herokuapp.com/blogs/status?page=${selectedPage}&&showPages=${limit}`
      )
      .then((res) => {
        setBlogs(res.data.result);
        const count = res.data.count;
        const showPage = Math.ceil(count / limit);
        setPage(showPage);

        setLoader(false);
      })
      .finally(() => setLoader(false));
  }, []);
  return (
    <div className="container mx-auto py-12">
      <div className="text-center pb-10">
        <h3 className="text-2xl border-b-2 border-black inline-block font-semibold">
          BLOGS
        </h3>
      </div>
      {loader ? (
        <div className="w-full flex justify-center items-center">
          <img
            className="w-24"
            src="https://i0.wp.com/www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="rounded-xl overflow-hidden shadow-md"
            >
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
                  <span className="mt-5 hover:text-gray-500 hover:tracking-wide	transition-all hover:font-semibold">
                    Read More...
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="px-4 py-3 flex items-center justify-center border-t border-gray-200 sm:px-6">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px "
            aria-label="Pagination"
          >
            {[...Array(page).keys()].map((num) => (
              <button
                key={num}
                className={`bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium
                  ${selectedPage === num ? "selected bg-neutral-300" : ""}
                `}
                onClick={() => setSelectedPage(num)}
              >
                {num + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SharedBlogs;
