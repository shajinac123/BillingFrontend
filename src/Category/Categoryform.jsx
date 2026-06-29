import { useState } from "react";

export default function CategoryForm() {
  const [category, setCategory] = useState({
    name: "",
    image: "",
    description: "",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCategory((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      });

      const data = await res.json();

      alert("Category Added Successfully!");

      setCategory({
        name: "",
        image: "",
        description: "",
        active: true,
      });

      console.log(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Category
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Category Name */}
        <div>
          <label className="block font-medium mb-2">
            Category Name
          </label>

          <input
            type="text"
            name="name"
            value={category.name}
            onChange={handleChange}
            placeholder="Pizza"
            className="w-full border rounded-lg p-3"
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="block font-medium mb-2">
            Category Image
          </label>

          <input
            type="text"
            name="image"
            value={category.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium mb-2">
            Description
          </label>

          <textarea
            name="description"
            value={category.description}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-3"
            placeholder="Category description..."
          />
        </div>

        {/* Active */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="active"
            checked={category.active}
            onChange={handleChange}
          />

          <label>Active</label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
        >
          Save Category
        </button>
      </form>
    </div>
  );
}