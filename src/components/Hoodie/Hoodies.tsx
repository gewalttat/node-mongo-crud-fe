import { Button } from '@mui/material';
import React from 'react';
import { ClothesCard } from '../../shared/ClothesCard/ClothesCard';
import './Hoodies.scss'

export const Hoodies = () => {
    const items = [
        { size: 'S', price: 2000, name: "Худи №1" },
        { size: 'M', price: 2000, name: "Худи №2" },
        { size: 'L', price: 2000, name: "Худи №3" },
        { size: 'S', price: 2000, name: "Худи №4" },
        { size: 'M', price: 2000, name: "Худи №5" },
        { size: 'M', price: 2000, name: "Худи №6" },
        { size: 'S', price: 2000, name: "Худи №7" },
        { size: 'M', price: 2000, name: "Худи №8" },
        { size: 'M', price: 2000, name: "Худи №9" }];
    return (
        <>
            <Button variant="text" href='/'> Назад</Button>
            <div className='parent_hoodie'>
                {items.map((i, index) =>
                    <ClothesCard name={i.name} price={i.price} size={i.size} num={String(index + 1)} />
                )}
            </div>
        </>
    );
};