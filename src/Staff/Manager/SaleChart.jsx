import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const salesData = [
  { day: "Mon", sales: 12000 },
  { day: "Tue", sales: 15000 },
  { day: "Wed", sales: 10000 },
  { day: "Thu", sales: 18000 },
  { day: "Fri", sales: 22000 },
  { day: "Sat", sales: 28000 },
  { day: "Sun", sales: 25000 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold text-slate-800">
            Weekly Sales
          </h2>
          <p className="text-gray-500 text-sm">
            Sales performance for the last 7 days
          </p>
        </div>

        <select className="border rounded-lg px-3 py-2 outline-none">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip
            formatter={(value) => [`₹${value}`, "Sales"]}
          />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}