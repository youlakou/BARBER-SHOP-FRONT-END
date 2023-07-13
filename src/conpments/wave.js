import React from 'react';
import './Wave.css';

function Wave() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g className="wavies">
        <use xlinkHref="#gentle-wave" x="50" y="0" fill="#d5d5d5"/>
        <use xlinkHref="#gentle-wave" x="50" y="3" fill="#e5e5e5"/>
        <use xlinkHref="#gentle-wave" x="50" y="6" fill="white"/>
      </g>
    </svg>
  );
}

export default Wave;
