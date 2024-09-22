import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Register from './components/Register';
import Login from './components/Login';
import Hello from './components/Hello';

function App() {
  const { keycloak, initialized } = useKeycloak();

  const handleLogin = () => {
    keycloak.login();
  };

  const handleLogout = () => {
    keycloak.logout();
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            {initialized ? (
              keycloak.authenticated ? (
                <>
                  <li><button onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <li><button onClick={handleLogin}>Login</button></li>
              )
            ) : (
              <li>Loading Keycloak...</li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/" element={<h3>Welcome, please login.</h3>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
