import React from "react";

const Login = () => {
  return (
      <div>
        <img
          className="absolute h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b9448d14-5983-4ffc-a4d6-e22223108466/web/IN-en-20260302-TRIFECTA-perspective_1ef91182-c674-4632-9bec-d185993ab154_large.jpg"
          alt="background"
        />

        <div className="p-12 absolute bg-black/70 text-stone-50 w-full sm:w-6/12 md:w-4/12 mx-auto my-45 left-0 right-0 rounded-lg">
          <form action="" className="flex flex-col items-center">
            <h1 className="text-white text-3xl m-2 w-full text-left font-bold">
              Sign In
            </h1>
            <input
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="text"
              placeholder="Email"
            />
            <input
              className="m-4 p-3 bg-gray-700 w-full rounded-md"
              type="password"
              placeholder="Password"
            />
            <button className="bg-red-700 m-4 p-3 w-full rounded-lg">
              Sign In
            </button>
            <p className="py-4">New to Netflix? Sign up now</p>
          </form>
        </div>
      </div>
  );
};

export default Login;
