import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = async () => {
    console.log("The handleLogin started");
    try {
      const res = await fetch('http://localhost:3000/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      
      if (res.ok) {
        console.log('Login successful:', data);
        window.location.href = "http://localhost:3001"; // Redirect to some page after successful login
      } else {
        console.log('Login failed:', data);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleLoginClick(); }}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="loginEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="loginEmail">Email</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="loginPassword"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="loginPassword">Password</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          onClick={handleLoginClick}
        >
          Sign in
        </button>
      </form>
      <div className="text-center">
        <p>Not a member? <a href="/register">Register</a></p>
      </div>
    </div>
  );
}

export default Login;
