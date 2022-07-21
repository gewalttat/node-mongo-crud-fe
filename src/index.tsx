import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import { MainMenu } from './shared/MainMenu/MainMenu';
import { RoutesContainer } from './shared/Routes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainMenu/>
    <Footer/>
    <RoutesContainer/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);