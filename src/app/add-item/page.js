// app/add-item/page.js
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import AddMenuItemForm from '../AddMenuItemForm';
import Header from '../Header';
import '../globals.css';

export default function AddItemPage({ handleAddItem }) {
  const router = useRouter();

  const onAddItem = (newItem) => {
    handleAddItem(newItem); // Chama a função para adicionar o novo item
    router.push('/'); // Redireciona de volta para a página inicial
  };

  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between p-8">
        <div className="max-w-5xl w-full text-center">
          <h2 className="text-2xl font-bold mb-8">Adicionar Novo Item</h2>
          <AddMenuItemForm onAdd={onAddItem} />
        </div>
      </main>
    </>
  );
}
