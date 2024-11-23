import React from "react";

const categories = ["Web Development", "Graphics Design", "General Knowledge"];

const CategoryPage = ({ startQuiz }) => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2017/10/25/17/18/purple-2880600_1280.jpg')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-purple-600/70"></div>

      {/* Category Selection Card */}
      <div className="relative bg-gradient-to-r from-purple-800 to-purple-600 p-10 rounded-xl shadow-2xl w-full max-w-2xl">
        <h2 className="text-4xl font-extrabold text-white text-center mb-8">
          Select Quiz Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => startQuiz(category)}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white py-4 px-6 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
