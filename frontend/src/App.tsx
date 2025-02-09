import './App.css';
import { MainPage } from './Pages/mainPage/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import React from 'react';
import { Manager } from './Pages/managerPage/Manager.tsx';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/manager/:id" element={<Manager />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
