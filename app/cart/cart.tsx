import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="border p-4 mb-4 rounded-md">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => removeFromCart(product.id)}
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
