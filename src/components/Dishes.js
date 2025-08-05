import React from 'react';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';

const Dishes = () => (
  <section className="section">
    <h2>Our Special Dishes</h2>
    <div className="gallery">
      <img src={dish1} alt="dish1.jpg" />
      <img src={dish2} alt="dish2.jpg" />
    </div>
  </section>
);

export default Dishes;
