import React, { useState } from 'react';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call
    console.log("Booking Details:", formData);
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">Book Your Room</h2>
      
      {submitted ? (
        <p className="text-green-600 font-medium text-center">Booking submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          />

          <div className="flex gap-2">
            <input
              name="checkIn"
              type="date"
              className="w-1/2 p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
            <input
              name="checkOut"
              type="date"
              className="w-1/2 p-2 border border-gray-300 rounded"
              onChange={handleChange}
              required
            />
          </div>

          <select
            name="roomType"
            className="w-full p-2 border border-gray-300 rounded"
            onChange={handleChange}
            required
          >
            <option value="">Select Room Type</option>
            <option value="Standard">Standard Room</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite Room</option>
          </select>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          >
            Submit Booking
          </button>
        </form>
      )}
    </div>
  );
}
