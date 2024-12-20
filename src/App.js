// src/App.js
import React from 'react';
import Header from './components/top'; // Importing the Header component
import Sidebar from './components/left'; // Importing the Header component

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      
       {/* Rendering the Header component */}
      <div className="content">
        {/* Other components or content goes here */}
  
      </div>
    </div>
  );
}

export default App;
