import React from 'react';

export default function MenuItem({ name, description, price, image, onDelete }) {
  return (
    <div className="menu-item-container">
      <img src={image} alt={name} className="menu-item-image" />
      <div className="menu-item-details">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <p className="menu-item-price">{price}</p>
        <button
          onClick={onDelete}
          className="delete-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
