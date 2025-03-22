import React from "react";
import ReactApexChart from "react-apexcharts";
import "./BarChart.css";

const ProductivityBarChart = () => {
  const hours = [
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
  ];

  const series = [
    {
      name: "Productive",
      data: [90, 75, 70, 100, 100, 100, 100, 95, 95, 80, 20, 75],
    },
    {
      name: "Unproductive",
      data: [10, 25, 25, 5, 5, 15, 60, 20],
    },
    {
      name: "Idle",
      data: [0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 20, 5],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    title: {
      text: "Productivity Bar",
      align: "left",
      style: {
        fontSize: "16px",
        fontWeight: "bold",
      },
    },
    xaxis: {
      categories: hours,
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return val + "%";
        },
      },
      max: 100,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    fill: {
      opacity: 1,
    },
    colors: ["#F47B3E", "#DE4313", "#F8C140"],
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: "#f1f1f1",
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <div className="w-full p-4 border rounded">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={230}
      />
    </div>
  );
};

export default ProductivityBarChart;
