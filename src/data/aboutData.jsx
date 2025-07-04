import React from 'react';
import './AboutData.css';
import{Link} from 'react-router-dom';


const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          <strong>R & D</strong> is more than a club — it’s a space where movement meets meaning.
        </p>
        <p>
          We combine the energy of running with the power of ideas, creating a unique platform
          for innovators, entrepreneurs, and changemakers to connect, reflect, and grow.
        </p>
        {/* Back to Home Button */}
        <Link to="/"
        className="back-button">
           ← Back to Home  </Link>
      </div>
    </div>
  );
};

export default AboutUs;