import React from 'react';

interface SadIconProps {
  height?: number;
  width?: number;
}

const SadIcon: React.FC<SadIconProps> = ({ height = 72, width = 72 }) => (
  <svg
    id="emoji"
    viewBox="0 0 72 72"
    xmlns="http://www.w3.org/2000/svg"
    height={height}
    width={width}
  >
    <g id="color">
      <path
        fill="#FCEA2B"
        d="M36,13.1161c-12.6823,0-23,10.3177-23,23c0,12.6822,10.3177,23,23,23c12.6822,0,23-10.3178,23-23 C59,23.4338,48.6822,13.1161,36,13.1161z"
      />
    </g>
    <g id="line">
      <circle
        cx="36"
        cy="36"
        r="23"
        fill="none"
        stroke="#000000"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M26.5,44.1262c1.8768-1.5425,5.8239-2.494,10-2.4149c3.8343,0.0726,7.2926,1.0032,9,2.4149"
      />
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M21.5,27c1.1854-2.4206,3-5,9-4"
      />
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M50.5,27c-1.1854-2.4206-3-5-9-4"
      />
      <path d="M30,31c0,1.6568-1.3448,3-3,3c-1.6553,0-3-1.3433-3-3c0-1.6552,1.3447-3,3-3C28.6552,28,30,29.3448,30,31" />
      <path d="M48,31c0,1.6568-1.3447,3-3,3s-3-1.3433-3-3c0-1.6552,1.3447-3,3-3S48,29.3448,48,31" />
    </g>
  </svg>
);

export default SadIcon;
