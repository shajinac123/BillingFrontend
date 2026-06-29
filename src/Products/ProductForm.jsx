import { useState } from "react";


export default function ProductForm({
  product: initialData,
  isEdit = false,
}) {
  const [product, setProduct] = useState(
    initialData || {
      name: "",
      category: "",
      price: "",
      description: "",
      image: "",
      available: true,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEdit) {
  fetch(`http://localhost:5000/api/products/${product._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Product Updated Successfully");
    });
} else {
  fetch("http://localhost:5000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((res) => res.json())
    .then(() => {
      alert("Product Added Successfully");
    });
}

    // API call will be added in Step 2
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block font-medium mb-1">
            Product Name
          </label>

          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Chicken Biriyani"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">
            Category
          </label>

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            required
          >
            <option value="">Select Category</option>
            <option>Biriyani</option>
            <option>Pizza</option>
            <option>Burger</option>
            <option>Shawarma</option>
            <option>South Indian</option>
            <option>North Indian</option>
            <option>Juice</option>
            <option>Shake</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="block font-medium mb-1">
            Price
          </label>

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="150"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-1">
            Description
          </label>

          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-1">
            Image URL
          </label>

          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Availability */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="available"
            checked={product.available}
            onChange={handleChange}
          />

          <label>Available</label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          {isEdit ? "Update Product" : "Save Product"}
        </button>
      </form>
    </div>
  );
}