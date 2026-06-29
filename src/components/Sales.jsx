import {
  DollarSign,
  ShoppingCart,
  Receipt,
  TrendingUp,
} from "lucide-react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Sales() {
  const recentSales = [
    {
      id: 1,
      customer: "John",
      amount: 450,
      payment: "Cash",
      date: "29 Jun 2026",
    },
    {
      id: 2,
      customer: "David",
      amount: 720,
      payment: "Card",
      date: "29 Jun 2026",
    },
    {
      id: 3,
      customer: "Amina",
      amount: 1150,
      payment: "UPI",
      date: "29 Jun 2026",
    },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-slate-100 min-h-screen">
        {/* Navbar */}
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold text-slate-700 mb-6">
            Sales Dashboard
          </h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
              <DollarSign className="text-green-600" size={35} />
              <div>
                <p className="text-gray-500">Today's Sales</p>
                <h2 className="text-2xl font-bold">₹12,500</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
              <Receipt className="text-blue-600" size={35} />
              <div>
                <p className="text-gray-500">Orders</p>
                <h2 className="text-2xl font-bold">58</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
              <ShoppingCart className="text-purple-600" size={35} />
              <div>
                <p className="text-gray-500">Products Sold</p>
                <h2 className="text-2xl font-bold">214</h2>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
              <TrendingUp className="text-red-600" size={35} />
              <div>
                <p className="text-gray-500">Monthly Revenue</p>
                <h2 className="text-2xl font-bold">₹3,45,000</h2>
              </div>
            </div>
          </div>

          {/* Recent Sales */}
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div className="p-5 border-b">
              <h2 className="text-xl font-semibold">Recent Sales</h2>
            </div>

            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-4 text-left">Order ID</th>
                  <th className="p-4 text-left">Customer</th>
                  <th className="p-4 text-left">Payment</th>
                  <th className="p-4 text-left">Amount</th>
                  <th className="p-4 text-left">Date</th>
                </tr>
              </thead>

              <tbody>
                {recentSales.map((sale) => (
                  <tr
                    key={sale.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-4">#{sale.id}</td>
                    <td className="p-4">{sale.customer}</td>
                    <td className="p-4">{sale.payment}</td>
                    <td className="p-4 font-semibold text-green-600">
                      ₹{sale.amount}
                    </td>
                    <td className="p-4">{sale.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}