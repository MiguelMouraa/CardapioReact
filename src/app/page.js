"use client";

import React, { useState } from 'react';
import Header from './Header';
import MenuItem from './Menuitem';
import './globals.css';
import './buttons.css';

const initialMenuItems = {
  bolos: [
    { name: 'BOLO DE CENOURA COM CHOCOLATE', description: 'Bolo com cobertura', price: 'R$ 37,90', image: '/bolocenoura.jpg' },
    { name: 'BOLO DE BANANA', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bolobanana.jpg' },
    { name: 'BOLO DE CHOCOLATE', description: 'Bolo com cobertura', price: 'R$ 40,90', image: '/bolochocolate.jpg' },
    { name: 'BOLO DE CHURROS', description: 'Bolo com cobertura', price: 'R$ 40,90', image: '/bolochurros.jpg' },
    { name: 'BOLO DE NINHO', description: 'Bolo com cobertura', price: 'R$ 40,90', image: '/boloninho.jpg' },
    { name: 'BOLO VULCÃO', description: 'Bolo com cobertura', price: 'R$ 49,90', image: '/bolovulcao.jpg' },
    { name: 'BOLO PISCINA', description: 'Bolo com cobertura', price: 'R$ 52,90', image: '/bolopiscina.jpg' },
    { name: 'BOLO DE LARANJA', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bololaranja.jpg' },
    { name: 'BOLO DE MAÇÃ', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bolomaca.jpg' },
    { name: 'BOLO DE IOGURTE', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/boloiogurte.jpg' },
    { name: 'BOLO DE MILHO', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bolomilho.jpg' },
    { name: 'BOLO DE FUBÁ', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bolofuba.jpg' },
    { name: 'BOLO DE MANDIOCA', description: 'Bolo sem cobertura', price: 'R$ 34,90', image: '/bolomandioca.webp' },
    { name: 'BOLO DE FUBÁ COM GOIABA', description: 'Bolo sem cobertura', price: 'R$ 38,90', image: '/bolofubagoiaba.jpg' }
  ],
  tortas: [
    { name: 'Torta de Frango', description: '', price: 'R$ 41,90', image: '/tortadefrango.jpeg' },
    { name: 'Torta de Frango com Palmito', description: '', price: 'R$ 38,90', image: '/tortadefrangopalmito.jpeg' },
    { name: 'Torta de Alho Poró', description: '', price: 'R$ 38,90', image: '/tortadealhoporo.jpeg' },
    { name: 'Torta de Palmito', description: '', price: 'R$ 44,90', image: '/tortadepalmito.jpeg' },
    { name: 'Torta de Frango com Catupiry', description: '', price: 'R$ 49,90', image: '/tortadefrangocatupiry.jpeg' },
    { name: 'Torta de Carne seca', description: '', price: 'R$ 49,90', image: '' }
  ]
};

function Modal({ item, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h3 className="modal-header">{item.name}</h3>
        <img src={item.image} alt={item.name} className="modal-image" />
        <p className="modal-description">{item.description}</p>
        <p className="modal-price">{item.price}</p>
        
        <div className="quantity-selector">
          <button onClick={decreaseQuantity} className="quantity-button">-</button>
          <span className="quantity-display">{quantity}</span>
          <button onClick={increaseQuantity} className="quantity-button">+</button>
        </div>
        
        <div className="modal-buttons">
          <button onClick={() => onAddToCart(item, quantity)} className="add-to-cart-button">Adicionar ao Carrinho</button>
          <button onClick={onClose} className="modal-close-button">Fechar</button>
        </div>
      </div>
    </div>
  );
}

function CartModal({ cart, onClose, onPlaceOrder, onRemoveItem }) {
  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal-container">
        <h3 className="cart-modal-header">Seu Carrinho</h3>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="cart-item">
              <p>{item.name} - {item.price} x{item.quantity}</p>
              <button onClick={() => onRemoveItem(index)} className="remove-item-button">Excluir</button>
            </div>
          ))
        )}
        <div className="cart-total">
          <p>Total: R$ {cart.reduce((acc, item) => acc + (parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity), 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
        </div>
        <div className="cart-modal-buttons">
          <button onClick={onPlaceOrder} className="place-order-button">Efetuar Pedido</button>
          <button onClick={onClose} className="cart-modal-close-button">Fechar</button>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('bolos');
  const [menuItems, setMenuItems] = useState(initialMenuItems.bolos);
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMenuItems(initialMenuItems[tab]);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const handleAddToCart = (item, quantity) => {
    const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    closeModal();
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  const handlePlaceOrder = () => {
    const total = cart.reduce((acc, item) => acc + (parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity), 0).toFixed(2);

    const message = cart
      .map((item, index) => `${index + 1}. ${item.name} - ${item.price} x${item.quantity}`)
      .join('\n') + `\n\nTotal: R$ ${total}`;

    const encodedMessage = encodeURIComponent(`Olá, gostaria de fazer um pedido:\n\n${message}`);
    const phoneNumber = '5511961346040'; 
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-8">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-2xl font-bold mb-8">Nosso Cardápio</h2>
          <div className="mb-4 flex justify-center gap-4">
            <button
              className={`button ${activeTab === 'bolos' ? 'button-active' : 'button-inactive'}`}
              onClick={() => handleTabChange('bolos')}
            >
              Bolos
            </button>
            <button
              className={`button ${activeTab === 'tortas' ? 'button-active' : 'button-inactive'}`}
              onClick={() => handleTabChange('tortas')}
            >
              Tortas
            </button>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <div key={index} onClick={() => handleItemClick(item)}>
                <MenuItem
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </div>
          <button
            className="view-cart-button cart-icon-button"
            onClick={() => setIsCartModalOpen(true)}
          >
            🛒
          </button>
        </div>
      </main>
      {selectedItem && <Modal item={selectedItem} onClose={closeModal} onAddToCart={handleAddToCart} />}
      {isCartModalOpen && <CartModal cart={cart} onClose={() => setIsCartModalOpen(false)} onPlaceOrder={handlePlaceOrder} onRemoveItem={handleRemoveItem} />}
    </>
  );
}
