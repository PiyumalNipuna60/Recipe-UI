// Register.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from 'react-router-dom'

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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-8xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-500">cook</h1>
        </div>

          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
             <div className="mb-4 ml-6 text-left">
            <h1 className="text-black font-semibold text-2xl">Register</h1>
          </div>

            <div>
              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="your name"
                defaultValue="Frist name"
                size="small"
                inputProps={{ style: { fontSize: 12 } }}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                defaultValue="Frist name"
                size="small"
                inputProps={{ style: { fontSize: 12 } }}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="Email"
                defaultValue="abc@gmail.com"
                size="small"
                inputProps={{ style: { fontSize: 12 } }}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="Phone number"
                defaultValue="0112222333"
                size="small"
                inputProps={{ style: { fontSize: 12 } }}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
              />

              <TextField
                id="outlined-password-input"
                label="Conform Password"
                type="password"
                autoComplete="current-password"
                size="small"
              />
            </div>
          </Box>

          <button
            type="submit"
            className="w-1/4 ml-8 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none float-left"
          >
            Create Account
          </button>
          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">
              Your password or username is incorrect
            </p>
          )}
     
     <div>
        <br />
        <br />
     </div>
    <div>
        <p className="text-gray-600 text-sm mt-6 text-center">
         already have an account?{/* Line break */}
         <Link to="/login" className="text-pink-500">Login</Link>
        </p>
    </div>
 

      </div>
    </div>
  );
};

export default Register;
