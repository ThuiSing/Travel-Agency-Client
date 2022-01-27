import React from "react";
import { useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const data = {
  id: 1,
  title: "Journey to Swizerland",
  img: "https://www.mickeyshannon.com/photos/switzerland-photography.jpg",
  status: "approved",
  date: "10/02/2020",
  description:
    "An adventurous moment, mixed with utter excitement; after 25 years of having the infamous Iron Ore Train on my bucket list, I finally parked my car in front of one of the sheds in a dusty side street in the outskirts of Nouadhibou, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Choum,u, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Chouu, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Chou approximately 500 km east of Nouadhibou. I actually found the place by luck, I didn't ask anyone for directions, I just drove my car up and down the peninsula of Nouadhibou. MR. RANSOM I wanted to get an overview of one of the most dilapidated cities I had ever seen. This is where Iron Ore Train ends, one of the longest trains in the world, which makes Nouadhibou the most important area in poor Mauritania.",
  author: "Thui Sing",
  authorImg: "http://www.schintudesign.com/envato/exodus/assets/img/user1.jpg",
  email: "thuising@gmail.com",
};

const SingleBlogs = () => {
  const { id } = useParams();
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div className="h-96 overflow-hidden flex justify-center items-end relative">
          <img className="w-full" src={data.img} alt="" />
          <div className="absolute top-0 left-0 w-full h-full bg-[#363636bd] flex justify-center items-center">
            <h2 className="text-white text-2xl border-b-2">The Blog</h2>
          </div>
        </div>
        <div className="absolute -bottom-10 left-[47%] z-10">
          <img className="rounded-full w-24 " src={data.authorImg} alt="" />
        </div>
      </div>
      <div className="container my-24 mx-auto">
        <div className="text-center">
          <h3 className="text-5xl font-bold">{data.title}</h3>
          <p className="mt-3 font-semibold">
            By: {data.author} || {data.date}
          </p>
        </div>
        <div className="mt-10 md:px-44">
          <p>{data.description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleBlogs;
