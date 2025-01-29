import React from "react";
import Link from "next/link";

const Products = () => {
  const productId = 883;
  return (
    <div>
      <Link href="/">Home</Link>

      <h1>Product list</h1>

      <h2>
        <Link href={`/products/1`} replace>
          Product 1
        </Link>
      </h2>

      <h2>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </h2>
    </div>
  );
};

export default Products;
