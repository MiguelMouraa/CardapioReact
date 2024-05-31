// components/Header.js
"use client";

import React from 'react';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="maintext">Bolos da Fabi</h1>
        <div className="header-links flex items-center">
          <div className="header-link flex items-center">
            <img
              src="/logowpp.png"
              alt="WhatsApp Logo"
              className="logowpp"
            />
            (11) 98505-3701
          </div>
          <a
            href="https://www.instagram.com/bolossdafabi?igsh=Y2dyYnM3emxidzAy"
            target="_blank"
            rel="noopener noreferrer"
            className="header-link flex items-center"
          >
            <img
              src="/logoinsta.png"
              alt="Instagram Logo"
              className="logoinsta"
            />
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
