import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["Meal Suggestion (diet planning)", "Activity Suggestion", "Monitoring & tracking Activities", "Social media news feed and Rewards System", "Covid-19 Advice"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Most valuable feature",
        backgroundColor: ["rgb(120, 10, 132)","rgb(10, 99, 300)","rgb(50, 99, 132)","rgb(255, 200, 132)","rgb(0, 99, 30)","rgb(10, 99, 132)","rgb(255, 150, 10)"],
        borderColor: "rgb(255, 99, 132)",
        data: [13, 8, 10, 6, 8],
      },
    ],
  };
  return (
    <div style={{maxWidth: "1000px",marginLeft:10}}>
    <h3>Which features are most valuable to the participant?</h3>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;