import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="maintext">Bolos da Fabi</h1>
        <div className="header-links flex items-center">
          <a
            href="https://l.instagram.com/?u=http%3A%2F%2Fbit.ly%2Fmywhattsfabi&e=AT1YmP8xpSTymbyIRGeb1sAY7jH4DYSt1SFKHSErR8Q1hH3oEGeb5KrXwJrSa8rFrkk6ntMUzepsLU_eS3AHLO015Yw1G3TDypA1qzRjmJUHC4lQ"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <img
              src="/logowpp.png" 
              alt=""
              className="logowpp" 
            />
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/bolossdafabi?igsh=Y2dyYnM3emxidzAy"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <img
              src="/logoinsta.png" // Adicione o caminho para o logo do Instagram
              alt=""
              className="logoinsta" // Ajuste o tamanho conforme necessário
            />
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}