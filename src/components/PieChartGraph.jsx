import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Crowd Investor", value: 80, color: "#0088FE" },
  { name: "Foundation", value: 20, color: "orange" },
];

const PieChartGraph = () => {
  return (
    <div className="flex md:flex-row vsm:flex-col items-center gap-5">
      <ResponsiveContainer width="60%" height={200}>
        <PieChart width={800} height={400} >
          <Tooltip
            contentStyle={{ background: "white", borderRadius: "5px" }}
          />
          <Pie
            data={data}
            cx={100}
            cy={100}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            <Tooltip />
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="">
        {data.map((item) => (
          <div className="flex gap-5" key={item.name}>
            <div className="flex justify-center gap-2 items-center">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="font-medium">{item.name}:</span>
            </div>
            <span className="font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartGraph;
