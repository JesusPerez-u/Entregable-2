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
