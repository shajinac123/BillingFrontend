import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Tags,
  Users,
  TableProperties,
  ClipboardList,
  CreditCard,
  BarChart3,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(null);

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/managerdashboard",
    },
    {
      title: "Products",
      icon: Package,
      children: [
        {
          title: "Product List",
          path: "/products",
        },
        {
          title: "Add Product",
          path: "/products/add",
        },
      ],
    },
    {
      title: "Categories",
      icon: Tags,
      children: [
        {
          title: "Category List",
          path: "/categories",
        },
        {
          title: "Add Category",
          path: "/categories/add",
        },
      ],
    },
    {
      title: "Staff",
      icon: Users,
      children: [
        {
          title: "Staff List",
          path: "/staff",
        },
        {
          title: "Add Staff",
          path: "/staff/add",
        },
        {
          title: "Staff Login",
          path: "/staff/login",
        },
      ],
    },
    {
      title: "Tables",
      icon: TableProperties,
      path: "/saletables",
    },
    {
      title: "Orders",
      icon: ClipboardList,
      path: "/manageorder",
    },
    {
      title: "Billing",
      icon: CreditCard,
      path: "/billing",
    },
    {
      title: "Reports",
      icon: BarChart3,
      path: "/manager/reports",
    },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("staff");
    navigate("/staff/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold text-center">Restaurant POS</h1>
        <p className="text-center text-sm text-gray-400">Manager Panel</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4">

        {menuItems.map((item) => {
          const Icon = item.icon;

          if (item.children) {
            return (
              <div key={item.title}>
                <button
                  onClick={() =>
                    setOpenMenu(
                      openMenu === item.title ? null : item.title
                    )
                  }
                  className="w-full flex items-center justify-between px-6 py-3 text-gray-300 hover:bg-slate-800"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span>{item.title}</span>
                  </div>

                  {openMenu === item.title ? (
                    <ChevronDown size={18} />
                  ) : (
                    <ChevronRight size={18} />
                  )}
                </button>

                {openMenu === item.title && (
                  <div className="bg-slate-800">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block pl-16 pr-6 py-2 text-sm ${
                            isActive
                              ? "bg-blue-600 text-white"
                              : "text-gray-300 hover:bg-slate-700"
                          }`
                        }
                      >
                        {child.title}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              {item.title}
            </NavLink>
          );
        })}

      </nav>

      {/* Logout */}
      <button
        onClick={logout}
        className="flex items-center gap-3 px-6 py-4 bg-red-600 hover:bg-red-700"
      >
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}