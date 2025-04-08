function Dashboard() {
  const [category, setCategory] = React.useState("General");
  const [currentQuestion, setCurrentQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");

  // Sample question bank
  const questions = {
    General: [
      "Tell me about yourself.",
      "What are your strengths?",
      "Why do you want this job?"
    ],
    Technical: [
      "Explain the difference between SQL and NoSQL.",
      "What is a REST API?",
      "How does a hash table work?"
    ],
    Behavioral: [
      "Describe a time you faced a challenge at work.",
      "How do you handle stress?",
      "Tell me about a time you worked in a team."
    ]
  };

  // Function to get a random question from the selected category
  const getRandomQuestion = () => {
    const categoryQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
    setCurrentQuestion(categoryQuestions[randomIndex]);
  };

  // Load a random question when the category changes or on initial load
  React.useEffect(() => {
    getRandomQuestion();
  }, [category]);

  // Handle answer submission
  const handleSubmitAnswer = () => {
    if (answer.trim() === "") {
      alert("Please enter an answer before submitting!");
      return;
    }
    alert("Answer submitted successfully! Keep practicing!");
    setAnswer(""); // Clear the answer field
    getRandomQuestion(); // Load a new question
  };

  return (
    <div className="dashboard">
      {/* Header Section */}
      <div className="dashboard-header">
        <h1>Welcome to Your Dashboard!</h1>
        <p className="motivational-message">Practice hard, and ace your interview! 🚀</p>
      </div>

      {/* Category Selection */}
      <div className="category-selection">
        <h2>Select a Category</h2>
        <div className="category-buttons">
          <button
            className={`category-button ${category === "General" ? "active" : ""}`}
            onClick={() => setCategory("General")}
          >
            General
          </button>
          <button
            className={`category-button ${category === "Technical" ? "active" : ""}`}
            onClick={() => setCategory("Technical")}
          >
            Technical
          </button>
          <button
            className={`category-button ${category === "Behavioral" ? "active" : ""}`}
            onClick={() => setCategory("Behavioral")}
          >
            Behavioral
          </button>
        </div>
      </div>

      {/* Question Display */}
      <div className="question-section">
        <h2>Practice Question</h2>
        <div className="question-card">
          <p>{currentQuestion || "Click 'Next Question' to start practicing!"}</p>
          <button className="next-button" onClick={getRandomQuestion}>
            Next Question
          </button>
        </div>
      </div>

      {/* Answer Input */}
      <div className="answer-section">
        <h2>Your Answer</h2>
        <textarea
          className="answer-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Type your answer here..."
          rows="5"
        />
        <button className="submit-button" onClick={handleSubmitAnswer}>
          Submit Answer
        </button>
      </div>

      {/* Footer Section */}
      <div className="footer">
        <p>IntervuAI - A PBL Project by Dilip, Chinmay, and Shubham</p>
        <p>Sinhgad Institute of Technology, Lonavala</p>
        <p>© 2025 IntervuAI. All rights reserved.</p>
      </div>
    </div>
  );
}

window.Dashboard = Dashboard;