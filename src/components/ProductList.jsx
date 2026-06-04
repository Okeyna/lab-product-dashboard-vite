import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, removeProduct }) => {
  // TODO: Check if the product list is empty and display a message if needed

  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} removeProduct={removeProduct} />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
