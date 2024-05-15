
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <h1 className="text-3xl mt-8">Bem-vindo ao meu site!</h1>
        <p className="text-lg mt-4">Esta é a página inicial do meu site.</p>
      </div>
    </div>
  );
};

export default Home;

