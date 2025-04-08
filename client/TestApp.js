function TestApp() {
  return (
    <div>
      <h1>Test Navigation</h1>
      <div className="links">
        <ReactRouterDOM.Link to="/">Home</ReactRouterDOM.Link>
        <ReactRouterDOM.Link to="/dashboard">Dashboard</ReactRouterDOM.Link>
      </div>
      <div className="content">
        <ReactRouterDOM.Route path="/" exact component={window.Home} />
        <ReactRouterDOM.Route path="/dashboard" component={window.Dashboard} />
      </div>
    </div>
  );
}

window.TestApp = TestApp;