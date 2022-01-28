import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="w-full overflow-hidden ">
      <Slider {...settings}>
        <div className="relative ">
          <img
            className="w-full"
            src="https://images.pexels.com/photos/4275885/pexels-photo-4275885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=940"
            alt=""
          />
          <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center space-y-6">
              <h3 className="md:text-6xl text-[#dbbec0] font-bold uppercase font-serif ">
                Experience epic beauty
              </h3>
              <h3 className="md:text-6xl text-[#dbbec0] font-bold uppercase font-serif">
                In
              </h3>
              <h3 className="md:text-6xl text-[#dbbec0] font-bold uppercase font-serif">
                Forest
              </h3>
            </div>
          </div>
        </div>
        <div className="relative ">
          <img
            className="w-full "
            src="https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=550&w=940"
            alt=""
          />
          <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center space-y-6">
              <h3 className="md:text-6xl text-[#005c57] font-bold uppercase font-serif ">
                Deep inside the ocean
              </h3>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full "
            src="https://images.pexels.com/photos/2676589/pexels-photo-2676589.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=550&w=940"
            alt=""
          />
          <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-center space-y-6">
              <h3 className="md:text-6xl text-[#fcc866] font-bold uppercase font-serif ">
                Visit amazing place like
              </h3>
              <h3 className="md:text-6xl text-white font-bold uppercase font-serif ">
                Rome
              </h3>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
