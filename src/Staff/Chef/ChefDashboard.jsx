import {
  FaUtensils,
  FaClipboardList,
  FaFire,
  FaCheckCircle,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "Completed", value: 45 },
  { name: "Preparing", value: 18 },
  { name: "Pending", value: 12 },
];

const COLORS = ["#10b981", "#f59e0b", "#ef4444"];

export default function Dashboard() {
  return (
    <div className="container-fluid py-4">

      {/* Heading */}
      <div className="mb-4">
        <h2 className="fw-bold">👨‍🍳 Chef Dashboard</h2>
        <p className="text-muted">
          Welcome back! Here's today's kitchen overview.
        </p>
      </div>

      {/* Cards */}

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>Total Orders</h6>
                <h2 className="fw-bold">75</h2>
              </div>

              <FaClipboardList
                size={40}
                className="text-primary"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>Preparing</h6>
                <h2 className="fw-bold">18</h2>
              </div>

              <FaFire
                size={40}
                className="text-warning"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>Completed</h6>
                <h2 className="fw-bold">45</h2>
              </div>

              <FaCheckCircle
                size={40}
                className="text-success"
              />
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="card shadow border-0 rounded-4">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h6>Menu Items</h6>
                <h2 className="fw-bold">32</h2>
              </div>

              <FaUtensils
                size={40}
                className="text-danger"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Chart + Popular Dishes */}

      <div className="row mt-4">

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0 rounded-4 h-100">

            <div className="card-header bg-white fw-bold">
              Order Status
            </div>

            <div className="card-body">

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>

                  <Pie
                    data={data}
                    dataKey="value"
                    outerRadius={100}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />

                </PieChart>
              </ResponsiveContainer>

            </div>

          </div>

        </div>

        <div className="col-lg-6 mb-4">

          <div className="card shadow border-0 rounded-4 h-100">

            <div className="card-header bg-white fw-bold">
              Popular Dishes
            </div>

            <div className="card-body">

              <ul className="list-group list-group-flush">

                <li className="list-group-item d-flex justify-content-between">
                  Chicken Biryani
                  <span className="badge bg-success">120</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Fried Rice
                  <span className="badge bg-primary">95</span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Burger
                  <span className="badge bg-warning text-dark">
                    80
                  </span>
                </li>

                <li className="list-group-item d-flex justify-content-between">
                  Pizza
                  <span className="badge bg-danger">
                    74
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* Today's Orders */}

      <div className="card shadow border-0 rounded-4">

        <div className="card-header bg-white fw-bold">
          Today's Orders
        </div>

        <div className="table-responsive">

          <table className="table table-hover mb-0">

            <thead className="table-light">

              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Dish</th>
                <th>Qty</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              <tr>
                <td>001</td>
                <td>John</td>
                <td>Chicken Biryani</td>
                <td>2</td>
                <td>
                  <span className="badge bg-warning">
                    Preparing
                  </span>
                </td>
              </tr>

              <tr>
                <td>002</td>
                <td>Emma</td>
                <td>Pizza</td>
                <td>1</td>
                <td>
                  <span className="badge bg-success">
                    Completed
                  </span>
                </td>
              </tr>

              <tr>
                <td>003</td>
                <td>David</td>
                <td>Burger</td>
                <td>3</td>
                <td>
                  <span className="badge bg-danger">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Recent Activity */}

      <div className="card shadow border-0 rounded-4 mt-4">

        <div className="card-header bg-white fw-bold">
          Kitchen Activity
        </div>

        <div className="card-body">

          <ul className="list-group list-group-flush">

            <li className="list-group-item">
              🍽 Order #101 marked as Completed
            </li>

            <li className="list-group-item">
              🔥 New order received for Pizza
            </li>

            <li className="list-group-item">
              👨‍🍳 Chef started preparing Fried Rice
            </li>

            <li className="list-group-item">
              ✅ Chicken Biryani served successfully
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
}