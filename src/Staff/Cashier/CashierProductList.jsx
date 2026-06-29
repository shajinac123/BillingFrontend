import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2, Plus } from "lucide-react";

import CashierSidebar from "./CashierSidebar";
import CashierNavbar from "./CashierNavbar";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);

      // safer state update
      setProducts((prev) =>
        prev.filter((p) => p._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex">

      {/* Sidebar */}
      <CashierSidebar />

      {/* Main Area */}
      <div className="flex-1 bg-slate-100 min-h-screen">

        {/* Navbar */}
        <CashierNavbar />

        {/* Content */}
        <div className="p-6">

          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-slate-700">
              Products
            </h1>

            <button
              onClick={() => navigate("/products/add")}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg"
            >
              <Plus size={18} />
              Add Product
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <h2 className="font-semibold">{product.name}</h2>

                <p className="text-sm text-gray-500">
                  {product.category}
                </p>

                <p className="text-indigo-600 font-bold mt-2">
                  ₹ {product.price}
                </p>

                <div className="flex justify-between mt-4">

                  <button
                    onClick={() =>
                      navigate(`/products/edit/${product._id}`)
                    }
                    className="text-blue-600 flex items-center gap-1"
                  >
                    <Pencil size={16} />
                    Edit
                  </button>

                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="text-red-600 flex items-center gap-1"
                  >
                    <Trash2 size={16} />
                    Delete
                  </button>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}