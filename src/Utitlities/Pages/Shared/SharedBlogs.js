import React from "react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Journey to Swizerland",
    img: "https://c4.wallpaperflare.com/wallpaper/550/431/578/time-lapse-photo-of-falls-beside-two-mountain-wallpaper-preview.jpg",
    status: "approved",
    date: "10/02/2020",
    description:
      "An adventurous moment, mixed with utter excitement; after 25 years of having the infamous Iron Ore Train on my bucket list, I finally parked my car in front of one of the sheds in a dusty side street in the outskirts of Nouadhibou, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Choum, approximately 500 km east of Nouadhibou. I actually found the place by luck, I didn't ask anyone for directions, I just drove my car up and down the peninsula of Nouadhibou. MR. RANSOM I wanted to get an overview of one of the most dilapidated cities I had ever seen. This is where Iron Ore Train ends, one of the longest trains in the world, which makes Nouadhibou the most important area in poor Mauritania.",
    author: "Thui Sing",
    email: "thuising@gmail.com",
  },
  {
    id: 2,
    title: "journey to Swizerland",
    img: "https://www.mickeyshannon.com/photos/switzerland-photography.jpg",
    status: "approved",
    date: "10/02/2020",
    description:
      "An adventurous moment, mixed with utter excitement; after 25 years of having the infamous Iron Ore Train on my bucket list, I finally parked my car in front of one of the sheds in a dusty side street in the outskirts of Nouadhibou, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Choum, approximately 500 km east of Nouadhibou. I actually found the place by luck, I didn't ask anyone for directions, I just drove my car up and down the peninsula of Nouadhibou. MR. RANSOM I wanted to get an overview of one of the most dilapidated cities I had ever seen. This is where Iron Ore Train ends, one of the longest trains in the world, which makes Nouadhibou the most important area in poor Mauritania.",
    author: "Thui Sing",
    email: "thuising@gmail.com",
  },
  {
    id: 3,
    title: "journey to Swizerland",
    img: "https://www.mickeyshannon.com/photos/switzerland-photography.jpg",
    status: "approved",
    date: "10/02/2020",
    description:
      "An adventurous moment, mixed with utter excitement; after 25 years of having the infamous Iron Ore Train on my bucket list, I finally parked my car in front of one of the sheds in a dusty side street in the outskirts of Nouadhibou, where the responsible officials spend their working hours. So here I was, walking into the shed of the Mauritanian Railway Authorities to enquire about the possibility to transport my car and myself to Choum, approximately 500 km east of Nouadhibou. I actually found the place by luck, I didn't ask anyone for directions, I just drove my car up and down the peninsula of Nouadhibou. MR. RANSOM I wanted to get an overview of one of the most dilapidated cities I had ever seen. This is where Iron Ore Train ends, one of the longest trains in the world, which makes Nouadhibou the most important area in poor Mauritania.",
    author: "Thui Sing",
    email: "thuising@gmail.com",
  },
];

const SharedBlogs = () => {
  return (
    <div className="container mx-auto py-12">
      <h3>Blogs</h3>
      <div className="grid grid-cols-3 gap-8 ">
        {data.map((blog) => (
          <div key={blog.id} className="rounded-xl overflow-hidden shadow">
            <img className="h-64 w-full" src={blog.img} alt="" />
            <div className="px-2 py-5  space-y-1">
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <h2 className=""> Date : {blog.date}</h2>
              <h2 className=""> By: {blog.author}</h2>
              <Link to={`/blogs/${blog.id}`}>
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
