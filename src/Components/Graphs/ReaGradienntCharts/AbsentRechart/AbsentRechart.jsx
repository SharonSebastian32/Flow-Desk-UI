import "./AbsentRechart.scss";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const AbsentRechart = () => {
  const data = [
    { name: "Jan", value: 10 },
    { name: "Feb", value: 20 },
    { name: "Mar", value: 10 },
    { name: "Apr", value: 20 },
    { name: "May", value: 10 },
    { name: "Jun", value: 0 },
    { name: "Jul", value: 10 },
    { name: "Aug", value: 20 },
    { name: "Sep", value: 10 },
    { name: "Oct", value: 20 },
  ];

  return (
    <div className="growth-graph-container">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorGradient1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF5151" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#FF5151" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis dataKey="name" hide={true} />
          <YAxis hide={true} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#FF5151"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorGradient1)"
            dot={false}
            activeDot={false}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Growth indicator */}
      <div
        className="growth-indicator"
        style={{
          paddingBottom: "30px",
          color: "#FF5151",
        }}
      >
        +2%
        <div className="arrow-container">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19L12 5"
              stroke="#FF5151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12L12 5L19 12"
              stroke="#FF5151"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AbsentRechart;
