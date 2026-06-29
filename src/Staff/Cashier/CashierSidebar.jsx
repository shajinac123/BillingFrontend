import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  ShoppingCart,
  Package,
  LogOut,
} from "lucide-react";

export default function CashierSidebar() {
  const menu = [
    {
      name: "Dashboard",
      path: "/CashierDashboard",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Billing",
      path: "/CashierBilling",
      icon: <Receipt size={20} />,
    },
    {
      name: "Products",
      path: "/CashierProductList",
      icon: <Package size={20} />,
    },
    {
      name: "Orders",
      path: "/CashierOrders",
      icon: <ShoppingCart size={20} />,
    },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-5 text-xl font-bold border-b border-slate-700">
        Cashier Panel
      </div>

      {/* Menu */}
      <nav className="flex-1 p-3 space-y-2">
        {menu.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg transition ${
                isActive
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-3 border-t border-slate-700">
        <button
          className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-red-600 transition"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}