import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Rooms from './components/Rooms';
import Dishes from './components/Dishes';
import BookingForm from './components/BookingForm';
import CanvaStylePricing from './components/CanvaStylePricing';
import JobseekerLogin from './components/JobseekerLogin/JobseekerLogin';


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
