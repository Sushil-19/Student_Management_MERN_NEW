import React, { useState } from 'react';

function Register() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = async (e) => {
  console.log("The handleSubmit started");
  console.log(e);
  e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, age, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Registration successful:', data);
        window.location.href = "http://localhost:3001"; // Redirect to some page after successful login
      } else {
        console.log('Registration failed:', data);
        // Handle registration failure (e.g., display error message)
      }
    } catch (error) {
    console.error('Error during registration:', error);
  }
};

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="form-label" htmlFor="registerName">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerAge"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label className="form-label" htmlFor="registerAge">Age</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="registerEmail">Email</label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="registerPassword">Password</label>
        </div>
        <button type="submit" onSubmit={handleSubmit} className="btn btn-primary btn-block mb-4">Sign up</button>
        <div className="text-center">
          <p>Already a member? <a href="/login">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
