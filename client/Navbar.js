function Navbar(props) {
  const { isLoggedIn, onLogout, onNavigate } = props;

  return (
    <nav className="navbar">
      <h1>IntervuAI</h1>
      <div className="links">
        <button onClick={() => onNavigate('home')}>Home</button>
        {isLoggedIn ? (
          <React.Fragment>
            <button onClick={() => onNavigate('dashboard')}>Dashboard</button>
            <button onClick={onLogout}>Logout</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button onClick={() => onNavigate('login')}>Login</button>
            <button onClick={() => onNavigate('signup')}>Sign Up</button>
            <button onClick={() => onNavigate('dashboard')}>Dashboard</button>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
}

window.Navbar = Navbar; // Make Navbar available globally