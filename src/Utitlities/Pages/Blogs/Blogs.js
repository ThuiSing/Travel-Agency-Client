import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import SharedBlogs from "../Shared/SharedBlogs";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <SharedBlogs />
      <Footer />
    </div>
  );
};

export default Blogs;
