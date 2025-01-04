import React from "react";
import GaugeComponent from "react-gauge-component";

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
    let label = "";
    let color = "";
    let gaugeValue = 0;

    gaugeValue = ((score - 450) / (850 - 450)) * 100;

    if (score >= 800) {
      label = "Excellent";
      color = "#30D68A"; // Green
    } else if (score >= 750) {
      label = "Very Good";
      color = "#28C0E1"; // Light Blue
    } else if (score >= 700) {
      label = "Good";
      color = "#E19CF2"; // Purple
    } else if (score >= 650) {
      label = "Fair";
      color = "#FECB26"; // Yellow
    } else if (score >= 600) {
      label = "Poor";
      color = "#F4974F"; // Orange
    } else if (score >= 300) {
      label = "Very Bad";
      color = "#ED6E61"; // Red
    }

    return { label, color, gaugeValue };
  };

  const { label, color, gaugeValue } = getScoreDetails(score);

  return (
    <div className="mt-4 flex flex-col justify-center items-center">
      <GaugeComponent
        className="gauge-text"
        value={gaugeValue}
        type="semicircle"
        labels={{
          valueLabel: {
            formatTextValue: (value) => "", // Format the main value with
            style: { color: color },
          },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) => "", // Add ºC to tick labels
            },
          },
        }}
        arc={{
          colorArray: [
            "#ED6E61",
            "#F4974F",
            "#FECB26",
            "#E19CF2",
            "#28C0E1",
            "#30D68A",
          ],
          subArcs: [
            { limit: 18 },
            { limit: 35 },
            { limit: 50 },
            { limit: 65 },
            { limit: 82 },
            { limit: 100 },
          ],
          padding: 0.02,
          width: 0.3,
        }}
        pointer={{
          elastic: true,
          animationDelay: 0,
        }}
      />
      
      <div className="mt-6 text-center">
        <p
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
          style={{ color: color }}
        >
          {score}
        </p>
        <p
          className="text-lg sm:text-xl md:text-2xl font-semibold"
          style={{ color: color }}
        >
          {label}
        </p>
      </div>
    </div>
  );
};

export default DynamicScoreMeter;
