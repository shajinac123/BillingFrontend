export default function CategoryButtons({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex gap-3 flex-wrap my-4">
      {categories.map((category) => (
        <button
          key={category._id}
          onClick={() => setSelectedCategory(category.name)}
          className={`px-4 py-2 rounded-lg transition ${
            selectedCategory === category.name
              ? "bg-orange-500 text-white"
              : "bg-white border hover:bg-orange-100"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}