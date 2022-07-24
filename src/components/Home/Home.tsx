import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
// import moment from 'moment';
import { Button, TextField } from '@mui/material';
import { SearchPanel } from '../SearchPanel/SearchPanel';
import HomeCards from '../HomeCards/HomeCards';

interface Data {
    author?: string,
    title?: string,
    content?: string,
    picture?: string,
    _id?: string,
    __v?: number
}

export const Home = () => {
    const [data, setData] = useState<Data[]>();
    const [post, setPost] = useState<Data>();

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts')
            .then((res: any) => setData(res.data));
    }, []);

    const handleTitleChange = (e: any) => {
        setPost({ ...post, title: e.target.value });
    };

    const handleAuthorChange = (e: any) => {
        setPost({ ...post, author: e.target.value });
    };

    const handleContentChange = (e: any) => {
        setPost({ ...post, content: e.target.value });
    };

    console.log(data, 'data')

    return (
        <>
            <SearchPanel/>
            <HomeCards/>
        </>
    )
}





{/* <TextField
                label="Имя"
                onChange={(newValue) => handleTitleChange(newValue)} />

            <TextField 
                label="Модель"
                onChange={(newValue) => handleAuthorChange(newValue)} />
            <TextField 
                label="Цена"
                onChange={(newValue) => handleContentChange(newValue)} />

            <Button variant="outlined"
                onClick={() => axios.post('http://localhost:8080/api/posts', post)}
            >Разместить заказ</Button>

            {post &&
                <div>
                    <h1>новый заказ!</h1>
                    <br />
                    <span>Имя: {post.title}</span>
                    <br />
                    <span>Модель: {post.author}</span>
                    <br />
                    <span>Цена: {post.content}</span>
                </div>

            } */}