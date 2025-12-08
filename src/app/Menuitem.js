
"use client";

import React from 'react';

export default function MenuItem({ name, description, price, image, onDelete }) {
  return (
    <div className="menu-item-container">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">{price}</p> 
      </div>
    </div>
  );
}
