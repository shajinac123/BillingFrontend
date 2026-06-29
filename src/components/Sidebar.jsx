import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Tags,
  BarChart3,
  Users,
  Menu,
  ChevronLeft,
  ChevronDown,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openMenus, setOpenMenus] = useState({});

  const navigate = useNavigate();

  const toggleMenu = (name) => {
    setOpenMenus((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "Billing",
      icon: ShoppingCart,
      path: "/billing",
    },
    {
      name: "Products",
      icon: Package,
      children: [
        {
          name: "Product List",
          path: "/products",
        },
        {
          name: "Add Product",
          path: "/products/add",
        },
      ],
    },
    {
      name: "Categories",
      icon: Tags,
      children: [
        {
          name: "Category List",
          path: "/categories",
        },
        {
          name: "Add Category",
          path: "/categories/add",
        },
      ],
    },
    {
      name: "Staff",
      icon: Users,
      children: [
        {
          name: "Staff List",
          path: "/staff",
        },
        {
          name: "Add Staff",
          path: "/staff/add",
        },
         {
          name: "Staff Login",
          path: "/staff/login",
        },
      ],
    },
    {
      name: "Sales",
      icon: BarChart3,
      path: "/sales",
    },
     {
      name: "Inventory",
      icon: BarChart3,
      path: "/inventory",
    },
  ];

  return (
    <div
      className={`h-screen bg-slate-900 text-white flex flex-col transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between p-5 border-b border-slate-800">
        {!collapsed && (
          <h1 className="text-xl font-bold tracking-wide">
            Restaurant POS
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-slate-800"
        >
          {collapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 py-5 space-y-2 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          if (item.children) {
            return (
              <div key={item.name}>
                <button
                  onClick={() => toggleMenu(item.name)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-800 text-slate-300 transition"
                >
                  <div className="flex items-center gap-4">
                    <Icon size={22} />
                    {!collapsed && <span>{item.name}</span>}
                  </div>

                  {!collapsed &&
                    (openMenus[item.name] ? (
                      <ChevronDown size={18} />
                    ) : (
                      <ChevronRight size={18} />
                    ))}
                </button>

                {!collapsed &&
                  openMenus[item.name] && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.children.map((child) => (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 rounded-lg text-sm transition ${
                              isActive
                                ? "bg-indigo-600 text-white"
                                : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            }`
                          }
                        >
                          {child.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "hover:bg-slate-800 text-slate-300"
                }`
              }
            >
              <Icon size={22} />

              {!collapsed && <span>{item.name}</span>}
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <div className="p-4 border-t border-slate-800">
        <button
          onClick={() => navigate("/")}
          className="w-full flex items-center gap-4 p-3 rounded-xl hover:bg-red-500 transition"
        >
          <LogOut size={22} />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}