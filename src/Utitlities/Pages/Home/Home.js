import React from "react";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import SharedBlogs from "../Shared/SharedBlogs";
import Banner from "./Banner";
import ShowReview from "./ShowReview";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <SharedBlogs />
      <ShowReview />
      <Footer />
    </>
  );
};

export default Home;
