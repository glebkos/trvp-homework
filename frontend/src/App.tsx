import './App.css';
import {MainPage} from './Pages/mainPage/MainPage.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import React from "react";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
