import React, { useState } from 'react';
import './globals.css';
import Tabs from './Tabs';

export default function AddMenuItemForm({ onAdd }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Cria um novo item com os dados do formulário
    const newItem = {
      name: name,
      description: description,
      price: price,
      image: image
    };
    // Chama a função onAdd para adicionar o novo item
    onAdd(newItem);
    // Limpa os campos do formulário
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <div className="input-group">
        <input
          type="text"
          className="input-field"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="Preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          className="input-field"
          placeholder="URL da Imagem"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="add-button">Adicionar Item</button>
    </form>
  );
}
