import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
      });

      if (response.data.success) {
        setSuccessMessage('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/login'), 3000);
      }
    } catch (error) {
      setError('Error occurred during sign-up. Please try again.');
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="relative bg-gray-800 text-white p-8 w-96 rounded-xl shadow-2xl border border-teal-500/50">
        {/* Cyberpunk Glowing Border */}
        <div className="absolute inset-0 bg-teal-500/20 blur-md rounded-xl opacity-50"></div>

        <h2 className="text-3xl font-extrabold text-teal-400 text-center mb-6 animate-pulse">Sign Up</h2>
        {error && <div className="text-red-400 font-semibold text-sm text-center mb-4">{error}</div>}
        {successMessage && <div className="text-green-400 font-semibold text-sm text-center mb-4">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="relative z-10">
          <div className="mb-4">
            <label className="block text-teal-300 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-teal-400 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-md"
              placeholder="Enter Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-teal-300 font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-teal-400 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-md"
              placeholder="Enter Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-teal-300 font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-teal-400 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none shadow-md"
              placeholder="Enter Password"
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold shadow-lg hover:bg-teal-600 transition-all duration-300 transform hover:scale-105 hover:shadow-teal-500/50"
            >
              Sign Up
            </button>
            <p className="text-center text-gray-400 mt-3">
              Already have an account?  
              <Link to="/login" className="text-teal-400 hover:text-teal-500 font-semibold ml-1 transition-all">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
