import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import profileImg from "../../Images/profile.png";

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  const { user, userLogOut } = useAuth();
  const [showBgOnScroll, setShowBgOnScroll] = useState(false);
  const location = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 10) {
      setShowBgOnScroll(true);
    } else {
      setShowBgOnScroll(false);
    }
  });

  const handleLogOut = () => {
    const confirm = window.confirm("are you sure to Log Out?");
    confirm && userLogOut();
  };
  return (
    <header
      className={`md:fixed top-0 w-full z-50 py-6 ${
        showBgOnScroll && "bg-slate-50 transition-all shadow-md"
      }   ${location.pathname === "/" ? "bg-transparent" : "bg-slate-50"} `}
    >
      <div className="sm:container mx-auto flex justify-between items-center">
        <div>
          <svg
            className="cursor-pointer"
            onClick={() => (sideMenu ? setSideMenu(false) : setSideMenu(true))}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 9.5H3M21 4.5H3M21 14.5H3M21 19.5H3" />
          </svg>
        </div>
        <div>
          <Link to="/">
            <h1 className="font-bold text-3xl">SMARTER TRAVELS</h1>
          </Link>
        </div>

        {user.email ? (
          <div className="flex items-center">
            <img
              className="w-10 rounded-full"
              src={user?.photoURL ? user.photoURL : profileImg}
              alt="user"
            />
          </div>
        ) : (
          <Link to="/login">
            <div className="cursor-pointer flex items-center " title="login">
              <h4 className="mr-2">Login</h4>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3" />
              </svg>
            </div>
          </Link>
        )}
      </div>
      {/* Main Side menu bar */}
      <div
        className={`bg-[#e1e0e075] h-screen absolute top-0 left-0 transform  ${
          sideMenu ? "w-screen -translate-x-0" : "w-0 -translate-x-44 "
        }  transition-all z-50`}
      >
        <div className="bg-white h-full lg:w-1/3 text-center py-6 relative">
          <div className="absolute right-3 top-2 cursor-pointer">
            <svg
              onClick={() => setSideMenu(false)}
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <h2 className="text-3xl font-bold">SMARTER TRAVELS</h2>
          <div className="flex flex-col space-y-2 mt-10">
            <NavLink
              to="/"
              className={(active) =>
                `  ${
                  active.isActive
                    ? "font-bold"
                    : "hover:tracking-wide transition-all"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blogs"
              className={(active) =>
                ` ${
                  active.isActive
                    ? "font-bold"
                    : "hover:tracking-wide transition-all"
                }`
              }
            >
              Blogs
            </NavLink>
            <NavLink
              to="/about"
              className={(active) =>
                ` ${
                  active.isActive
                    ? "font-bold"
                    : "hover:tracking-wide transition-all"
                }`
              }
            >
              About
            </NavLink>
            {user.email && (
              <NavLink
                to="/dashboard"
                className={(active) =>
                  ` ${
                    active.isActive
                      ? "font-bold"
                      : "hover:tracking-wide transition-all"
                  }`
                }
              >
                Dashboard
              </NavLink>
            )}
          </div>
          {user.email && (
            <div className="mt-6">
              <h2>{user?.displayName}</h2>
              <button
                className="bg-gray-300 w-24 p-2 rounded"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
