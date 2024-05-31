import React, { useState } from 'react';
import '../src/app/globals.css';
import HomePage from '../src/app/page'; // Importe o componente HomePage
import AddItemPage from '../src/app/add-item/page'; // Importe o componente AddItemPage

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
