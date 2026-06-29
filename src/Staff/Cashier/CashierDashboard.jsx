import {
  IndianRupee,
  Receipt,
  Users,
  Clock,
} from "lucide-react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import CashierSidebar from "../../staff/Cashier/CashierSidebar";
import CashierNavbar from "../../staff/Cashier/CashierNavbar";

const salesData = [
  { day: "Mon", sales: 5000 },
  { day: "Tue", sales: 7200 },
  { day: "Wed", sales: 6100 },
  { day: "Thu", sales: 8500 },
  { day: "Fri", sales: 9800 },
  { day: "Sat", sales: 12500 },
  { day: "Sun", sales: 11000 },
];

const recentBills = [
  {
    id: "#1001",
    customer: "Rahul",
    amount: "₹540",
    payment: "Cash",
    status: "Paid",
  },
  {
    id: "#1002",
    customer: "Anu",
    amount: "₹760",
    payment: "UPI",
    status: "Paid",
  },
  {
    id: "#1003",
    customer: "John",
    amount: "₹420",
    payment: "Card",
    status: "Pending",
  },
  {
    id: "#1004",
    customer: "Sara",
    amount: "₹980",
    payment: "Cash",
    status: "Paid",
  },
];

const cards = [
  {
    title: "Today's Sales",
    value: "₹12,450",
    icon: IndianRupee,
    color: "bg-green-500",
  },
  {
    title: "Bills Generated",
    value: "54",
    icon: Receipt,
    color: "bg-blue-500",
  },
  {
    title: "Customers",
    value: "38",
    icon: Users,
    color: "bg-purple-500",
  },
  {
    title: "Pending Bills",
    value: "7",
    icon: Clock,
    color: "bg-orange-500",
  },
];

export default function CashierDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <CashierSidebar />

      <div className="flex-1">
        <CashierNavbar />

        <div className="p-6">

          {/* Heading */}

          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-700">
              Cashier Dashboard
            </h1>

            <p className="text-gray-500">
              Welcome back! Here's today's billing summary.
            </p>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center"
                >
                  <div>
                    <p className="text-gray-500">{card.title}</p>

                    <h2 className="text-3xl font-bold mt-2">
                      {card.value}
                    </h2>
                  </div>

                  <div className={`${card.color} p-4 rounded-full`}>
                    <Icon size={28} className="text-white" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chart + Payment Summary */}

          <div className="grid lg:grid-cols-3 gap-6 mb-8">

            {/* Sales Chart */}

            <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-5">
              <h2 className="text-xl font-semibold mb-4">
                Weekly Sales
              </h2>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="day" />

                  <YAxis />

                  <Tooltip />

                  <Bar dataKey="sales" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Payment Summary */}

            <div className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-xl font-semibold mb-5">
                Payment Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">
                  <span>Cash</span>
                  <span className="font-bold">₹6,300</span>
                </div>

                <div className="flex justify-between">
                  <span>UPI</span>
                  <span className="font-bold">₹4,250</span>
                </div>

                <div className="flex justify-between">
                  <span>Card</span>
                  <span className="font-bold">₹1,900</span>
                </div>

                <div className="border-t pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹12,450</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bills */}

          <div className="bg-white rounded-xl shadow-md p-5">

            <h2 className="text-xl font-semibold mb-5">
              Recent Bills
            </h2>

            <div className="overflow-x-auto">

              <table className="w-full">

                <thead className="bg-slate-100">

                  <tr>
                    <th className="text-left p-3">Bill</th>
                    <th className="text-left p-3">Customer</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Payment</th>
                    <th className="text-left p-3">Status</th>
                  </tr>

                </thead>

                <tbody>

                  {recentBills.map((bill) => (
                    <tr
                      key={bill.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{bill.id}</td>

                      <td className="p-3">{bill.customer}</td>

                      <td className="p-3">{bill.amount}</td>

                      <td className="p-3">{bill.payment}</td>

                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            bill.status === "Paid"
                              ? "bg-green-100 text-green-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {bill.status}
                        </span>
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}