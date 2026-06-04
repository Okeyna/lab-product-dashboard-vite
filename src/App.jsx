import React, { useState } from 'react';
import ProductList from './components/ProductList';
import data from '../db.json';

const App = () => {
  // TODO: Define initial product data
  const [products, setProducts] = useState(data.products);

  // TODO: Implement state to manage filtering
  const [filter, setFilter] = useState('');

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = products.filter((product) => {
    if (filter === 'inStock') {
      return product.inStock;
    }
    if (filter === 'outOfStock') {
      return !product.inStock;
    }
    return true;
  });

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={() => setFilter('inStock')}>In Stock</button>
      <button onClick={() => setFilter('outOfStock')}>Out of Stock</button>
      <button onClick={() => setFilter('')}>All Products</button> 
      <ProductList products={filteredProducts} removeProduct={removeProduct} />
    </div>
  );
};

export default App;
