import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Rooms from './Rooms';
import Dishes from './Dishes';
import BookingForm from './BookingForm';
import CanvaStylePricing from './CanvaStylePricing';
import JobseekerLogin from './JobseekerLogin/JobseekerLogin';






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rooms />} />
        <Route path="/dishes" element={<Dishes />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/pricing" element={<CanvaStylePricing />} />
        <Route path="/login" element={<JobseekerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
