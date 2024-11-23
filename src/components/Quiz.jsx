import React, { useState, useEffect } from "react";

const questions = {
  "Web Development": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Markup Language", "None"], answer: "Hyper Text Markup Language" },
    { question: "What is CSS used for?", options: ["Styles", "Database", "Structure", "Scripting"], answer: "Styles" },
    { question: "What is React?", options: ["Library", "Framework", "Language", "Database"], answer: "Library" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Application Protocol Interface", "Applied Program Integration", "None"], answer: "Application Programming Interface" },
    { question: "Which is used to style web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
    { question: "Which HTML tag is used to include JavaScript?", options: ["<js>", "<script>", "<javascript>", "<code>"], answer: "<script>" },
    { question: "What is Bootstrap?", options: ["CSS Framework", "Programming Language", "JavaScript Library", "Database"], answer: "CSS Framework" },
    { question: "What is Node.js?", options: ["Runtime Environment", "Programming Language", "Library", "Framework"], answer: "Runtime Environment" },
    { question: "Which company developed React?", options: ["Google", "Facebook", "Microsoft", "Apple"], answer: "Facebook" },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "None"], answer: "Document Object Model" },
  ],
  "Graphics Design": [
    { question: "What is Adobe Photoshop used for?", options: ["Coding", "Photo Editing", "Video Editing", "3D Modeling"], answer: "Photo Editing" },
    { question: "What does RGB stand for?", options: ["Red Green Blue", "Red Grey Black", "Random Gradient Blend", "None"], answer: "Red Green Blue" },
    { question: "Which tool is used to draw vector graphics?", options: ["Adobe Illustrator", "Photoshop", "Figma", "Canva"], answer: "Adobe Illustrator" },
    { question: "What is DPI in design?", options: ["Dots Per Inch", "Depth Per Image", "Data Processing Interface", "None"], answer: "Dots Per Inch" },
    { question: "Which file format supports transparency?", options: ["PNG", "JPG", "GIF", "PDF"], answer: "PNG" },
    { question: "What is Figma used for?", options: ["UI/UX Design", "Programming", "Video Editing", "Photo Editing"], answer: "UI/UX Design" },
    { question: "What is the primary color in design?", options: ["Red", "Blue", "Yellow", "All of the above"], answer: "All of the above" },
    { question: "What does CMYK stand for?", options: ["Cyan Magenta Yellow Key", "Color Management Key", "Color Model Yellow Key", "None"], answer: "Cyan Magenta Yellow Key" },
    { question: "What is Canva used for?", options: ["Graphic Design", "Coding", "Editing Audio", "None"], answer: "Graphic Design" },
    { question: "What is Adobe XD used for?", options: ["Prototyping", "Photo Editing", "Video Editing", "None"], answer: "Prototyping" },
  ],
  "General Knowledge": [
    { question: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
    { question: "Largest planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Jupiter" },
    { question: "Who discovered gravity?", options: ["Newton", "Einstein", "Galileo", "Tesla"], answer: "Newton" },
    { question: "What is the boiling point of water?", options: ["100°C", "90°C", "80°C", "120°C"], answer: "100°C" },
    { question: "Which is the smallest continent?", options: ["Asia", "Australia", "Europe", "Antarctica"], answer: "Australia" },
    { question: "Which is the longest river?", options: ["Amazon", "Nile", "Yangtze", "Ganga"], answer: "Nile" },
    { question: "Which is the largest desert?", options: ["Sahara", "Arctic", "Gobi", "Kalahari"], answer: "Sahara" },
    { question: "Who painted the Mona Lisa?", options: ["Da Vinci", "Picasso", "Van Gogh", "Michelangelo"], answer: "Da Vinci" },
    { question: "Which planet is closest to the sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
    { question: "Which year did World War II end?", options: ["1945", "1939", "1918", "1950"], answer: "1945" },
  ],
};

const QuizPage = ({ category, setQuizCompleted, setScore, setUserAnswers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(15);

  const currentQuestion = questions[category][currentIndex];

  useEffect(() => {
    if (timeLeft === 0) handleNext();
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleNext = () => {
    if (selectedAnswer === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [
      ...prev,
      {
        question: currentQuestion.question,
        selected: selectedAnswer || "No Answer",
        correct: currentQuestion.answer,
      },
    ]);
    setSelectedAnswer(null);
    setTimeLeft(15);
    if (currentIndex + 1 < questions[category].length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div
      className="h-screen flex flex-col justify-center items-center bg-cover bg-center text-gray-800 relative"
      style={{
        backgroundImage: "https://blog.openreplay.com/images/web-development-best-practices/images/hero.png')", // Replace with your background image
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-transparent"></div>

      {/* Quiz Container */}
      <div className="relative bg-white rounded-xl shadow-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-extrabold text-center mb-6">
          {category} Quiz
        </h2>
        <p className="text-right text-red-600 font-semibold mb-4">
          Time Left: {timeLeft}s
        </p>
        <div className="bg-gray-100 rounded-lg p-6 mb-6">
          <p className="text-xl font-medium mb-4">{currentQuestion.question}</p>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option)}
              className={`block w-full text-left px-6 py-3 rounded-md text-lg mb-2 ${
                selectedAnswer === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 disabled:bg-gray-400"
          disabled={!selectedAnswer && timeLeft > 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizPage;
