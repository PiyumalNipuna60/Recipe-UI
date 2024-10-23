import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../util/baseURL";
import AlertMessage from "../../components/AlertMessage"; // Import your new component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        setError("");
        setSuccess("Login successful!");
        localStorage.setItem("token", response.data.token);
        navigate("/home"); // Redirect to home or dashboard
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Your email or password is incorrect.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
      setSuccess("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-500">cook</h1>
        </div>

        {/* Show success or error alerts */}
        <AlertMessage message={success} severity="success" />
        <AlertMessage message={error} severity="error" />

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="text-black font-semibold text-2xl">Login</h1>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              placeholder="john@gmail.com"
              required
              autoFocus={error.includes("email")} // Auto focus if email is missing
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 border ${
                error ? "border-red-500" : "border-gray-300"
              } rounded-md focus:ring-pink-500 focus:border-pink-500`}
              placeholder="********"
              required
              autoFocus={error.includes("password")} // Auto focus if password is missing
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none"
          >
            SIGN IN
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-pink-500">
            Create an account
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
