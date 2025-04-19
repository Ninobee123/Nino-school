import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    navigate('/dashboard', { state: data });
  };

  return (
    <div className="signup-container">
      <h2>Student Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full name" name="name" required />
        <input type="email" placeholder="Enter email" name="email" required />
        <input type="password" placeholder="Enter password" name="password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp