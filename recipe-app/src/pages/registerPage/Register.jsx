// Register.js
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from 'react-router-dom';
import api from "../../util/baseURL";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(firstName);
  console.log(lastName);
  console.log(contact)
  

  const handleSubmit = async (e) => {
    console.log("one");
    
    e.preventDefault();

    if (!email || !password || !passwordTwo) {
      setError("Please enter both email and password.");
      return;
    }

    if (password != passwordTwo) {
      setError("Comform password not match!.");
      return;
    }

    setError("");

    try {
      const response = await api.post("/auth/register", {
        firstName,
        lastName,
        email,
        contact,
        password,
      });

      if (response.status === 200) {
        setError("");
        alert("User Register successful!");
        navigate("/login"); // Redirect to dashboard or any other page
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError("Your email or password is incorrect.");
        alert(error);
      } else {
        setError("Something went wrong. Please try again later.");
        alert("Something went wrong. Please try again later.!");
      }
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!email || !password) {
  //     setError("Please enter a password");
  //   } else if (email !== "john@gmail.com" || password !== "1234") {
  //     setError("Your password or username is incorrect");
  //   } else {
  //     setError("");
  //     alert("Login successful!");
  //   }
  // };

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
             <div className="mb-4 ml-2 text-left">
            <h1 className="text-blac kfont-semibold text-2xl">Register</h1>
          </div>

            <div>
              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="your name"
                placeholder="Frist name"
                size="small"
                onChange={(e)=>setFirstName(e.target.value)}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                placeholder="Last name"
                size="small"
                onChange={(e)=>setLastName(e.target.value)}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="Email"
                placeholder="abc@gmail.com"
                size="small"
                onChange={(e)=>setEmail(e.target.value)}
              />

              <TextField
                required
                className="px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
                id="outlined-required"
                label="Phone number"
                placeholder="0112222333"
                size="small"
                onChange={(e)=>setContact(e.target.value)}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                size="small"
                onChange={(e)=>setPassword(e.target.value)}
              />

              <TextField
                id="outlined-password-input"
                label="Conform Password"
                type="password"
                autoComplete="current-password"
                size="small"
                onChange={(e)=>setPasswordTwo(e.target.value)}
              />
              <div className="text-right text-xs mr-2 text-red-600">
                <span>
                {error}
                </span>
              </div>
            </div>
          </Box>

          <button
            type="submit"
            className="w-1/4 ml-2 bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none float-left"
            onClick={handleSubmit}
          >
            Create Account
          </button>
     
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
