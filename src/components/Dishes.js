import React from 'react';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';

const Dishes = () => (
  <section className="section">
    <h2>Our Special Dishes</h2>
    <div className="gallery">
      <img src={dish1} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeWXoWxifIwHNyIc9PCriz94obVcfIUZ_VQ&s" />
      <img src={dish2} alt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3PghsvzgJsDlrcQPs6wVrWEaVmSbJKYuTzg&s" />
    </div>
  </section>
);

export default Dishes;
