import { useCart } from "../context/CartContext";

export default function BillSummary() {
  const { cart } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.qty * item.price,
    0
  );

  const gst = subtotal * 0.05;

  const discount = subtotal > 500 ? 20 : 0;

  const total = subtotal + gst - discount;

  return (
    <div className="bg-white rounded-xl shadow p-5">

      <div className="flex justify-between mb-2">
        <span>Subtotal</span>

        <span>₹ {subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>GST (5%)</span>

        <span>₹ {gst.toFixed(2)}</span>
      </div>

      <div className="flex justify-between mb-2">
        <span>Discount</span>

        <span>₹ {discount}</span>
      </div>

      <hr className="my-4"/>

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>

        <span>₹ {total.toFixed(2)}</span>
      </div>

    </div>
  );
}