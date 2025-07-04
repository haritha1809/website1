import React from 'react';
import './Reasons.css';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div>
      {/* RIGHT SIDE (Text Content) */}
        <div>
          <span className="stroke-text">WHAT</span>
          <span> WE DO?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt="tick" />
            <span>Run with Intention</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Think with Clarity</span>
          </div>
          <div>
            <img src={tick} alt="tick" />
            <span>Grow through Connection</span>
          </div>
      </div>
      </div>
  );
};

export default Reasons;