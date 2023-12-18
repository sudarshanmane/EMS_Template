// import React, { Component } from "react";
// import CanvasJSReact from "@canvasjs/react-charts";
// import "./LineChart.scss";

import { Chart } from "react-google-charts";

export const data = [
  ["Months", "Months"],
  ["Jan", 10],
  ["Feb", 70],
  ["March", 80],
  ["April", 100],
  ["May", 120],
  ["June", 130],
];

export const options = {
  vAxis: {
    title: "Logins",
  },
  title: "User Logins in past 6 months",
  curveType: "function",
  legend: { position: "bottom" },
};

export function GoogleCharts() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
