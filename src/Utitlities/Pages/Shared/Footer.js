import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white pt-16 px-3 md:px-0">
      <div className="container mx-auto h-96 flex items-center justify-center">
        <div className="md:grid grid-cols-4 gap-8 ">
          <div>
            <Link to="/">
              <h2>LOGO</h2>
            </Link>
            <h4 className="my-4 text-md text-yellow-300 font-medium mt-8">
              Call Us :
              <a className="text-white ml-2" href="tel:015-813-11313">
                015 813 11313
              </a>
            </h4>
            <h5 className="text-gray-300">
              Address: No 40 Bari Street 133/ Newyork City,ny United states
            </h5>
          </div>
          <div>
            <h3 className="text-3xl font-semibold uppercase">Quick Links</h3>
            <div className="mt-5">
              <Link to="/">
                <h4>Home</h4>
              </Link>
              <Link to="/">
                <h4 className="my-3">Blogs</h4>
              </Link>
              <Link to="/">
                <h4>About</h4>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold uppercase ">Category</h3>
            <div className="mt-5">
              <Link to="/">
                <h4>Travel</h4>
              </Link>
              <Link to="/">
                <h4 className="my-3">Solo Trip</h4>
              </Link>
              <Link to="/">
                <h4>Family Trip</h4>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold ">Follow Us</h3>
            <div className="mt-5">
              <Link to="/">
                <h4>Facebook</h4>
              </Link>
              <Link to="/">
                <h4 className="my-3">Twitter</h4>
              </Link>
              <Link to="/">
                <h4>Instagram</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-2 text-center ">
        <h4 className="py-6">&copy; {Year} - All Right Reserved</h4>
      </div>
    </footer>
  );
};

export default Footer;
