'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null); // Explicit type
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return; // Prevent fetch if ID is missing

    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: Product = await res.json(); // Ensure fetched data matches the Product type
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div className="text-center mt-20">Loading product details...</div>;
  }

  return (
    <main className="p-6">
      <div className="flex flex-wrap items-start gap-6">
        {/* Product Image */}
        <div className="w-full sm:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg" />
        </div>

        {/* Product Details */}
        <div className="w-full sm:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-blue-600 mb-4">${product.price}</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
