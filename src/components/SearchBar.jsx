export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <input
      type="text"
      placeholder="Search food..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="border p-3 rounded-lg w-full"
    />
  );
}