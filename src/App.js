import React from 'react';
import './App.css';
import Header from './components/Header';
import Rooms from './components/Rooms';
import Dishes from './components/Dishes';
import BookingForm from './components/BookingForm';
import CanvaStylePricing from './components/CanvaStylePricing';


function App() {
  return (
    <div className="App">
      <Header />
      <Rooms />
      <Dishes />
      <BookingForm />
      <CanvaStylePricing />
    </div>
  );
}

export default App;
