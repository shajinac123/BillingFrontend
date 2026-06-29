import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const {
    increaseQty,
    decreaseQty,
    removeItem,
  } = useCart();

  return (
    <div className="flex justify-between items-center py-3 border-b">
      <div>
        <h3>{item.name}</h3>

        <p>₹ {item.price}</p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item._id)}
          className="bg-gray-200 px-2 rounded"
        >
          -
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => increaseQty(item._id)}
          className="bg-gray-200 px-2 rounded"
        >
          +
        </button>
      </div>

      <div>

        ₹ {item.qty * item.price}

      </div>

      <button
        onClick={() => removeItem(item._id)}
        className="text-red-500"
      >
        Remove
      </button>
    </div>
  );
}