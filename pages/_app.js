import 'tailwindcss/tailwind.css'
// Import React and any other required dependencies
import React from 'react';
import '../src/app/globals.css';

// Define the App component which wraps all page components
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// Export the App component as the default export
export default App;

