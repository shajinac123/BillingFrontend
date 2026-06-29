import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="mt-3 text-lg font-bold">
        {product.name}
      </h2>

      <p className="text-orange-500 font-bold">
        ₹ {product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-4 w-full bg-orange-500 text-white py-2 rounded-lg"
      >
        Add
      </button>
    </div>
  );
}