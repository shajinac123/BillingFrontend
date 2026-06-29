import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  addInventory,
  updateInventory,
  getInventoryById,
} from "./inventoryService";

export default function InventoryForm({ isEdit = false }) {
  const navigate = useNavigate();
  const { id } = useParams();

  const [inventory, setInventory] = useState({
    productName: "",
    category: "",
    supplier: "",
    purchasePrice: "",
    sellingPrice: "",
    quantity: "",
    unit: "piece",
    minimumStock: "10",
    expiryDate: "",
  });

  useEffect(() => {
    if (isEdit && id) {
      loadInventory();
    }
  }, [id]);

  const loadInventory = async () => {
    try {
      const res = await getInventoryById(id);

      setInventory({
        productName: res.data.productName || "",
        category: res.data.category || "",
        supplier: res.data.supplier || "",
        purchasePrice: res.data.purchasePrice || "",
        sellingPrice: res.data.sellingPrice || "",
        quantity: res.data.quantity || "",
        unit: res.data.unit || "piece",
        minimumStock: res.data.minimumStock || 10,
        expiryDate: res.data.expiryDate
          ? res.data.expiryDate.substring(0, 10)
          : "",
      });
    } catch (err) {
      console.log(err);
      alert("Unable to load inventory.");
    }
  };

  const handleChange = (e) => {
    setInventory({
      ...inventory,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isEdit) {
        await updateInventory(id, inventory);
        alert("Inventory updated successfully.");
      } else {
        await addInventory(inventory);
        alert("Inventory added successfully.");
      }

      navigate("/inventory");
    } catch (err) {
      console.log(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">

        <h1 className="text-3xl font-bold mb-6">
          {isEdit ? "Edit Inventory" : "Add Inventory"}
        </h1>

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-5"
        >

          {/* Product Name */}
          <div>
            <label className="block mb-2 font-medium">
              Product Name
            </label>

            <input
              type="text"
              name="productName"
              value={inventory.productName}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-medium">
              Category
            </label>

            <input
              type="text"
              name="category"
              value={inventory.category}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Supplier */}
          <div>
            <label className="block mb-2 font-medium">
              Supplier
            </label>

            <input
              type="text"
              name="supplier"
              value={inventory.supplier}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Purchase Price */}
          <div>
            <label className="block mb-2 font-medium">
              Purchase Price
            </label>

            <input
              type="number"
              name="purchasePrice"
              value={inventory.purchasePrice}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Selling Price */}
          <div>
            <label className="block mb-2 font-medium">
              Selling Price
            </label>

            <input
              type="number"
              name="sellingPrice"
              value={inventory.sellingPrice}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-2 font-medium">
              Quantity
            </label>

            <input
              type="number"
              name="quantity"
              value={inventory.quantity}
              onChange={handleChange}
              required
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Unit */}
          <div>
            <label className="block mb-2 font-medium">
              Unit
            </label>

            <select
              name="unit"
              value={inventory.unit}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option value="piece">Piece</option>
              <option value="kg">Kg</option>
              <option value="g">Gram</option>
              <option value="litre">Litre</option>
              <option value="ml">ML</option>
              <option value="packet">Packet</option>
              <option value="box">Box</option>
            </select>
          </div>

          {/* Minimum Stock */}
          <div>
            <label className="block mb-2 font-medium">
              Minimum Stock
            </label>

            <input
              type="number"
              name="minimumStock"
              value={inventory.minimumStock}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block mb-2 font-medium">
              Expiry Date
            </label>

            <input
              type="date"
              name="expiryDate"
              value={inventory.expiryDate}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex gap-4 mt-4">

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg"
            >
              {isEdit ? "Update Inventory" : "Save Inventory"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/inventory")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}