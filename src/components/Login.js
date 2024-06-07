import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignedIn, setIsSignedIN] = useState(true);

  const toggleSignInForm = () => {
    setIsSignedIN(!isSignedIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-24 mx-auto right-0 left-0 rounded-xl text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignedIn ? "Sign In" : "Sign up"}
        </h1>
        {!isSignedIn && (
          <input
            type="text"
            placeholder="Full-Name"
            className="p-4 my-4 w-full rounded-sm bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email-address"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <input
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full rounded-sm bg-gray-700"
        />
        <button className="w-full p-4 my-4 bg-red-700 rounded-sm">
          {isSignedIn ? "Sign In" : "Sign up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignedIn
            ? "New to Netflix? Sign up Now"
            : "Already? registered Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;