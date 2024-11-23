import React, { useState } from "react";
import CategoryPage from "./Categroy"; // Import your category page

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // Navigate to category page after login
  };

  if (isLoggedIn) {
    return <CategoryPage />; // Render CategoryPage after login
  }

  return (
    <div
      className="h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://video.udacity-data.com/topher/2024/October/6709870c_nd0011/nd0011.jpg')", // Background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-black/60"></div>

      {/* Login Form */}
      <div className="relative bg-gradient-to-r from-purple-800 via-blue-700 to-purple-900 p-10 rounded-xl shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Login to QuizApp
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-400 text-2xl font-extrabold rounded-md hover:bg-purple-500 transition-all duration-200 shadow-lg hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
