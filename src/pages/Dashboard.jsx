import { useContext } from "react";
import {
  ShoppingCart,
  IndianRupee,
  Package,
  Tags,
} from "lucide-react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  const { admin, logout } = useContext(AuthContext);

  const cards = [
    {
      title: "Today's Sales",
      value: "₹12,560",
      icon: <IndianRupee size={30} />,
      color: "bg-green-500",
    },
    {
      title: "Orders",
      value: "38",
      icon: <ShoppingCart size={30} />,
      color: "bg-blue-500",
    },
    {
      title: "Products",
      value: "86",
      icon: <Package size={30} />,
      color: "bg-purple-500",
    },
    {
      title: "Categories",
      value: "12",
      icon: <Tags size={30} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">

          {/* Welcome */}
          <div className="bg-white rounded-xl shadow p-6 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome, {admin?.name} 👋
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your restaurant billing system efficiently.
              </p>
            </div>

            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
            >
              Logout
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-5 flex justify-between items-center hover:shadow-lg transition"
              >
                <div>
                  <h3 className="text-gray-500">{card.title}</h3>

                  <h2 className="text-3xl font-bold mt-2">
                    {card.value}
                  </h2>
                </div>

                <div
                  className={`${card.color} text-white p-4 rounded-full`}
                >
                  {card.icon}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Recent Orders
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2">
                  <span>Chicken Biriyani</span>
                  <span>₹180</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span>Fried Rice</span>
                  <span>₹140</span>
                </div>

                <div className="flex justify-between">
                  <span>Shawarma</span>
                  <span>₹120</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold mb-4">
                Top Selling Products
              </h2>

              <ul className="space-y-3">
                <li>🥇 Chicken Biriyani</li>
                <li>🥈 Alfaham</li>
                <li>🥉 Shawarma</li>
                <li>🍔 Burger</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}