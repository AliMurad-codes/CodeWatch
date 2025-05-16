import React, { useState } from 'react';
import "../styles.css"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  AreaChart,
  Area,
  defs,
  linearGradient,
} from 'recharts';
import { HeatMapGrid } from "react-grid-heatmap";

const data = [
  { name: 'Label Here', value: 70 },
  { name: 'Label Here', value: 30 }
];
const COLORS = ['#3F3D9B', '#9B9BFF'];

const data_1 = [
  { month: 'Jan', value: 80 },
  { month: 'Feb', value: 120 },
  { month: 'Mar', value: 100 },
  { month: 'Apr', value: 60 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 70 },
  { month: 'Jul', value: 60 },
];

const data_2 = [
  { month: 'Jan', Content1: 10, Content2: 20, Content3: -15 },
  { month: 'Feb', Content1: 15, Content2: 25, Content3: -10 },
  { month: 'Mar', Content1: -30, Content2: 10, Content3: 5 },
  { month: 'Apr', Content1: 5, Content2: -10, Content3: 15 },
  { month: 'May', Content1: -20, Content2: 15, Content3: 20 },
  { month: 'Jun', Content1: 25, Content2: 5, Content3: 30 },
];

const Card = ({ children }) => (
  <div className="shadow-lg rounded-xl p-4 bg-white w-full h-full">
    {children}
  </div>
);

const DropdownMenu = () => (
  <div className="relative">
    <button className="text-sm font-medium">This Week</button>
    <ul className="absolute mt-2 shadow-md bg-white rounded-md">
      <li className="p-2 hover:bg-gray-100">This Month</li>
      <li className="p-2 hover:bg-gray-100">This Year</li>
    </ul>
  </div>
);

const days = ["M", "T", "W", "T", "F", "S", "S"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Sample data (12 months x 7 days)
const data_3 = Array(7)
  .fill(0)
  .map(() => Array(12).fill(0).map(() => Math.random()));
console.log(data_3)


const Home = () => {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [isSendReportModalOpen, setSendReportModalOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md">
            <div className="text-lg font-bold">15,565</div>
            <div className="text-sm text-green-500">+5% than last month</div>
            <div className="h-12 bg-gray-100 mt-2"></div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div
          className="p-4 rounded bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(./image1.png)', height: '475px' }}
        >
            <div className="w-full h-full bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Chart Title Here</h2>
                <div className="w-full h-[calc(100%-2rem)]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                            data={data}
                            innerRadius={80}
                            outerRadius={120}
                            paddingAngle={3}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} cornerRadius={5} />
                            ))}
                            </Pie>
                            <Legend verticalAlign="bottom" iconType="circle" />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
        </div>
        </div>
        <div
          className="p-4 col-span-2 rounded bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(./image2.png)', height: '475px' }}
        >
            <div className="w-full h-full bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Chart Title Here</h2>
                <ResponsiveContainer width="100%" height="80%">
                    <AreaChart data={data_1}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3F3D9B" stopOpacity={0.4} />
                        <stop offset="100%" stopColor="#3F3D9B" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#3F3D9B"
                        fill="url(#colorValue)"
                        strokeWidth={3}
                        dot={false}
                    />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
        </div>
      </div>

      {/* Images Carousel */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="h-32 bg-gray-200 bg-cover bg-no-repeat"
              style={{ backgroundImage: 'url(./image.png)' }}
            ></div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-white p-4 rounded shadow-md mb-6">
        <div
          className="h-64 bg-gray-300 flex items-center justify-center bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(./image3.png)' }}
        >
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Play</button>
        </div>
      </div>

      {/* Footer Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div
          className="bg-white p-4 rounded shadow-md bg-no-repeat bg-contain"
          style={{ backgroundImage: 'url(./image4.png)', }}
        >
            <div className="w-full h-full">
                <Card>
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">CHART TITLE</h2>
                    <DropdownMenu />
                    </div>
                    <div className="mb-4">
                    <div className="text-4xl font-bold text-blue-600">5.000,00</div>
                    <div className="text-sm text-gray-500">50 Orders</div>
                    </div>
                    <BarChart width={300} height={200} data={data_2}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Content1" fill="#8884d8" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Content2" fill="#82ca9d" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="Content3" fill="#ffc658" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </Card>
            </div>
        </div>
        <div
          className="bg-white col-span-2 p-4 rounded shadow-md bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(./image5.png)', }}
        >
            <div className="flex flex-col items-center p-4 w-full">
                <h1 className="text-xl font-bold mb-4">2025 Monday first</h1>
                <div className="w-full">
                    <HeatMapGrid
                    xLabels={months}
                    yLabels={days}
                    data={data_3}
                    cellStyle={(background, value) => ({
                        background: `rgba(63, 81, 181, ${Math.random()})`,
                        border: "1px solid #ccc",
                        marginRight: "35px"
                        
                    })}
                    xLabelsStyle={() => ({
                        color: "#555",
                        fontSize: "12px",
                        textAlign: "center",
                        marginRight: "35px"
                    })}
                    yLabelsStyle={() => ({
                        color: "#555",
                        fontSize: "12px",
                        textAlign: "right",
                        marginRight: "5px",
                    })}
                    xLabelWidth={60}
                    yLabelWidth={40}
                    cellHeight='40px'
                    square
                    />
                </div>
                <div className="flex justify-between w-full mt-4">
                    <span className="text-sm">Less</span>
                    <span className="text-sm">More</span>
                </div>
            </div>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddUserModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
          onClick={() => setAddUserModalOpen(false)}
        >
          <div
            className="relative bg-white p-8 rounded-lg shadow-lg w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
              onClick={() => setAddUserModalOpen(false)}
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <div className="bg-gray-200 p-4 rounded-full mb-4">
                {/* SVG Icon */}
                <svg
                  className="w-12 h-12 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.5a4 4 0 11-8 0 4 4 0 118 0zm5 6.5H7v2h10v-2zm-7 0v-1a3 3 0 013-3 3 3 0 013 3v1h-6z"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Add Member</h2>
              <form className="w-full space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex space-x-2">
                  <select
                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <input
                    type="text"
                    placeholder="ID"
                    className="w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <input
                  type="text"
                  placeholder="Contact"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex flex-col items-center border-dashed border-2 rounded-lg p-4">
                  <p className="text-gray-500">
                    Drop images here or{' '}
                    <a href="#" className="text-blue-500 hover:underline">
                      browse files
                    </a>
                  </p>
                </div>
                <select
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Assign Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Add User
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Send Report Modal */}
      {isSendReportModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-900 bg-opacity-50"
            onClick={() => setSendReportModalOpen(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-96 relative">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Send Report</h2>
                <button
                  className="text-gray-500 hover:text-red-600"
                  onClick={() => setSendReportModalOpen(false)}
                >
                  &times;
                </button>
              </div>
              <form className="space-y-4">
                <select
                  name="violation_id"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Violation ID
                  </option>
                  <option value="v1">Violation 1</option>
                  <option value="v2">Violation 2</option>
                  <option value="v3">Violation 3</option>
                </select>
                <input
                  type="text"
                  name="student_id"
                  placeholder="Student ID"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <select
                  name="department"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="" disabled selected>
                    Choose Department
                  </option>
                  <option value="dept1">Department 1</option>
                  <option value="dept2">Department 2</option>
                  <option value="dept3">Department 3</option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                >
                  Send Report
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={() => setAddUserModalOpen(true)}
        >
          Add User
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => setSendReportModalOpen(true)}
        >
          Send Report
        </button>
      </div>
    </div>
  );
};

export default Home;
