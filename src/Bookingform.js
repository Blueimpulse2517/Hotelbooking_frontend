import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkin: '',
    checkout: '',
    roomType: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Data:", formData);
    alert("Your booking has been submitted!");
    // You can integrate this with backend or WhatsApp API here
  };

  return (
    <div className="booking-form-container" id="booking">
      <h2>Book Your Stay</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <label>Check-in Date:</label>
        <input type="date" name="checkin" value={formData.checkin} onChange={handleChange} required />
        <label>Check-out Date:</label>
        <input type="date" name="checkout" value={formData.checkout} onChange={handleChange} required />
        <select name="roomType" value={formData.roomType} onChange={handleChange} required>
          <option value="">Select Room Type</option>
          <option value="Single">Single Room</option>
          <option value="Double">Double Room</option>
          <option value="Suite">Suite</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
