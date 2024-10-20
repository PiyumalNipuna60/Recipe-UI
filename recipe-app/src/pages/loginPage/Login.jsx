// Login.js
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
        setError('Please enter a password');
    } else if (email !== 'john@gmail.com' || password !== '1234') {
        setError('Your password or username is incorrect');
    } else {
        setError('');
        alert('Login successful!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-pink-500">cook</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <h1 className='text-black font-semibold text-2xl'>Login</h1>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email address</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500" 
              placeholder="john@gmail.com"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className={`w-full px-4 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-pink-500 focus:border-pink-500`} 
              placeholder="********" 
              required
            />
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>
          <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none">SIGN IN</button>
          {error && <p className="text-red-500 text-sm mt-4 text-center">Your password or username is incorrect</p>}
        </form>
        <p className="text-gray-600 text-sm mt-6 text-center">
          Don't have an account? <a href="#" className="text-pink-500">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
