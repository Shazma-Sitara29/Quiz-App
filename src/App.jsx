import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";
import LoginPage from "./components/LoginPage";

const App = () => {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [user, setUser] = useState(null); // Track logged-in user

  const startQuiz = (category) => {
    setCurrentCategory(category);
    setQuizCompleted(false);
    setScore(0);
    setUserAnswers([]);
  };

  if (!user) {
    return <LoginPage setUser={setUser} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {!currentCategory && !quizCompleted && (
        <LandingPage startQuiz={startQuiz} />
      )}
      {currentCategory && !quizCompleted && (
        <QuizPage
          category={currentCategory}
          setQuizCompleted={setQuizCompleted}
          setScore={setScore}
          setUserAnswers={setUserAnswers}
        />
      )}
      {quizCompleted && (
        <ResultPage
          score={score}
          userAnswers={userAnswers}
          startQuiz={startQuiz}
        />
      )}
    </div>
  );
};

export default App;
