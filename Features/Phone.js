import React, { useState } from 'react';

function Phone() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.trim() && /^\d+$/.test(phone)) {
      localStorage.setItem('phone', phone);
      alert('Form Submitted Successfully!');
      console.log({
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        phone,
      });
    } else {
      alert('Please enter a valid phone number');
    }
  };

  return (
    <div>
      <h1>Enter Your Phone Number</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Phone;
