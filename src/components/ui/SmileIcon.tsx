import React from 'react';

interface SmileIconProps {
  height?: number;
  width?: number;
}

const SmileIcon: React.FC<SmileIconProps> = ({ height = 72, width = 72 }) => (
  <svg
    id="emoji"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
  >
    <g id="color">
      <circle cx="36.0001" cy="36" r="22.9999" fill="#fcea2b" />
    </g>
    <g id="line">
      <circle
        cx="36"
        cy="36"
        r="23"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M45.8147,45.2268a15.4294,15.4294,0,0,1-19.6294,0"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.6941,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
      />
      <path
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M48.9441,33.4036a4.7262,4.7262,0,0,0-8.6382,0"
      />
    </g>
  </svg>
);

export default SmileIcon;
