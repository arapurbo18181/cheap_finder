import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useApi } from "../context/ServerContext";

const Login = () => {
  const { login, checkAuthentication } = useApi();

  useEffect(() => {
    checkAuthentication();
  }, []);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-4">
        <h2 className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img src="./img/cheapfinder.png" alt="" className="w-28" />
        </h2>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
              Login
            </h1>
            <form
              onSubmit={login}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 ">
                Don't have a account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-blue-600 hover:underline"
                >
                  Signup here
                </Link>
              </p>
            </form>
            <div className="w-full flex justify-end">
              <Link
                to={"/home"}
                className="border px-4 py-2 w-fit rounded-lg bg-black text-white hover:bg-gray-700 transition-all duration-300"
              >
                {" "}
                Guest User{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
