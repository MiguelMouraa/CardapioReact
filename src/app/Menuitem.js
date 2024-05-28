import React from 'react';

export default function MenuItem({ name, description, price, image }) {
  return (
    <div className="menu-item-container">
      <img src={image} alt="Imagem do item" className="menu-item-image" />
      <div className="menu-item-details">
        <h2 className="menu-item-name">{name}</h2>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">{price}</p>
      </div>
    </div>
  );
}

