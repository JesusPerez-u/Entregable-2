import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Purificadora de aire', imageUrl: 'path/to/image' },
  { id: 2, name: 'Lavanda', price: 15, category: 'Aromática', imageUrl: 'path/to/image' },
  // Agrega más productos aquí
];

function ProductList() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="product-list">
      <header className="header">
        <h1>Paradise Nursery</h1>
        <p>Las mejores plantas de interior para tu hogar.</p>
        <div className="cart-icon">
          <span>{cart.length}</span>
          <img src="cart-icon.png" alt="Carrito de compras" />
        </div>
      </header>
      <div className="product-groups">
        <h2>Purificadoras de aire</h2>
        <div className="product-cards">
          {products.filter(p => p.category === 'Purificadora de aire').map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
        <h2>Aromáticas</h2>
        <div className="product-cards">
          {products.filter(p => p.category === 'Aromática').map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
