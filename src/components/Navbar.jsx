import { Bell, Moon, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between h-16 px-6">

        {/* Search */}
        <div className="relative w-96 hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-xl bg-slate-100 py-2.5 pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <button className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Moon size={18} />
          </button>

          {/* Notifications */}
          <button className="relative w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition">
            <Bell size={18} />

            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 cursor-pointer rounded-xl px-3 py-2 hover:bg-slate-100 transition">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <User size={18} />
            </div>

            <div className="hidden md:block">
              <h4 className="font-semibold text-slate-700">
                Admin
              </h4>

              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}