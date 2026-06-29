import { useState } from "react";
import { Bell, Search, User, LogOut } from "lucide-react";

export default function CashierNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      
      {/* Left: Title */}
      <div className="text-lg font-semibold text-slate-700">
        Cashier Dashboard
      </div>

      {/* Middle: Search */}
      <div className="hidden md:flex items-center bg-slate-100 px-3 py-2 rounded-lg w-80">
        <Search size={18} className="text-slate-500" />
        <input
          type="text"
          placeholder="Search products, orders..."
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-5 relative">
        
        {/* Notification */}
        <button className="relative">
          <Bell size={22} className="text-slate-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2"
          >
            <div className="w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center">
              C
            </div>
          </button>

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 w-48 bg-white border rounded-lg shadow-lg overflow-hidden">
              <div className="p-3 border-b">
                <p className="font-semibold">Cashier</p>
                <p className="text-xs text-slate-500">cashier@shop.com</p>
              </div>

              <button className="flex items-center gap-2 w-full px-4 py-2 hover:bg-slate-100">
                <User size={16} />
                Profile
              </button>

              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.href = "/login";
                }}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-red-100 text-red-600"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}