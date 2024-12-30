import React from "react";

const DynamicScoreMeter = ({ score }) => {
  // Validate score range
  if (score < 300 || score > 870) {
    return (
      <div className="text-center text-red-500">
        <p>Error: Score must be between 300 and 870.</p>
      </div>
    );
  }

  // Determine score category
  const getScoreDetails = (score) => {
    if (score >= 800) return { label: "Excellent", color: "#30D68A" };
    if (score >= 750) return { label: "Very Good", color: "#33CCCC" };
    if (score >= 700) return { label: "Good", color: "#9966FF" };
    if (score >= 600) return { label: "Fair", color: "#FFCC33" };
    if (score >= 500) return { label: "Poor", color: "#FF9966" };
    return { label: "Very Bad", color: "#FF6666" };
  };

  const { label, color } = getScoreDetails(score);

  // Map score to rotation (range 300 to 850)
  const rotation = ((score - 300) / 550) * 180 - 90; // Map score to -90 to 90 degrees

  return (
    <div className="relative w-48 h-48">
      {/* Semi-circle */}
      <svg
        className="w-full h-full"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke="#ddd"
          strokeWidth="10"
        />

        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke={`url(#gradient)`}
          strokeWidth="10"
        />
        <defs>
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF6666" />
            <stop offset="30%" stopColor="#FF9966" />
            <stop offset="50%" stopColor="#FFCC33" />
            <stop offset="70%" stopColor="#9966FF" />
            <stop offset="90%" stopColor="#33CCCC" />
            <stop offset="100%" stopColor="#30D68A" />
          </linearGradient>
        </defs>
      </svg>

      {/* Needle with Arrow */}
      <div
        className="absolute top-1/2 left-1/2 transform origin-bottom"
        style={{
          transform: `rotate(${rotation}deg) translate(-50%, -50%)`,
        }}
      >
        {/* Needle Body */}
        <div className="w-1 h-10 bg-gray-800"></div>

        {/* Arrow at the End */}
        <svg
          className="absolute -top-2 left-1/2 transform -translate-x-1/2"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="5,0 10,10 0,10" fill="gray" />
        </svg>
      </div>

      {/* Score and Label */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-4xl font-bold" style={{ color: color }}>
          {score}
        </p>
        <p className="text-xl font-semibold" style={{ color: color }}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default DynamicScoreMeter;
