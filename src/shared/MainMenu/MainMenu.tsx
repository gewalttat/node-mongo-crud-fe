import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.scss';

export const MainMenu = () => {
    return (
        <div className='parent'>
            <Link to="/sweatshirts" className='div1'>СВИТШОТЫ</Link>
            <Link to="/t-shirts" className='div2'>ФУТБОЛКИ</Link>
            <Link to="/hoodies" className='div3'>ХУДИ</Link>
            <Link to="/contacts" className='div4'>КОНТАКТЫ</Link>
        </div>
    );
};
