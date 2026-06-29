import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipboardList, Table, CheckCircle, Clock, LogOut } from "lucide-react";

export default function WaiterDashboard() {
  const navigate = useNavigate();

  const [tables] = useState([
    { id: 1, status: "Available" },
    { id: 2, status: "Occupied" },
    { id: 3, status: "Occupied" },
    { id: 4, status: "Available" },
    { id: 5, status: "Reserved" },
  ]);

  const [orders] = useState([
    { id: 101, table: 2, status: "Preparing" },
    { id: 102, table: 3, status: "Served" },
    { id: 103, table: 1, status: "New Order" },
  ]);

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear login session
    navigate("/staff/login"); // redirect to staff login page
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-700">
          Waiter Dashboard
        </h1>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <Table className="text-blue-600" />
          <div>
            <p className="text-sm text-slate-500">Total Tables</p>
            <p className="text-xl font-bold">{tables.length}</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <CheckCircle className="text-green-600" />
          <div>
            <p className="text-sm text-slate-500">Served Orders</p>
            <p className="text-xl font-bold">
              {orders.filter(o => o.status === "Served").length}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <Clock className="text-yellow-600" />
          <div>
            <p className="text-sm text-slate-500">Preparing</p>
            <p className="text-xl font-bold">
              {orders.filter(o => o.status === "Preparing").length}
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center gap-3">
          <ClipboardList className="text-purple-600" />
          <div>
            <p className="text-sm text-slate-500">New Orders</p>
            <p className="text-xl font-bold">
              {orders.filter(o => o.status === "New Order").length}
            </p>
          </div>
        </div>
      </div>

      {/* Tables Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Tables Status</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tables.map((table) => (
            <div
              key={table.id}
              className={`p-4 rounded-lg text-center font-semibold ${
                table.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : table.status === "Occupied"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              <p>Table {table.id}</p>
              <p className="text-sm">{table.status}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Orders Section */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Order ID</th>
              <th>Table</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="py-2">#{order.id}</td>
                <td>Table {order.table}</td>
                <td>{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}