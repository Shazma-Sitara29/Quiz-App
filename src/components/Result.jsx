import React from "react";

const ResultPage = ({ score, userAnswers, startQuiz }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white">
      {/* Header */}
      <div className="bg-purple-800/70 p-6 rounded-lg shadow-lg text-center w-11/12 max-w-xl">
        <h2 className="text-4xl font-extrabold mb-4 text-purple-200">Quiz Results</h2>
        <p className="text-lg font-medium mb-6">
          Your Score: <span className="text-yellow-300">{score}</span> / {userAnswers.length}
        </p>
      </div>

      {/* Answers List */}
      <div className="bg-white/10 p-6 rounded-lg shadow-md w-11/12 max-w-xl mt-6">
        <ul className="space-y-4 text-purple-100">
          {userAnswers.map((answer, index) => (
            <li key={index} className="p-4 rounded-md bg-purple-700/30">
              <p className="font-bold">
                {index + 1}. {answer.question}
              </p>
              <p
                className={`ml-4 mt-2 ${
                  answer.selected === answer.correct
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                Your Answer: <span className="font-semibold">{answer.selected}</span> 
                {answer.selected !== answer.correct && (
                  <span> | Correct Answer: <span className="font-semibold text-yellow-300">{answer.correct}</span></span>
                )}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Retry Button */}
      <button
        onClick={() => startQuiz(null)}
        className="mt-6 bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-3 rounded-lg shadow-lg hover:from-purple-500 hover:to-purple-700 active:scale-95 transition-all duration-200"
      >
        Retry Quiz
      </button>
    </div>
  );
};

export default ResultPage;
