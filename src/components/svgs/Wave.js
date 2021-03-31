import React from "react";

export default function Wave(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props}>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className={"gradient-left"} />
          <stop offset="100%" className={"gradient-right"} />
        </linearGradient>
      </defs>
      <path
        fillOpacity="1"
        d="M0,160L30,149.3C60,139,120,117,180,133.3C240,149,300,203,360,218.7C420,235,480,213,540,192C600,171,660,149,720,122.7C780,96,840,64,900,80C960,96,1020,160,1080,176C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        fill="url(#grad1)"
      ></path>
    </svg>
  );
}
