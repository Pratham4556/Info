import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Email() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      localStorage.setItem('email', email);
      navigate('/Phone');
    } else {
      alert('Please enter a valid email');
    }
  };

  return (
    <div>
      <h1>Enter Your Email</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default Email;
