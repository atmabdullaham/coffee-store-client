import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cpassword.value;
    // console.log(name, email);

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        const creationTime = user?.metadata?.creationTime;
        console.log(user);
        const newUser = { name, email, creationTime };

        // ...fetch
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            form.reset();
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6 font-rancho">
      <div className="card w-full max-w-md shadow-lg bg-white p-8 rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 font-rancho">
          Create an Account
        </h2>
        <form onSubmit={handleSignUp} className="space-y-4">
          {/* Full Name Input */}
          <div>
            <label className="label text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
              name="name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="label text-gray-600 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
              name="email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="label text-gray-600 font-medium">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              required
              name="password"
            />
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="label text-gray-600 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              required
              name="cpassword"
            />
          </div>

          {/* Remember Me & Terms Checkbox */}
          <div className="flex justify-between items-center text-sm text-gray-500">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                required
              />
              <span>I agree to the terms & conditions</span>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-white hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="divider my-4">Or sign up with</div>

        {/* Social Sign Up Buttons */}
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

        {/* Sign In Redirect */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
