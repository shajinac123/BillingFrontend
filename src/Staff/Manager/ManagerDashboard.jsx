import {
  IndianRupee,
  ShoppingCart,
  TableProperties,
  Users,
} from "lucide-react";

import Sidebar from "./Sidebar";
import ManagerNavbar from "./ManagerNavbar";
import StatCard from "./StatCard";
import SalesChart from "./SaleChart";
import SalesTable from "./SaleTables";

export default function ManagerDashboard() {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <ManagerNavbar />

        <main className="p-6">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-slate-800">
              Manager Dashboard
            </h1>

            <p className="text-gray-500">
              Welcome back! Here's today's restaurant overview.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <StatCard
              title="Today's Sales"
              value="₹18,540"
              icon={IndianRupee}
              color="bg-green-500"
              percentage="+12%"
            />

            <StatCard
              title="Today's Orders"
              value="148"
              icon={ShoppingCart}
              color="bg-blue-500"
              percentage="+8%"
            />

            <StatCard
              title="Available Tables"
              value="14"
              icon={TableProperties}
              color="bg-yellow-500"
            />

            <StatCard
              title="Staff Present"
              value="12"
              icon={Users}
              color="bg-purple-500"
            />
          </div>

          {/* Sales Chart */}
          <div className="mt-8">
            <SalesChart />
          </div>

          {/* Recent Sales */}
          <div className="mt-8">
            <SalesTable />
          </div>
        </main>
      </div>
    </div>
  );
}