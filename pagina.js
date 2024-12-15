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
