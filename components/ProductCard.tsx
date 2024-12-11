import { Product } from "@/ts/types";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded-md">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
