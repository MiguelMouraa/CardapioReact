// components/Header.js
"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="maintext">Bolos da Fabi</h1>
        <div className="header-links flex items-center space-x-6">
          <a
            href="https://wa.me/5511985053701"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <img
              src="/logowpp.png"
              alt="WhatsApp Logo"
              className="logowpp w-6 h-6 mr-2"
            />
            (11) 98505-3701
          </a>
          <a
            href="https://www.instagram.com/bolossdafabi?igsh=Y2dyYnM3emxidzAy"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <img
              src="/logoinsta.png"
              alt="Instagram Logo"
              className="logoinsta w-6 h-6 mr-2"
            />
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
