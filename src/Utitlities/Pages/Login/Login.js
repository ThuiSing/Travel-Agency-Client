import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../Images/loginbg.jpg";
import googleIcon from "../../Images/google-logo-9824.webp";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { googleLogIn, logInUsingEmail, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.from || "/";

  const onSubmit = (data) => {
    logInUsingEmail(data.email, data.password, navigate, destination);
  };

  return (
    <div className="h-screen flex justify-between items-center bg-[#FFF9EF] px-5 ">
      <div className="w-1/2">
        <img src={img} alt="" />
      </div>
      <div className="w-1/2">
        <div className="text-center">
          <Link to="/">
            <h2 className="text-3xl mb-8 font-bold">SMARTER TRAVELS</h2>
          </Link>
        </div>
        <form
          className="w-96 mx-auto space-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="font-bold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-3 bg-input-box rounded outline-none"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="font-bold" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full p-3 bg-input-box rounded outline-none"
              {...register("password", { required: true })}
            />
          </div>
          <div>
            <h4 className="text-red-500 font-bold">{error}</h4>
            <input
              type="submit"
              className="text-input-box w-24 p-2 bg-neutral-900 rounded"
              value="Login"
            />
          </div>
          <h3>
            Don't have Account yet ?
            <Link to="/register" className="underline ml-2 text-cyan-900">
              Register Now
            </Link>
          </h3>
        </form>
        <div className="mt-8 text-center ">
          <h4 className="text-xl font-semibold">
            &#8211; &#8211; &#8211; Other's Ways to login&#8211; &#8211; &#8211;
          </h4>
          <div
            onClick={() => googleLogIn(navigate, destination)}
            className="bg-neutral-900 mt-5 rounded text-input-box w-96 mx-auto p-2 flex items-center justify-center cursor-pointer"
          >
            <img width="35" src={googleIcon} alt="" />
            <h3 className="ml-4">Login using Google</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

// {errors.exampleRequired && <span>This field is required</span>}
