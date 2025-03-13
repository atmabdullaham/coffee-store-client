import React from "react";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    alert("Sign In Clicked! (Replace with actual authentication)");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="card w-full max-w-md shadow-lg bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 font-rancho">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="label text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="label text-gray-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-sm" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="hover:underline text-blue-500">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-blue-600"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">Or continue with</div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="btn btn-outline btn-sm">
            <img
              src="https://img.icons8.com/color/24/google-logo.png"
              alt="Google"
            />
            Google
          </button>
          <button className="btn btn-outline btn-sm">
            <img
              src="https://img.icons8.com/color/24/facebook.png"
              alt="Facebook"
            />
            Facebook
          </button>
          <button className="btn btn-outline btn-sm">
            <img
              src="https://img.icons8.com/ios-filled/24/github.png"
              alt="GitHub"
            />
            GitHub
          </button>
        </div>

        {/* Sign Up Redirect */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
