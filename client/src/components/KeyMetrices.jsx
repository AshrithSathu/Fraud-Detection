import React from "react";

const KeyMetrics = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">{metric.title}</h2>
          <p className="text-2xl">{metric.value}</p>
        </div>
      ))}
    </div>
  );
};

export default KeyMetrics;
