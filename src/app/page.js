"use client";

import React, { useState } from 'react';
import Header from './Header';
import MenuItem from './Menuitem';
import './globals.css';
import './buttons.css';

// Dados iniciais dos itens do menu
const initialMenuItems = {
  bolos: [
    {
      name: 'Bolo de cenoura com chocolate',
      description: 'Bolo com cobertura',
      price: 'R$ 36,00',
      image: '/bolocenoura.jpg'
    },
    {
      name: 'Bolo de banana',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bolobanana.jpg'
    },
    {
      name: 'Bolo de Chocolate',
      description: 'Bolo com cobertura',
      price: 'R$ 36,00',
      image: '/bolochocolate.jpg'
    },
    {
      name: 'Bolo de Churros',
      description: 'Bolo com cobertura',
      price: 'R$ 36,00',
      image: '/bolochurros.jpg'
    },
    {
      name: 'Bolo de Ninho',
      description: 'Bolo com cobertura',
      price: 'R$ 36,00',
      image: '/boloninho.jpg'
    },
    {
      name: 'Bolo Vulcão',
      description: 'Bolo com cobertura',
      price: 'R$ 40,00',
      image: '/bolovulcao.jpg'
    },
    {
      name: 'Bolo Piscina',
      description: 'Bolo com cobertura',
      price: 'R$ 47,00',
      image: '/bolopiscina.jpg'
    },
    {
      name: 'Bolo de Laranja',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bololaranja.jpg'
    },
    {
      name: 'Bolo de Maçã',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bolomaca.jpg'
    },
    {
      name: 'Bolo de Iogurte',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/boloiogurte.jpg'
    },
    {
      name: 'Bolo de Milho',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bolomilho.jpg'
    },
    {
      name: 'Bolo de Fubá',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bolofuba.jpg'
    },
    {
      name: 'Bolo de Mandioca',
      description: 'Bolo sem cobertura',
      price: 'R$ 30,00',
      image: '/bolomandioca.webp'
    },
    {
      name: 'Bolo de Fubá com goiaba',
      description: 'Bolo sem cobertura',
      price: 'R$ 34,00',
      image: '/bolofubagoiaba.jpg'
    }
  ],
  tortas: [
    {
      name: 'Torta de Frango',
      description: '',
      price: 'R$ 36,90',
      image: '/tortadefrango.jpeg'  
    },
    {
      name: 'Torta de Frango com Palmito',
      description: '',
      price: 'R$ 36,90',
      image: '/tortadefrangopalmito.jpeg'  
    },
    {
      name: 'Torta de Alho Poró',
      description: '',
      price: 'R$ 36,90',
      image: '/tortadealhoporo.jpeg'  
    },
    {
      name: 'Torta de Palmito',
      description: '',
      price: 'R$ 39,90',
      image: '/tortadepalmito.jpeg'
    },
    {
      name: 'Torta de Frango com catupiry',
      description: '',
      price: 'R$ 45,00',
      image: '/tortadefrangocatupiry.jpeg'
    }
    
  ]
};

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('bolos');
  const [menuItems, setMenuItems] = useState(initialMenuItems.bolos);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setMenuItems(initialMenuItems[tab]);
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
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}