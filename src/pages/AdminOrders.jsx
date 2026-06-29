import { useState } from "react";


const initialOrders = [
  {
    id: "ORD001",
    table: "T01",
    customer: "John",
    items: 3,
    total: 850,
    status: "Preparing",
    payment: "Unpaid",
  },
  {
    id: "ORD002",
    table: "T05",
    customer: "Rahul",
    items: 5,
    total: 1250,
    status: "Served",
    payment: "Paid",
  },
  {
    id: "ORD003",
    table: "Takeaway",
    customer: "Priya",
    items: 2,
    total: 450,
    status: "Pending",
    payment: "Unpaid",
  },
];

export default function Orders() {
  const [orders, setOrders] = useState(initialOrders);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchFilter =
      filter === "All" ? true : order.status === filter;

    return matchSearch && matchFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Preparing":
        return "bg-blue-100 text-blue-700";
      case "Served":
        return "bg-green-100 text-green-700";
      case "Cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <h1 className="text-3xl font-bold mb-6">
        Orders Management
      </h1>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search Order / Customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-2 w-80"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option>All</option>
          <option>Pending</option>
          <option>Preparing</option>
          <option>Served</option>
          <option>Cancelled</option>
        </select>

      </div>

      {/* Table */}

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full">

          <thead className="bg-gray-200">

            <tr>
              <th className="p-3 text-left">Order ID</th>
              <th className="p-3 text-left">Table</th>
              <th className="p-3 text-left">Customer</th>
              <th className="p-3 text-center">Items</th>
              <th className="p-3 text-center">Total</th>
              <th className="p-3 text-center">Status</th>
              <th className="p-3 text-center">Payment</th>
              <th className="p-3 text-center">Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-3">{order.id}</td>

                <td className="p-3">{order.table}</td>

                <td className="p-3">{order.customer}</td>

                <td className="p-3 text-center">{order.items}</td>

                <td className="p-3 text-center">
                  ₹{order.total}
                </td>

                <td className="p-3 text-center">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>

                <td className="p-3 text-center">
                  {order.payment}
                </td>

                <td className="p-3 text-center space-x-2">

                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                    View
                  </button>

                  <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                    Bill
                  </button>

                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
                    Cancel
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}