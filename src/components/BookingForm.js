import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Submitted:\n' + JSON.stringify(formData, null, 2));
  };

  return (
    <section className="section form-section">
      <h2>Book Your Stay</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="checkIn" type="date" required onChange={handleChange} />
        <input name="checkOut" type="date" required onChange={handleChange} />
        <select name="roomType" onChange={handleChange}>
          <option value="Standard">Standard</option>
          <option value="Deluxe">Deluxe</option>
          <option value="Suite">Suite</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default BookingForm;
