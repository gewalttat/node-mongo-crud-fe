import React from 'react';
import { Home } from './components/Home/Home';
import './App.scss'

function App() {
  return (
    <div>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
    </nav>
    <Home/>
  </div>
  );
}

export default App;
