function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <window.Navbar
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
        onNavigate={handleNavigate}
      />
      <div className="content">
        {currentPage === 'home' && <window.Home navigate={handleNavigate} />}
        {currentPage === 'login' && <window.Login onLogin={handleLogin} />}
        {currentPage === 'signup' && <window.Signup />}
        {currentPage === 'dashboard' && <window.Dashboard />}
      </div>
    </div>
  );
}

window.App = App;