import React, { useState } from 'react';
import '../src/app/globals.css';
import HomePage from '../src/app/page'; // Importe o componente HomePage
import AddItemPage from '../src/app/add-item/page'; // Importe o componente AddItemPage

function App({ Component, pageProps }) {
  const [menuItems, setMenuItems] = useState([]); // Estado para os itens do menu

  // Função para adicionar um novo item ao menu
  const handleAddItem = (newItem) => {
    setMenuItems([...menuItems, newItem]); // Adiciona o novo item ao estado do menu
  };

  const getPageComponent = () => {
    if (Component === HomePage) {
      return <HomePage {...pageProps} menuItems={menuItems} />;
    }
    if (Component === AddItemPage) {
      return <AddItemPage {...pageProps} handleAddItem={handleAddItem} />;
    }
    return <Component {...pageProps} />;
  };

  return getPageComponent();
}

export default App;
