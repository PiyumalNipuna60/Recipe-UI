// Register.js
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter a password");
    } else if (email !== "john@gmail.com" || password !== "1234") {
      setError("Your password or username is incorrect");
    } else {
      setError("");
      alert("Login successful!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-500">cook</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <h1 className="text-black font-semibold text-2xl">
              Register
            </h1>
          </div>

          <div className="flex">
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
          </div>

          <div className="flex">
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
            <div className="mb-4 text-left">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-11/12 px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                placeholder="john@gmail.com"
                required
              />
            </div>
          </div>
      

       

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none"
          >
            Create Account
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">
              Your password or username is incorrect
            </p>
          )}
        </form>

        <p className="text-gray-600 text-sm mt-6 text-center">
          already have an account?{" "}
          <a href="#" className="text-pink-500">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
