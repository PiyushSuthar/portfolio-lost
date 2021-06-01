import React from "react";

interface Props {
  height?: string | number;
  width?: string | number;
  className?: string;
}

const Circle: React.FC<Props> = ({ width = 296, height = 296, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="147.841"
        cy="147.841"
        r="105"
        transform="rotate(129.631 147.841 147.841)"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="228.841"
          y1="42.841"
          x2="26.3409"
          y2="225.341"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1F2937" />
          <stop offset="1" stop-color="#101A28" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Circle;
