import { Eye, Printer, Download } from "lucide-react";

export default function SalesTable() {
  const sales = [
    {
      id: 1,
      invoice: "INV-1001",
      customer: "Rahul",
      table: "T1",
      payment: "Cash",
      amount: 850,
      date: "24 Jun 2026",
      status: "Paid",
    },
    {
      id: 2,
      invoice: "INV-1002",
      customer: "Anjali",
      table: "T5",
      payment: "UPI",
      amount: 1450,
      date: "24 Jun 2026",
      status: "Paid",
    },
    {
      id: 3,
      invoice: "INV-1003",
      customer: "Arun",
      table: "T3",
      payment: "Card",
      amount: 980,
      date: "24 Jun 2026",
      status: "Paid",
    },
    {
      id: 4,
      invoice: "INV-1004",
      customer: "Sneha",
      table: "T7",
      payment: "Cash",
      amount: 620,
      date: "24 Jun 2026",
      status: "Paid",
    },
    {
      id: 5,
      invoice: "INV-1005",
      customer: "Vijay",
      table: "T2",
      payment: "UPI",
      amount: 1120,
      date: "24 Jun 2026",
      status: "Paid",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-xl font-bold text-slate-800">
          Recent Sales
        </h2>

        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search Invoice..."
            className="border rounded-lg px-4 py-2 outline-none"
          />

          <select className="border rounded-lg px-4 py-2 outline-none">
            <option>All Payments</option>
            <option>Cash</option>
            <option>UPI</option>
            <option>Card</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3">Invoice No</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Table</th>
              <th className="p-3">Payment</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-3 font-medium">{sale.invoice}</td>
                <td className="p-3">{sale.customer}</td>
                <td className="p-3">{sale.table}</td>
                <td className="p-3">{sale.payment}</td>
                <td className="p-3 font-semibold text-green-600">
                  ₹{sale.amount}
                </td>
                <td className="p-3">{sale.date}</td>

                <td className="p-3">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {sale.status}
                  </span>
                </td>

                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg"
                      title="View"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                      title="Print"
                    >
                      <Printer size={18} />
                    </button>

                    <button
                      className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-lg"
                      title="Download"
                    >
                      <Download size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}