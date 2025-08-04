import React from 'react';
import './App.css';
import Header from './components/Header';
import Rooms from './components/Rooms';
import Dishes from './components/Dishes';
import BookingForm from './components/BookingForm';
import JobseekerLogin from './components/JobseekerLogin/JobseekerLogin';

function App() {
  return (
    <div className="App">
      <Header />
      <Rooms />
      <Dishes />
      <BookingForm />
      <JobseekerLogin />
    </div>
  );
}

export default App;
