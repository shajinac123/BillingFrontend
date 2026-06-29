import { Search, Bell, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ManagerNavbar() {
  const navigate = useNavigate();

  const manager = JSON.parse(localStorage.getItem("staff"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("staff");
    navigate("/staff/login");
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Restaurant Logo"
            className="w-10 h-10 rounded-full object-cover"
          />

          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Restaurant POS
            </h2>
            <p className="text-xs text-gray-500">
              Manager Dashboard
            </p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <Search size={18} className="text-gray-500" />

        <input
          type="text"
          placeholder="Search products, orders..."
          className="bg-transparent outline-none px-3 w-full"
        />
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button className="relative">
          <Bell
            size={24}
            className="text-gray-700 hover:text-blue-600"
          />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <img
            src="https://ui-avatars.com/api/?name=Manager&background=2563eb&color=fff"
            alt="Manager"
            className="w-10 h-10 rounded-full"
          />

          <div className="hidden md:block">
            <h4 className="font-semibold text-slate-800">
              {manager?.name || "Manager"}
            </h4>

            <p className="text-sm text-gray-500">
              {manager?.role || "Manager"}
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </header>
  );
}