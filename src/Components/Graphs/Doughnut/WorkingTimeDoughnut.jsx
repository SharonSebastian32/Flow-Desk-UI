import React, { memo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import "./WorkingGraph.scss";

const TIME_DATA = {
  series: [60, 20, 40],
  labels: ["At Desk", "Idle", "Offline"],
  colors: ["#4F45B6", "#F8C140", "#F58869"],
  percentages: ["75%", "20%", "5%"],
};

const CHART_HEIGHT = {
  default: 180,
  mobile: 150,
};

const WorkingTimeDonut = () => {
  // Calculate real percentages based on series values
  const total = TIME_DATA.series.reduce((acc, val) => acc + val, 0);
  const calculatedPercentages = TIME_DATA.series.map((value) =>
    Math.round((value / total) * 100)
  );

  // State to track the currently selected segment
  const [selectedSegment, setSelectedSegment] = useState({
    label: "Total",
    percentage: "100%",
    color: "#666666",
  });

  const chartConfig = {
    series: TIME_DATA.series,
    options: {
      chart: {
        type: "donut",
        height: CHART_HEIGHT.default,
        sparkline: { enabled: true },
        events: {
          dataPointSelection: (event, chartContext, config) => {
            const index = config.dataPointIndex;
            setSelectedSegment({
              label: TIME_DATA.labels[index],
              percentage: `${calculatedPercentages[index]}%`,
              color: TIME_DATA.colors[index],
            });
          },
        },
      },
      colors: TIME_DATA.colors,
      labels: TIME_DATA.labels,
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "67%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "14px",
                offsetY: -10,
              },
              value: {
                show: true,
                fontSize: "20px",
                fontWeight: 600,
                color: "#333333",
                formatter: function (val) {
                  const index = TIME_DATA.series.indexOf(Number(val));
                  return `${calculatedPercentages[index]}%`;
                },
              },
              total: {
                fontSize: "14px",
                fontWeight: 400,
                color: selectedSegment.color,
                formatter: function () {
                  return selectedSegment.percentage;
                },
              },
            },
          },
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (val) {
            const index = TIME_DATA.series.indexOf(Number(val));
            return `${calculatedPercentages[index]}%`;
          },
        },
      },
      dataLabels: { enabled: false },
      stroke: { width: 0 },
      legend: { show: false },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: { height: CHART_HEIGHT.mobile },
          },
        },
      ],
    },
  };

  const legendItems = TIME_DATA.labels.map((label, index) => ({
    label,
    value: `${calculatedPercentages[index]}%`,
    className: label.toLowerCase().replace(" ", "-"),
    key: `legend-${index}`,
  }));

  return (
    <div className="working-time-card">
      <h3 className="card-title">Total Working Time</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "60px",
        }}
      >
        <div className="chart-wrapper">
          <ReactApexChart
            options={chartConfig.options}
            series={chartConfig.series}
            type="donut"
            height={CHART_HEIGHT.default}
          />
        </div>
      </div>

      <div className="legend-container" style={{ marginTop: "10px" }}>
        {legendItems.map(({ key, className, label, value }) => (
          <div
            key={key}
            className="legend-item"
            style={{
              margin: "8px 15px",
              cursor: "pointer",
            }}
            onClick={() => {
              const index = legendItems.findIndex((item) => item.key === key);
              setSelectedSegment({
                label: label,
                percentage: value,
                color: TIME_DATA.colors[index],
              });
            }}
          >
            <div className={`legend-marker ${className}`} />
            <span className="legend-label">{label}</span>
            <span className="legend-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(WorkingTimeDonut);
