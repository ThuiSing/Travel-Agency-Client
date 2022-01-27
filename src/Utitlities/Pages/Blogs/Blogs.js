import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import SharedBlogs from "../Shared/SharedBlogs";

const Blogs = () => {
  return (
    <>
      <Navbar />
      <div className="md:mt-20">
        <SharedBlogs />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
