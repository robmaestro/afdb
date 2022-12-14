import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Films from './components/Films'
import FilmDetails from './components/FilmDetails'
import Lists from './components/Lists'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Genre from './components/Genre';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}> </Route>
            <Route path="/films" element={<Films />}> </Route>
            <Route path="/lists" element={<Lists />}> </Route>
            <Route path="/films/Details" element={<FilmDetails />}> </Route>
            <Route path="/genre" element={<Genre />}></Route>
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
