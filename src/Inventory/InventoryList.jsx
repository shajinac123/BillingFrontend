import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Plus,
  Pencil,
  Trash2,
} from "lucide-react";

import {
  getInventory,
  deleteInventory,
} from "./inventoryService";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function InventoryList() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {
    try {
      const res = await getInventory();
      setInventory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const removeItem = async (id) => {
    if (!window.confirm("Delete this item?")) return;

    await deleteInventory(id);

    setInventory((prev) =>
      prev.filter((item) => item._id !== id)
    );
  };

  const filtered = inventory.filter((item) =>
    item.productName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const getStatus = (qty, min) => {
    if (qty === 0)
      return {
        text: "Out of Stock",
        color: "bg-red-100 text-red-700",
      };

    if (qty <= min)
      return {
        text: "Low Stock",
        color: "bg-yellow-100 text-yellow-700",
      };

    return {
      text: "In Stock",
      color: "bg-green-100 text-green-700",
    };
  };

  const inStock = inventory.filter(
    (p) => p.quantity > p.minimumStock
  ).length;

  const lowStock = inventory.filter(
    (p) =>
      p.quantity > 0 &&
      p.quantity <= p.minimumStock
  ).length;

  const outStock = inventory.filter(
    (p) => p.quantity === 0
  ).length;

  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-6">

          <div className="flex justify-between items-center mb-6">

            <h1 className="text-3xl font-bold">
              Inventory
            </h1>

            <button
              onClick={() =>
                navigate("/inventory/add")
              }
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg flex gap-2 items-center"
            >
              <Plus size={18} />
              Add Item
            </button>

          </div>

          {/* Dashboard Cards */}

          <div className="grid md:grid-cols-4 gap-5 mb-8">

            <div className="bg-white rounded-xl shadow p-5">
              <h3>Total Products</h3>
              <p className="text-3xl font-bold">
                {inventory.length}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3>In Stock</h3>
              <p className="text-3xl text-green-600 font-bold">
                {inStock}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3>Low Stock</h3>
              <p className="text-3xl text-yellow-500 font-bold">
                {lowStock}
              </p>
            </div>

            <div className="bg-white rounded-xl shadow p-5">
              <h3>Out of Stock</h3>
              <p className="text-3xl text-red-600 font-bold">
                {outStock}
              </p>
            </div>

          </div>

          {/* Search */}

          <div className="relative w-80 mb-6">

            <Search
              className="absolute left-3 top-3"
              size={18}
            />

            <input
              placeholder="Search..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full border rounded-lg pl-10 py-2"
            />

          </div>

          {/* Table */}

          <div className="bg-white rounded-xl shadow overflow-hidden">

            <table className="w-full">

              <thead className="bg-gray-100">

                <tr>
                  <th className="p-4">Product</th>
                  <th>Category</th>
                  <th>Supplier</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

              </thead>

              <tbody>

                {filtered.map((item) => {

                  const status = getStatus(
                    item.quantity,
                    item.minimumStock
                  );

                  return (
                    <tr key={item._id} className="border-b">

                      <td className="p-4">
                        {item.productName}
                      </td>

                      <td>{item.category}</td>

                      <td>{item.supplier}</td>

                      <td>{item.quantity}</td>

                      <td>{item.unit}</td>

                      <td>
                        <span
                          className={`px-3 py-1 rounded-full ${status.color}`}
                        >
                          {status.text}
                        </span>
                      </td>

                      <td>

                        <div className="flex gap-3">

                          <button
                            onClick={() =>
                              navigate(
                                `/inventory/edit/${item._id}`
                              )
                            }
                          >
                            <Pencil size={18} />
                          </button>

                          <button
                            onClick={() =>
                              removeItem(item._id)
                            }
                          >
                            <Trash2 size={18} />
                          </button>

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}