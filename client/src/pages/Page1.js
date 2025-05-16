import React from "react";
import { LineChart, Line, PieChart, Pie, Cell, Tooltip } from "recharts";

const Dashboard = () => {
  const pieData = [
    { name: "Label Here", value: 60 },
    { name: "Label Here", value: 40 },
  ];

  const lineData = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 120 },
    { name: "Mar", value: 80 },
    { name: "Apr", value: 150 },
    { name: "May", value: 130 },
  ];

  return (
    <div className="p-4 bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <h1 className="text-xl font-bold">Logoipsum</h1>
        <nav className="flex gap-4">
          <a href="#" className="text-blue-600">Dashboard</a>
          <a href="#">Add User</a>
          <a href="#">Generate Analytics</a>
          <a href="#">Send Report</a>
          <a href="#">Previous Reports</a>
          <a href="#">Log out</a>
        </nav>
        <div className="flex items-center gap-2">
          <span>username</span>
          <button className="p-2 bg-gray-200 rounded-full">🔔</button>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {Array(4)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="p-4 bg-white shadow rounded">
              <h2 className="text-lg font-bold">Title Here</h2>
              <p className="text-2xl font-semibold">15,565</p>
              <p className="text-sm text-green-500">+5% than last month</p>
              <LineChart width={100} height={50} data={lineData}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
              </LineChart>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <h2 className="text-lg font-bold mb-2">Chart Title Here</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={pieData}
              cx={100}
              cy={100}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={index === 0 ? "#8884d8" : "#82ca9d"} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Chart Title Here</h2>
          <LineChart width={400} height={200} data={lineData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        {[...Array(4)].map((_, index) => (
          <img
            key={index}
            src="https://via.placeholder.com/150"
            alt="Sample"
            className="w-1/4 rounded"
          />
        ))}
      </div>

      <div className="mt-4">
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x300"
            alt="Video Thumbnail"
            className="w-full rounded"
          />
          <button className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-50">
            ▶
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">Chart Title</h2>
          <LineChart width={300} height={100} data={lineData}>
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h2 className="text-lg font-bold">2025 Monday First</h2>
          <div className="grid grid-cols-12 gap-1">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="h-4 w-4 bg-purple-400"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
