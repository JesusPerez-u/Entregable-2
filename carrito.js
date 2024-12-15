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
