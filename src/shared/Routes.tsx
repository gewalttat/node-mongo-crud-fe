import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import { Contact } from '../components/Contact/Contact';
import { Home } from '../components/Home/Home';
import { Hoodies } from '../components/Hoodie/Hoodies';
import { Sweatshirts } from '../components/Sweatshirts/Sweatshirts';
import { Tshirts } from '../components/T-Shirts/TShirts';

export const RoutesContainer = () => {
    return (
        <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home/>} />
        <Route path="hoodies" element={<Hoodies />} />
        <Route path="t-shirts" element={<Tshirts />} />
        <Route path="sweatshirts" element={<Sweatshirts />} />
        <Route path="contacts" element={<Contact />} />
      </Routes>
    );
};

