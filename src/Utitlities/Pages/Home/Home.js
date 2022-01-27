import React from "react";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import SharedBlogs from "../Shared/SharedBlogs";

const Home = () => {
  const { user } = useAuth();
  // console.log(user);
  return (
    <div>
      <Navbar />
      <SharedBlogs />
      <Footer />
    </div>
  );
};

export default Home;
