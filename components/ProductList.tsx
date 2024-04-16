import { ProductListProps } from "@/types";
import React from "react";

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover"
          />
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p>{product.description}</p>
          <p className="text-green-500">${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
