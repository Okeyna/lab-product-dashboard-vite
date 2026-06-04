import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, removeProduct }) => {
  const { name, price, inStock } = product;
  return (
    <div className={inStock ? "inStock" : "outOfStockClass"}>
      <h3>{name}</h3>
      <p>${price}</p>
      <p>{inStock ? 'In Stock' : 'Out of Stock'}</p>
      <button onClick={() => removeProduct(product.id)}>Remove</button> 
    </div>
  );
};

export default ProductCard;
