import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  color = "bg-blue-500",
  percentage,
}) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <p className="text-gray-500 text-sm">{title}</p>

          <h2 className="text-3xl font-bold mt-2 text-slate-800">
            {value}
          </h2>

          {percentage && (
            <div className="flex items-center mt-3 text-green-600 text-sm">
              <TrendingUp size={16} className="mr-1" />
              {percentage}
            </div>
          )}
        </div>

        {/* Right */}
        <div
          className={`w-16 h-16 rounded-xl ${color} flex items-center justify-center text-white`}
        >
          {Icon && <Icon size={30} />}
        </div>
      </div>
    </div>
  );
}