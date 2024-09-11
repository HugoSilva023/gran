import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct: "Paris",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
      correct: "Berlin",
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    if (currentQuestion === 0) {
      if (selectedOption === "Paris") {
        setFeedback("You got it right! Let's move on to the next one.");

        const timer = setTimeout(() => {
          setCurrentQuestion(1);
          setSelectedOption("");
          setFeedback("");
        }, 3000);

        return () => clearTimeout(timer);
      } else {
        setFeedback("Try again!");
      }
    }

    if (currentQuestion === 1) {
      if (selectedOption === "Berlin") {
        setFeedback("You got it! Game over.");

        const timer = setTimeout(() => {
          setCurrentQuestion(0);
          setSelectedOption("");
          setFeedback("");
        }, 5000);

        return () => clearTimeout(timer);
      } else {
        setFeedback("Try again!");
      }
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div id="question" className={styles.question}>
          {questions[currentQuestion].question}
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="selecaoItens">Options:</label>
          <select
            id="selecaoItens"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="">Select an option</option>
            {questions[currentQuestion].options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
          <button type="submit" className={styles.button} id="submitBtn">
            Submit
          </button>
        </form>
        <p id="feedback" className={styles.feedback}>
          {feedback}
        </p>
      </div>
    </>
  );
}

export default App;
