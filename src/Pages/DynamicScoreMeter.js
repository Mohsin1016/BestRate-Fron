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
    if (score >= 800) return { label: "EXCELLENT", color: "#30D68A" };
    if (score >= 750) return { label: "VERY GOOD", color: "#33CCCC" };
    if (score >= 700) return { label: "GOOD", color: "#9966FF" };
    if (score >= 600) return { label: "FAIR", color: "#FFCC33" };
    if (score >= 500) return { label: "POOR", color: "#FF9966" };
    return { label: "VERY BAD", color: "#FF6666" };
  };

  const { label, color } = getScoreDetails(score);
  const rotation = ((score - 300) / 550) * 180 - 90;

  return (
    <div className="relative w-[500px] h-[300px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 300 250"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background white space fill */}
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="40"
          stroke="white"
        />
        
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#FF6666"
          strokeDasharray="63 315"
          strokeDashoffset="315"
        />

        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#FF9966"
          strokeDasharray="63 315"
          strokeDashoffset="252"
        />
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#FFCC33"
          strokeDasharray="63 315"
          strokeDashoffset="189"
        />
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#9966FF"
          strokeDasharray="63 315"
          strokeDashoffset="126"
        />
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#33CCCC"
          strokeDasharray="63 315"
          strokeDashoffset="63"
        />
        <path
          d="M30,150 A120,120 0 0,1 270,150"
          fill="none"
          strokeWidth="38"
          stroke="#30D68A"
          strokeDasharray="63 315"
          strokeDashoffset="0"
        />

        {/* Rounded Needle */}
        <g transform={`rotate(${rotation}, 150, 150)`}>
          <path
            d="M150,60 
               C150,60 154,70 154,80
               L154,150 
               C154,152 152,154 150,154
               C148,154 146,152 146,150
               L146,80
               C146,70 150,60 150,60"
            fill="#666666"
          />
        </g>
      </svg>

      {/* Score and Label outside SVG */}
      <div className="absolute w-full text-center" style={{ top: '65%' }}>
        <p className="text-7xl font-bold mb-2" style={{ color }}>
          {score}
        </p>
        <p className="text-2xl tracking-wider" style={{ color }}>
          {label}
        </p>
      </div>
    </div>
  );
};

export default DynamicScoreMeter;