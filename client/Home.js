function Home({ navigate }) {
  const taglines = [
    "Ace Your Interview!",
    "Be Confident!",
    "Practice Makes Perfect!",
    "Your Dream Job Awaits!"
  ];

  const [currentTagline, setCurrentTagline] = React.useState(taglines[0]);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isTyping, setIsTyping] = React.useState(true);

  React.useEffect(() => {
    // Rotate taglines every 5 seconds
    const rotateInterval = setInterval(() => {
      setCurrentTagline((prev) => {
        const currentIndex = taglines.indexOf(prev);
        const nextIndex = (currentIndex + 1) % taglines.length;
        return taglines[nextIndex];
      });
    }, 5000);

    return () => clearInterval(rotateInterval);
  }, []);

  React.useEffect(() => {
    // Typing animation for the current tagline
    let index = 0;
    setDisplayedText(""); // Reset displayed text
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (index < currentTagline.length) {
        setDisplayedText((prev) => prev + currentTagline[index]);
        index++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typeInterval);
  }, [currentTagline]);

  return (
    <div className="home">
      {/* Header Section */}
      <div className="hero-section">
        <h1 className="animated-tagline">{displayedText}{isTyping ? <span className="cursor">|</span> : ""}</h1>
        <div className="hero-buttons">
          <button onClick={() => navigate('dashboard')} className="button advanced-button">
            Get Started
          </button>
        </div>
      </div>

      {/* Usage Section */}
      <div className="section usage-section">
        <h2>How to Prepare with IntervuAI</h2>
        <div className="usage-steps">
          <div className="step">
            <div className="step-icon">📝</div>
            <h3>Step 1: Sign Up</h3>
            <p>Create an account to start your interview preparation.</p>
          </div>
          <div className="step">
            <div className="step-icon">🔑</div>
            <h3>Step 2: Log In</h3>
            <p>Access your dashboard to practice questions.</p>
          </div>
          <div className="step">
            <div className="step-icon">💡</div>
            <h3>Step 3: Practice</h3>
            <p>Answer common interview questions and build confidence!</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="section about-section">
        <h2>About IntervuAI</h2>
        <p>
          IntervuAI is a user-friendly platform designed to help you excel in job interviews. Whether you're a student preparing for campus placements or a professional aiming for your dream job, IntervuAI provides a curated list of common interview questions to practice. Our goal is to boost your confidence by allowing you to rehearse your answers in a safe, supportive environment.
        </p>
        <p>
          With IntervuAI, you can sign up, log in, and access a personalized dashboard where you can practice questions categorized for different interview types. We’re also working on adding AI-based feedback to help you improve your responses in the future. Start your journey with IntervuAI today and take the first step toward acing your next interview!
        </p>
      </div>

      {/* Features Section */}
      <div className="section features-section">
        <h2>Why IntervuAI?</h2>
        <div className="features">
          <div className="feature">
            <img
              src="./images/intervuai.jpg"
              alt="Interview Questions"
              className="feature-image"
            />
            <h3>Interview Questions</h3>
            <p>Practice with a variety of common interview questions.</p>
          </div>
          <div className="feature">
            <img
              src="./images/secure.jpg"
              alt="Secure Access"
              className="feature-image"
            />
            <h3>Secure Access</h3>
            <p>Sign up and log in to save your progress.</p>
          </div>
          <div className="feature">
            <img
              src="./images/ai.jpg"
              alt="Future AI Feedback"
              className="feature-image"
            />
            <h3>Future AI Feedback</h3>
            <p>Get AI-based feedback on your answers (coming soon).</p>
          </div>
        </div>
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

window.Home = Home;