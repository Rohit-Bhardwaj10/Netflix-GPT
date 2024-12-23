import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center mx-auto left-0 right-0">
      <div className="w-full max-w-sm p-6 space-y-6 bg-black/85 rounded-md  max-h-fit absolute top-44">
        <h1 className="text-3xl font-semibold text-white">
          {isSignIn ? "Sign-In" : "Sign-Up"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignIn ? (
            ""
          ) : (
            <input
              type="text"
              placeholder="Enter Your Name..."
              className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
            />
          )}

          <input
            type="text"
            placeholder="Email or mobile number"
            className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 px-4 bg-zinc-800 border border-zinc-700 rounded-md text-white placeholder:text-zinc-400"
          />

          <button
            type="submit"
            className="w-full h-12 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {isSignIn ? <div className="text-center text-zinc-400">OR</div> : ""}

          {isSignIn ? (
            <button
              type="button"
              className="w-full h-12 bg-zinc-700 hover:bg-zinc-600 text-white rounded-md transition-colors"
            >
              Use a sign-in code
            </button>
          ) : (
            ""
          )}
          <div className="flex items-center space-x-2">
            {isSignIn ? (
              <input
                type="checkbox"
                id="remember"
                className="rounded border-zinc-700 text-red-600 focus:ring-red-600"
              />
            ) : (
              ""
            )}

            {isSignIn ? (
              <label htmlFor="remember" className="text-sm text-zinc-400">
                Remember me
              </label>
            ) : (
              ""
            )}
          </div>

          <a
            href="/forgot-password"
            className="block text-sm text-zinc-400 hover:underline"
          >
            {isSignIn ? "Forgot password?" : ""}
          </a>
        </form>

        <div className="text-zinc-400 text-sm flex gap-1">
          {isSignIn ? "New To Netflix ? " : "Already a member ? "}
          <button
            className="text-white cursor-pointer hover:underline "
            onClick={toggleForm}
          >
            {isSignIn ? "Sign up now" : "Sig-In"}
          </button>
        </div>

        <div className="text-xs text-zinc-500">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a
          bot.{" "}
          <a href="/learn-more" className="text-blue-500 hover:underline">
            Learn more
          </a>
          .
        </div>
      </div>
    </div>
  );
}
