import React from 'react';
import room1 from '../assets/room1.jpg'; // Adjust the path based on your folder structure
import room2 from '../assets/room2.jpg'; // Adjust the path based on your folder structure
import './Rooms.css';// Optional styling

const Rooms = () => (
  <section className="section">
    <h2>Our Rooms</h2>
    <div className="gallery">
      <img src={room1} alt="Modern room with king-size bed" />
      <img src={room2} alt="Spacious room with ocean view" />
    </div>
  </section>
);

export default Rooms;
