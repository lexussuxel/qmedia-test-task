import React, { useState } from "react";
import Quiz from "../components/Quiz";
import { QUIZ_QUESTIONS } from "../utils/questions";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(QUIZ_QUESTIONS[0].id);
  const [answers, setAnswers] = useState<{ [value: number]: number }>({});

  const navigate = useNavigate();

  const next = (answ: number) => {
    const helper: { [value: number]: number } = {};
    helper[currentQuestion] = answ;
    setAnswers({ ...answers, ...helper });

    if (currentQuestion === QUIZ_QUESTIONS.length - 1) {
      sessionStorage.setItem("test", "completed");
      navigate("/products");
    } else setCurrentQuestion(currentQuestion + 1);
  };

  const prev = () => {
    if (currentQuestion !== QUIZ_QUESTIONS[0].id) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  return (
    <>
      <h1 className={styles.title}>Онлайн-подбор средств для лица</h1>
      <p className={styles.paragraph}>
        Пройдите короткий тест и получите список наиболее подходящих для вас
        косметических продуктов
      </p>
      <Quiz
        question={QUIZ_QUESTIONS[currentQuestion]}
        next={next}
        prev={prev}
        count={QUIZ_QUESTIONS.length}
        checked_num={answers[currentQuestion]}
      />
    </>
  );
}

export default App;
