import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Suponiendo que tienes un archivo CSS para estilos

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="background-image">
        <h1>Paradise Nursery</h1>
        <p>Explora nuestra línea de plantas de interior para un hogar más verde y saludable.</p>
        <Link to="/products">
          <button className="start-button">Comenzar</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
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
import React from 'react';
import './ProductCard.css';

function ProductCard({ product, addToCart }) {
  const [added, setAdded] = React.useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.price} USD</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} disabled={added}>
        {added ? 'Añadido al carrito' : 'Agregar al carrito'}
      </button>
    </div>
  );
}

export default ProductCard;
import React from 'react';
import './CartPage.css';

function CartPage({ cart, setCart }) {
  const handleIncrease = (product) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const handleDecrease = (product) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleRemove = (product) => {
    const updatedCart = cart.filter(item => item.id !== product.id);
    setCart(updatedCart);
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <header className="header">
        <h1>Paradise Nursery</h1>
        <div className="cart-summary">
          <p>Total de plantas: {cart.length}</p>
          <p>Total: {totalPrice} USD</p>
        </div>
      </header>
      <div className="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.price} USD</p>
              <div className="quantity-controls">
                <button onClick={() => handleDecrease(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrease(item)}>+</button>
              </div>
              <p>Subtotal: {item.price * item.quantity} USD</p>
              <button onClick={() => handleRemove(item)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button className="checkout-button">Pagar</button>
    </div>
  );
}

export default CartPage;

