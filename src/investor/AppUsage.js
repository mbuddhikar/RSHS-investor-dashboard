import React from "react";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Pie } from "react-chartjs-2";

const AppUsage = () => {
  const labels = ["Daily","More than twice a week", "Twice a week", "Once a week","More than Once a month","Once a Month", "Never"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "App usage summary",
        backgroundColor: ["rgb(120, 10, 132)","rgb(10, 99, 300)","rgb(50, 99, 132)","rgb(255, 200, 132)","rgb(0, 99, 30)","rgb(10, 99, 132)","rgb(255, 150, 10)"],
        borderColor: "rgb(255, 99, 132)",
        data: [11, 2, 0, 2, 1, 0, 1],
      },
    ],
  };
  return (
    <div style={{maxWidth: "500px",marginLeft:100}}>
      <h3>How often will participant use the APP?</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default AppUsage;