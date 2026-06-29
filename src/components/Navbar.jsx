import {
  Search,
  Bell,
  User,
  LogOut,
  CalendarDays,
  DollarSign,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("staff");
    navigate("/");
  };

  return (
    <header className="bg-white shadow border-b sticky top-0 z-50">
      <div className="flex items-center justify-between h-16 px-6">

        {/* Left */}
        <div className="flex items-center gap-6">

          <div>
            <h1 className="text-2xl font-bold text-orange-600">
              🍽️ Spice Garden
            </h1>
            <p className="text-xs text-gray-500">
              Restaurant Billing System
            </p>
          </div>

          <div className="hidden lg:flex relative">
            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search menu, bill, customer..."
              className="w-80 border rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-5">

          {/* Date */}
          <div className="hidden md:flex items-center gap-2 text-gray-600">
            <CalendarDays size={18} />
            <span>{new Date().toLocaleDateString()}</span>
          </div>

          {/* Today's Sales */}
          <div className="hidden lg:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
            <DollarSign size={18} />
            <span className="font-semibold">
              ₹12,500
            </span>
          </div>

          {/* Notification */}
          <button className="relative p-2 rounded-lg hover:bg-gray-100">
            <Bell size={22} />

            <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center">
              <User size={20} />
            </div>

            <div className="hidden md:block">
              <h3 className="font-semibold">
                Admin
              </h3>
              <p className="text-xs text-gray-500">
                Restaurant Manager
              </p>
            </div>

          </div>

          {/* Logout */}
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </div>
    </header>
  );
}