// AddMenuItemForm.js
import React, { useState } from 'react';

export default function AddMenuItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAdd = () => {
    if (!name || !description || !price || !image) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Adiciona o item com um R$ no início do preço
    onAdd({ name, description, price: `R$ ${price}`, image });

    // Limpa os campos após adicionar o item
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <div className="add-item-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
        <input
          type="text"
          placeholder="Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="input-field"
        />
      </div>
      <button onClick={handleAdd} className="add-button">
        Adicionar Item
      </button>
    </div>
  );
}
