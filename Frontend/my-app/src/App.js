import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
