// app/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';  // Importação para usar o roteamento
import Header from './Header';
import MenuItem from './Menuitem';
import './globals.css';

export default function HomePage() {
  const [menuItems, setMenuItems] = useState([
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
  ]);

  const router = useRouter(); // Hook para roteamento

  const handleDeleteItem = (index) => {
    const updatedMenuItems = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedMenuItems);
  };

  const handleAddItem = (newItem) => {
    setMenuItems([...menuItems, newItem]);
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-8">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-2xl font-bold mb-8">Nosso Cardápio</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onDelete={() => handleDeleteItem(index)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
